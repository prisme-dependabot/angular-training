import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainViewComponent } from "./stock-tracker-app/home-page/components/main-view/main-view.component";
import { StockDetailsComponent } from "./stock-tracker-app/stock-details/components/stock-details/stock-details.component";

export const routes: Routes = [
  { path: "", component: MainViewComponent },
  { path: "sentiment/:symbol", component: StockDetailsComponent },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
