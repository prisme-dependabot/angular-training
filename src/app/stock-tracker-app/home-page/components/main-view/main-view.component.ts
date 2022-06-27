import { Component, OnInit } from "@angular/core";
import { Stock } from "../../../../shared/models/stocks/Stock";
import { StocksLocalStorageCacheService } from "../../../../core/services/stocks-local-storage-cache.service";

@Component({
  selector: "home-page",
  templateUrl: "./main-view.component.html",
  styleUrls: ["./main-view.component.scss"],
})
export class MainViewComponent implements OnInit {
  stocks: Stock[] = [];

  constructor(
    private stocksLocalStorageCacheService: StocksLocalStorageCacheService
  ) {}

  ngOnInit(): void {
    this.stocksLocalStorageCacheService
      .getRecordedStocks()
      .subscribe((recordedStocks) => {
        this.stocks = recordedStocks;
      });
  }
}
