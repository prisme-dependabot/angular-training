import { Component, Input, OnInit } from "@angular/core";
import { SynthetisedStock } from "../../../../shared/models/stocks/SynthetisedStock";

@Component({
  selector: "stocks-list",
  templateUrl: "./stocks-list.component.html",
  styleUrls: ["./stocks-list.component.scss"],
})
export class StocksListComponent implements OnInit {
  @Input() synthetisedStocks: SynthetisedStock[] = [];

  constructor() {}

  ngOnInit(): void {}
}
