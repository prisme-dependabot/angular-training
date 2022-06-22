import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./stock-tracker-app/home-page/components/home-page/home-page.component";
import { StockDetailsComponent } from "./stock-tracker-app/stock-details/components/stock-details/stock-details.component";

export const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "sentiment/:symbol", component: StockDetailsComponent },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
