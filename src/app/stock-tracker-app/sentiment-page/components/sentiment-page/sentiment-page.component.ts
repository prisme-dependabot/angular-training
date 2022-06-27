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

  sentiments: Sentiment[] = [];
  consultedStock!: Stock;
  cardTitle!: string;

  constructor(
    private route: ActivatedRoute,
    private stocksLocalStorageCacheService: StocksLocalStorageCacheService
  ) {}

  ngOnInit(): void {
    this.updateLocalStorage();
    this.buildCardTitle();
  }

  updateLocalStorage() {
    this.consultedStock =
      this.stocksLocalStorageCacheService.getRecordedStockValueBySymbol(
        this.route.snapshot.paramMap.get("symbol")
      );
    const stockEvolution: Sentiment[] =
      this.route.snapshot.data[this.RESOLVED_DATA_NAME];
    if (this.consultedStock && !this.consultedStock.sentimentCached) {
      this.consultedStock.sentimentInformation = stockEvolution;
      this.consultedStock.sentimentCached = true;
      this.stocksLocalStorageCacheService.putStock(this.consultedStock);
    }
    this.sentiments = this.consultedStock?.sentimentInformation
      ?.sort((sentiment) => sentiment.year)
      .sort((sentiment) => sentiment.month);
    // TODO verifie que ca marche bien
  }

  buildCardTitle() {
    this.cardTitle = this.consultedStock.companyName.concat(
      " (" + this.consultedStock.symbol + ")"
    );
  }

  buildSentimentDate(sentiment: Sentiment): string {
    return sentiment.year
      .toString()
      .concat("-")
      .concat(sentiment.month.toString())
      .concat("-")
      .concat("01");
  }

  positiveChange(sentiment: Sentiment): boolean {
    return sentiment.mspr > 0;
  }

  negativeChange(sentiment: Sentiment): boolean {
    return sentiment.mspr < 0;
  }
}
