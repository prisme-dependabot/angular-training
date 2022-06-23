import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SentimentPageComponent } from "./components/sentiment-page/sentiment-page.component";
import { StocksResolverService } from "../../core/resolvers/stocks-resolver.service";

export const routes: Routes = [
  {
    path: ":symbol",
    component: SentimentPageComponent,
    resolve: {
      resolvedStockEvolution: StocksResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SentimentPageRoutingModule {}
