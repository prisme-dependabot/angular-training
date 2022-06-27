import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { QuoteData } from "../../shared/models/stocks/QuoteData";
import { filter, forkJoin, map, Observable, throwIfEmpty } from "rxjs";
import { StockMainInformation } from "../../shared/models/stocks/StockMainInformation";
import { Stock } from "../../shared/models/stocks/Stock";
import { DatePipe } from "@angular/common";
import { Sentiment } from "../../shared/models/stocks/Sentiment";
import { FULL_DATE_FORMAT } from "../../shared/constants/formats/date-format";

@Injectable()
export class StocksService {
  private FINNHUB_API_URL = "https://finnhub.io/api/v1/";

  constructor(private http: HttpClient, private datepipe: DatePipe) {}

  getStockBySymbol(stockSymbol: string): Observable<Stock> {
    return forkJoin([
      this.getQuoteDataByStockSymbol(stockSymbol),
      this.getStockMainInformationBySymbol(stockSymbol),
    ]).pipe(
      filter((retrievedStock) =>
        this.stockIsFound(retrievedStock[0], retrievedStock[1])
      ),
      map((retrievedStock) =>
        this.fromQuoteDataAndStockMainInformationToStock(
          retrievedStock[0],
          retrievedStock[1]
        )
      ),
      throwIfEmpty(() => new Error("No stock found with this symbol!"))
    );
  }

  getQuoteDataByStockSymbol(stockSymbol: string): Observable<QuoteData> {
    return this.http.get<QuoteData>(this.FINNHUB_API_URL + "quote", {
      params: {
        symbol: stockSymbol,
      },
    });
  }

  getStockMainInformationBySymbol(
    stockSymbol: string
  ): Observable<StockMainInformation> {
    return this.getStocksMainInformationByQuery(stockSymbol).pipe(
      map((stocks) => stocks.find((stock) => stock.symbol === stockSymbol))
    );
  }

  getStocksMainInformationByQuery(
    query: string
  ): Observable<StockMainInformation[]> {
    return this.http
      .get<{ count: number; result: StockMainInformation[] }>(
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

  stockIsFound(
    quote: QuoteData,
    sotckMainInformation: StockMainInformation
  ): boolean {
    return (
      !!sotckMainInformation &&
      !!Object.keys(quote).filter((key) => !!quote[key])?.length
    );
  }

  getLastThreeMonthsStockSentimentInformationBySymbol(
    stockSymbol: string
  ): Observable<Sentiment[]> {
    const currentDate = new Date();
    return this.http
      .get<{ data: Sentiment[]; symbol: string }>(
        this.FINNHUB_API_URL + "stock/insider-sentiment",
        {
          params: {
            symbol: stockSymbol,
            from: this.datepipe.transform(
              new Date(currentDate.getTime()).setMonth(
                currentDate.getMonth() - 2
              ),
              FULL_DATE_FORMAT
            ),
            to: this.datepipe.transform(currentDate, FULL_DATE_FORMAT),
          },
        }
      )
      .pipe(map((retrievedResponse) => retrievedResponse.data));
  }

  private fromQuoteDataAndStockMainInformationToStock(
    quoteData: QuoteData,
    stockMainInformation: StockMainInformation
  ): Stock {
    return {
      symbol: stockMainInformation.symbol,
      companyName: stockMainInformation.description,
      currentPrice: quoteData?.c,
      highPriceOfTheDay: quoteData?.h,
      openPriceOfTheDay: quoteData?.o,
      percentChange: quoteData?.dp,
      sentimentInformation: [],
      sentimentCached: false,
    };
  }
}
