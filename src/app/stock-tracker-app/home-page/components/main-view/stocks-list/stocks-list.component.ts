import { Component, Input } from "@angular/core";
import { Stock } from "../../../../../shared/models/stocks/Stock";
import { StocksLocalStorageCacheService } from "../../../../../core/services/stocks-local-storage-cache.service";

@Component({
  selector: "stocks-list",
  templateUrl: "./stocks-list.component.html",
})
export class StocksListComponent {
  @Input() stocks: Stock[] = [];

  constructor(
    private stocksLocalStorageCacheService: StocksLocalStorageCacheService
  ) {}

  deleteStock(index: number): void {
    this.stocksLocalStorageCacheService.deleteStock(index);
  }

  trackBySymbol(index: number, stock: Stock): string {
    return stock.symbol;
  }
}
