import { NgModule } from "@angular/core";
import { MainViewComponent } from "./components/main-view/main-view.component";
import { StocksListComponent } from "./components/stocks-list/stocks-list.component";
import { SharedModule } from "../../shared/module/shared.module";

@NgModule({
  declarations: [MainViewComponent, StocksListComponent],
  imports: [SharedModule],
})
export class HomePageModule {}
