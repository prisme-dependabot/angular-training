import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { SentimentPageComponent } from "./stock-tracker-app/stock-details/components/sentiment-page/sentiment-page.component";
import { APP_BASE_HREF } from "@angular/common";
import { StocksListComponent } from "./stock-tracker-app/home-page/components/stocks-list/stocks-list.component";
import { MainViewComponent } from "./stock-tracker-app/home-page/components/main-view/main-view.component";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "./shared/module/shared.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
  ],
  declarations: [
    AppComponent,
    MainViewComponent,
    SentimentPageComponent,
    StocksListComponent,
  ],
  bootstrap: [AppComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
})
export class AppModule {}
