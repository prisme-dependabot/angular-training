import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { QuoteData } from "../models/stocks/QuoteData";
import { filter, forkJoin, map, Observable } from "rxjs";
import { SynthetisedStock } from "../models/stocks/SynthetisedStock";
import { Stock } from "../models/stocks/Stock";

@Injectable({
  providedIn: "root",
})
export class StockService {
  FINNHUB_API_URL = "https://finnhub.io/api/v1/";
  // quote?symbol=AAPL&token=
  // "https://finnhub.io/api/v1/search?q=apple&token="
  // curl "https://finnhub.io/api/v1/stock/insider-sentiment?symbol=TSLA&from=2015-01-01&to=2022-03-01&token="

  constructor(private http: HttpClient) {}

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

  quoteIsFound(quote: QuoteData): boolean {
    return !!Object.keys(quote).filter((key) => !!quote[key])?.length;
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
}
