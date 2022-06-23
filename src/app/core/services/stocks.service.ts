import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { QuoteData } from "../../shared/models/stocks/QuoteData";
import { filter, forkJoin, map, Observable } from "rxjs";
import { SynthetisedStock } from "../../shared/models/stocks/SynthetisedStock";
import { Stock } from "../../shared/models/stocks/Stock";
import { StockEvolution } from "../../shared/models/stocks/StockEvolution";
import { DatePipe } from "@angular/common";

@Injectable()
export class StocksService {
  FINNHUB_API_URL = "https://finnhub.io/api/v1/";
  DATE_FORMAT = "yyyy-MM-dd";

  constructor(private http: HttpClient, private datepipe: DatePipe) {}

  getStockBySymbol(stockSymbol: string): Observable<Stock> {
    return forkJoin([
      this.getQuoteDataByStockSymbol(stockSymbol),
      this.getSynthetisedStockBySymbol(stockSymbol),
    ]).pipe(
      filter(
        (retrievedStock) =>
          this.quoteIsFound(retrievedStock[0]) && !!retrievedStock[1]
      ),
      map((retrievedStock) => {
        return {
          quoteData: retrievedStock[0],
          synthetisedStock: retrievedStock[1],
        };
      })
    );
  }

  getQuoteDataByStockSymbol(stockSymbol: string): Observable<QuoteData> {
    return this.http.get<QuoteData>(this.FINNHUB_API_URL + "quote", {
      params: {
        symbol: stockSymbol,
      },
    });
  }

  getSynthetisedStockBySymbol(
    stockSymbol: string
  ): Observable<SynthetisedStock> {
    return this.getSynthetisedStocksByQuery(stockSymbol).pipe(
      map((stocks) => stocks.find((stock) => stock.symbol === stockSymbol))
    );
  }

  getSynthetisedStocksByQuery(query: string): Observable<SynthetisedStock[]> {
    return this.http
      .get<{ count: number; result: SynthetisedStock[] }>(
        this.FINNHUB_API_URL + "search",
        {
          params: {
            q: query,
          },
        }
      )
      .pipe(
        filter((data) => !!data.count),
        map((data) => data.result)
      );
  }

  quoteIsFound(quote: QuoteData): boolean {
    return !!Object.keys(quote).filter((key) => !!quote[key])?.length;
  }

  getLastThreeMonthsStockSentimentInformationBySymbol(
    stockSymbol: string
  ): Observable<StockEvolution> {
    const currentDate = new Date();
    return this.http
      .get<{ data: StockEvolution; symbol: string }>(
        this.FINNHUB_API_URL + "stock/insider-sentiment",
        {
          params: {
            symbol: stockSymbol,
            from: this.datepipe.transform(
              new Date(currentDate.getTime()).setMonth(
                currentDate.getMonth() - 2
              ),
              this.DATE_FORMAT
            ),
            to: this.datepipe.transform(currentDate, this.DATE_FORMAT),
          },
        }
      )
      .pipe(map((retrievedResponse) => retrievedResponse.data));
  }
}
