import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { StocksService } from "../services/stocks.service";
import { Sentiment } from "../../shared/models/stocks/Sentiment";
import { StocksLocalStorageCacheService } from "../services/stocks-local-storage-cache.service";
import { Stock } from "../../shared/models/stocks/Stock";

@Injectable()
export class StocksResolverService implements Resolve<Sentiment[]> {
  constructor(
    private stocksService: StocksService,
    private stocksLocalStorageCacheService: StocksLocalStorageCacheService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Sentiment[]> | Promise<Sentiment[]> | Sentiment[] {
    const symbol: string = route.paramMap.get("symbol");
    const recordedStock: Stock =
      this.stocksLocalStorageCacheService.getRecordedStockValueBySymbol(symbol);
    if (recordedStock && recordedStock.sentimentCached) {
      return of(recordedStock.sentimentInformation);
    }
    return this.stocksService.getLastThreeMonthsStockSentimentInformationBySymbol(
      symbol
    );
  }
}
