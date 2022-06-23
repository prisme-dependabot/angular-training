import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { StockEvolution } from "../../shared/models/stocks/StockEvolution";
import { StocksService } from "../services/stocks.service";

@Injectable({
  providedIn: "root",
})
export class StocksResolverService implements Resolve<StockEvolution> {
  FINNHUB_API_URL = "https://finnhub.io/api/v1/";

  constructor(private stocksService: StocksService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<StockEvolution> | Promise<StockEvolution> | StockEvolution {
    console.log(route.paramMap.get("symbol"));
    return this.stocksService.getLastThreeMonthsStockSentimentInformationBySymbol(
      route.paramMap.get("symbol")
    );
  }
}
