import { NgModule } from "@angular/core";
import { StocksService } from "./services/stocks.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { FinnhubApiInterceptor } from "./interceptors/finnhub-api.interceptor";
import { StocksResolverService } from "./resolvers/stocks-resolver.service";
import { StocksCacheInterceptor } from "./interceptors/stocks-cache.interceptor";
import { StocksLocalStorageCacheService } from "./services/stocks-local-storage-cache.service";

@NgModule({
  providers: [
    StocksService,
    StocksLocalStorageCacheService,
    StocksResolverService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FinnhubApiInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: StocksCacheInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
