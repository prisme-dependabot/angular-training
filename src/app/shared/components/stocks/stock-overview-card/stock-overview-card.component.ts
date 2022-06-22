import { Component, Input, OnInit } from "@angular/core";
import { SynthetisedStock } from "../../../models/stocks/SynthetisedStock";

@Component({
  selector: "stock-overview-card",
  templateUrl: "./stock-overview-card.component.html",
  styleUrls: ["./stock-overview-card.component.scss"],
})
export class StockOverviewCardComponent implements OnInit {
  @Input() synthetisedStock!: SynthetisedStock;

  sentiment!: {
    symbol: number;
  };

  constructor() {}

  ngOnInit(): void {
    this.sentiment = {
      symbol: 100,
    };
  }
}
