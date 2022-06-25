import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Sentiment } from "../../../../shared/models/stocks/Sentiment";
import { StocksLocalStorageCacheService } from "../../../../core/services/stocks-local-storage-cache.service";
import { Stock } from "../../../../shared/models/stocks/Stock";

@Component({
  selector: "sentiment-page",
  templateUrl: "./sentiment-page.component.html",
  styleUrls: ["./sentiment-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SentimentPageComponent implements OnInit {
  private RESOLVED_DATA_NAME = "resolvedSentimentInformation";

  consultedStock!: Stock;

  constructor(
    private route: ActivatedRoute,
    private stocksLocalStorageCacheService: StocksLocalStorageCacheService
  ) {}

  ngOnInit(): void {
    this.updateLocalStorage();
  }

  updateLocalStorage() {
    this.consultedStock =
      this.stocksLocalStorageCacheService.getRecordedStockValueBySymbol(
        this.route.snapshot.paramMap.get("symbol")
      );
    const stockEvolution: Sentiment[] =
      this.route.snapshot.data[this.RESOLVED_DATA_NAME];
    if (this.consultedStock && stockEvolution) {
      this.consultedStock.sentimentInformation = stockEvolution;
    }
    this.consultedStock.sentimentCached = true;
    this.stocksLocalStorageCacheService.putStock(this.consultedStock);
  }
}
