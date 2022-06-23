import { NgModule } from "@angular/core";
import { StockResearchFormComponent } from "../components/stocks/stock-research-form/stock-research-form.component";
import { StockOverviewCardComponent } from "../components/stocks/stock-overview-card/stock-overview-card.component";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { FinnhubApiInterceptor } from "../interceptors/finnhub-api.interceptor";
import { CommonModule, DatePipe } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule, HttpClientModule],
  declarations: [StockResearchFormComponent, StockOverviewCardComponent],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    StockResearchFormComponent,
    StockOverviewCardComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FinnhubApiInterceptor,
      multi: true,
    },
    DatePipe,
  ],
})
export class SharedModule {}
