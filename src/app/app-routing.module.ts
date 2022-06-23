import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainViewComponent } from "./stock-tracker-app/home-page/components/main-view/main-view.component";
import { SentimentPageComponent } from "./stock-tracker-app/stock-details/components/sentiment-page/sentiment-page.component";

export const routes: Routes = [
  { path: "", component: MainViewComponent },
  { path: "sentiment/:symbol", component: SentimentPageComponent },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
