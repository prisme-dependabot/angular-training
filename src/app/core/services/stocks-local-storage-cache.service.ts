import { Injectable } from "@angular/core";
import { Stock } from "../../shared/models/stocks/Stock";
import { BehaviorSubject, Observable } from "rxjs";
import { NOT_FOUND_INDEX } from "../../shared/constants/not-found-index";

@Injectable()
export class StocksLocalStorageCacheService {
  private STORAGE_KEY_RECORDED_STOCKS: "recordedStocks";
  private recordedStocks = new BehaviorSubject<Stock[]>(
    this.retrievingStocksFromLocalStorage() || []
  );

  constructor() {}

  postRetrievedStock(stock: Stock): void {
    let recordedStocks: Stock[] = this.recordedStocks.getValue();
    recordedStocks.push(stock);
    this.setLocalStorageStocks(recordedStocks);
    this.recordedStocks.next(recordedStocks);
  }

  putStock(stock: Stock): void {
    let recordedStocks: Stock[] = this.recordedStocks.getValue();
    const idx = recordedStocks.findIndex(
      (recordedStock) => recordedStock.symbol === stock.symbol
    );
    if (idx !== NOT_FOUND_INDEX) {
      recordedStocks.splice(idx, 1, stock);
      this.setLocalStorageStocks(recordedStocks);
      this.recordedStocks.next(recordedStocks);
    }
  }

  deleteStock(index: number): void {
    let recordedStocks: Stock[] = this.recordedStocks.getValue();
    recordedStocks.splice(index, 1);
    this.setLocalStorageStocks(recordedStocks);
    this.recordedStocks.next(recordedStocks);
  }

  getRecordedStocks(): Observable<Stock[]> {
    return this.recordedStocks.asObservable();
  }

  getRecordedStocksValues(): Stock[] {
    return this.recordedStocks.getValue();
  }

  getRecordedStockValueBySymbol(symbol: string): Stock {
    return this.recordedStocks
      .getValue()
      ?.find((stock) => stock?.symbol === symbol);
  }

  private retrievingStocksFromLocalStorage(): Stock[] {
    return JSON.parse(localStorage.getItem(this.STORAGE_KEY_RECORDED_STOCKS));
  }

  private setLocalStorageStocks(stocks: Stock[]) {
    localStorage.setItem(
      this.STORAGE_KEY_RECORDED_STOCKS,
      JSON.stringify(stocks)
    );
  }
}
