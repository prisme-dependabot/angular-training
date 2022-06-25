import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { EMPTY, Observable } from "rxjs";
import { StocksLocalStorageCacheService } from "../services/stocks-local-storage-cache.service";

@Injectable()
export class StocksCacheInterceptor implements HttpInterceptor {
  constructor(
    private stocksLocalStorageCacheService: StocksLocalStorageCacheService
  ) {}

  intercept(
    req: HttpRequest<any>, // TODO : à typer
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const finnhubApiUrl = "https://finnhub.io/api/v1/";
    const queryParamName = "q";
    const symbolParamName = "symbol";
    const fromDateParamName = "from";
    const toDateParamName = "to";

    // Only manage the requests with Finnhub API
    if (!req.url.includes(finnhubApiUrl)) {
      return next.handle(req);
    }

    const symbol =
      req.params.get(queryParamName) || req.params.get(symbolParamName);
    const cachedStock =
      this.stocksLocalStorageCacheService.getRecordedStockValueBySymbol(symbol);

    // Continue the requests concerning one stock if it is not present in cach
    if (!cachedStock) {
      return next.handle(req);
    }

    // Management of getQuoteDataByStockSymbol request
    if (
      req.params.has(symbolParamName) &&
      this.requestContainsJustOneParamExcepTokenParam(req)
    ) {
      return EMPTY;
    }

    // Management of getStocksMainInformationByQuery request
    if (req.params.has(queryParamName)) {
      return EMPTY;
    }

    // Management of getLastThreeMonthsStockSentimentInformationBySymbol request
    if (
      cachedStock.sentimentCached &&
      req.params.has(toDateParamName) &&
      req.params.has(fromDateParamName)
    ) {
      return EMPTY;
    }

    return next.handle(req);
  }

  private requestContainsJustOneParamExcepTokenParam(req: HttpRequest<any>) {
    return req.params.keys().length === 2;
  }
}
