import { NgModule } from "@angular/core";
import { SentimentPageComponent } from "./components/sentiment-page/sentiment-page.component";
import { SentimentPageRoutingModule } from "./sentiment-page-routing.module";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [SentimentPageComponent],
  imports: [SentimentPageRoutingModule, SharedModule],
})
export class SentimentPageModule {}
