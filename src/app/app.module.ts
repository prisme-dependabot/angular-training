import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { APP_BASE_HREF } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { HomePageModule } from "./stock-tracker-app/home-page/home-page.module";

@NgModule({
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, HomePageModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
})
export class AppModule {}
