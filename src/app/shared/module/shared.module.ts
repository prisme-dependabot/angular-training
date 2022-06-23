import { NgModule } from "@angular/core";
import { StockResearchFormComponent } from "../components/stocks/stock-research-form/stock-research-form.component";
import { StockOverviewCardComponent } from "../components/stocks/stock-overview-card/stock-overview-card.component";
import { CommonModule, DatePipe } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  declarations: [StockResearchFormComponent, StockOverviewCardComponent],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    StockResearchFormComponent,
    StockOverviewCardComponent,
  ],
  providers: [DatePipe],
})
export class SharedModule {}
