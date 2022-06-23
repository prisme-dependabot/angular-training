import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainViewComponent } from "./stock-tracker-app/home-page/components/main-view/main-view.component";

export const routes: Routes = [
  { path: "", component: MainViewComponent },
  {
    path: "sentiment",
    loadChildren: () =>
      import("./stock-tracker-app/sentiment-page/sentiment-page.module").then(
        (m) => m.SentimentPageModule
      ),
  },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
