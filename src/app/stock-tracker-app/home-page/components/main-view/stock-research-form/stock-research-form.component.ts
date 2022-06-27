import { Component, OnInit } from "@angular/core";
import { StocksService } from "../../../../../core/services/stocks.service";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { onlyLettersValidator } from "../../../../../shared/validators/only-letters.validator";
import { StocksLocalStorageCacheService } from "../../../../../core/services/stocks-local-storage-cache.service";

@Component({
  selector: "stock-research-form",
  templateUrl: "./stock-research-form.component.html",
})
export class StockResearchFormComponent implements OnInit {
  stockResearchForm!: FormGroup;
  noStockFound = false;

  constructor(
    private stockService: StocksService,
    private stocksLocalStorageCacheService: StocksLocalStorageCacheService
  ) {}

  get symbol(): AbstractControl {
    return this.stockResearchForm.get("symbol");
  }

  ngOnInit(): void {
    this.stockResearchForm = new FormGroup({
      symbol: new FormControl(null, [
        onlyLettersValidator,
        Validators.required,
        Validators.maxLength(5),
      ]),
    });
  }

  onSubmit(): void {
    if (this.stockResearchForm.valid) {
      const stockSymbol = this.stockResearchForm.value.symbol.toUpperCase();
      this.stockService.getStockBySymbol(stockSymbol).subscribe({
        next: (stock) => {
          this.resetResearch();
          this.stocksLocalStorageCacheService.postRetrievedStock(stock);
        },
        error: () => {
          if (this.stockSymbolNotPresentInCache(stockSymbol)) {
            this.noStockFound = true;
          } else {
            this.resetResearch();
          }
        },
      });
    }
  }

  private resetResearch(): void {
    document.getElementById("stock-symbol").blur();
    this.stockResearchForm.reset();
    this.noStockFound = false;
  }

  private stockSymbolNotPresentInCache(symbol): boolean {
    return !this.stocksLocalStorageCacheService.getRecordedStockValueBySymbol(
      symbol
    );
  }
}
