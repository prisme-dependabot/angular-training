import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomePageComponent } from "./stock-tracker-app/home-page/components/home-page/home-page.component";
import { StockDetailsComponent } from "./stock-tracker-app/stock-details/components/stock-details/stock-details.component";
import { StockResearchFormComponent } from "./shared/components/stocks/stock-research-form/stock-research-form.component";
import { StockOverviewCardComponent } from "./shared/components/stocks/stock-overview-card/stock-overview-card.component";
import { APP_BASE_HREF } from "@angular/common";

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HomePageComponent,
    StockDetailsComponent,
    StockResearchFormComponent,
    StockOverviewCardComponent,
  ],
  bootstrap: [AppComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
})
export class AppModule {}
