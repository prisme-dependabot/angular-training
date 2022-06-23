import { NgModule } from "@angular/core";
import { StockResearchFormComponent } from "../components/stocks/stock-research-form/stock-research-form.component";
import { StockOverviewCardComponent } from "../components/stocks/stock-overview-card/stock-overview-card.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "../../app-routing.module";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { FinnhubApiInterceptor } from "../interceptors/finnhub-api.interceptor";

@NgModule({
  declarations: [StockResearchFormComponent, StockOverviewCardComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [StockResearchFormComponent, StockOverviewCardComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FinnhubApiInterceptor,
      multi: true,
    },
  ],
})
export class SharedModule {}
