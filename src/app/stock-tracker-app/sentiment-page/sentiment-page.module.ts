import { NgModule } from "@angular/core";
import { SentimentPageComponent } from "./components/sentiment-page/sentiment-page.component";
import { SentimentPageRoutingModule } from "./sentiment-page-routing.module";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [SentimentPageComponent],
  imports: [CommonModule, SentimentPageRoutingModule],
})
export class SentimentPageModule {}
