import { NgModule } from "@angular/core";
import { StocksService } from "./services/stocks.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { FinnhubApiInterceptor } from "./interceptors/finnhub-api.interceptor";

@NgModule({
  providers: [
    StocksService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FinnhubApiInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
