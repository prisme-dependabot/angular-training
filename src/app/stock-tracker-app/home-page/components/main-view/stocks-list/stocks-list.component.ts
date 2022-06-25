import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Stock } from "../../../../../shared/models/stocks/Stock";

@Component({
  selector: "stocks-list",
  templateUrl: "./stocks-list.component.html",
  styleUrls: ["./stocks-list.component.scss"],
})
export class StocksListComponent {
  @Input() stocks: Stock[] = [];
  @Output() deletedStockIndex = new EventEmitter<number>();

  constructor() {}

  deleteStock(index: number): void {
    this.deletedStockIndex.emit(index);
  }

  trackBySymbol(index: number, stock: Stock): string {
    return stock.symbol;
  }
}
