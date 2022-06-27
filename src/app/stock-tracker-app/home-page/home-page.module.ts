import { NgModule } from "@angular/core";
import { MainViewComponent } from "./components/main-view/main-view.component";
import { StocksListComponent } from "./components/main-view/stocks-list/stocks-list.component";
import { SharedModule } from "../../shared/shared.module";
import { StockResearchFormComponent } from "./components/main-view/stock-research-form/stock-research-form.component";
import { StockOverviewCardComponent } from "./components/main-view/stocks-list/stock-overview-card/stock-overview-card.component";

@NgModule({
  declarations: [
    StockResearchFormComponent,
    StockOverviewCardComponent,
    StocksListComponent,
    MainViewComponent,
  ],
  imports: [SharedModule],
})
export class HomePageModule {}
