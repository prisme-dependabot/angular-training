import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { StockEvolution } from "../../../../shared/models/stocks/StockEvolution";

@Component({
  selector: "sentiment-page",
  templateUrl: "./sentiment-page.component.html",
  styleUrls: ["./sentiment-page.component.scss"],
})
export class SentimentPageComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const stockEvolution: StockEvolution =
      this.route.snapshot.data["resolvedStockEvolution"];
    console.log(stockEvolution);
  }
}
