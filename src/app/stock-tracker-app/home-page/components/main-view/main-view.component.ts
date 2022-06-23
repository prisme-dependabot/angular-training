import { Component, OnInit } from "@angular/core";
import { Stock } from "../../../../shared/models/stocks/Stock";
import { QuoteData } from "../../../../shared/models/stocks/QuoteData";

@Component({
  selector: "home-page",
  templateUrl: "./main-view.component.html",
  styleUrls: ["./main-view.component.scss"],
})
export class MainViewComponent implements OnInit {
  stocks: Stock[] = [
    {
      synthetisedStock: {
        description: "prout",
        displaySymbol: "prout",
        symbol: "TSLA",
        type: "prout",
      },
      quoteData: {} as QuoteData,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
