import { Component, Input, OnInit } from "@angular/core";
import { Stock } from "../../../models/stocks/Stock";

@Component({
  selector: "stock-overview-card",
  templateUrl: "./stock-overview-card.component.html",
  styleUrls: ["./stock-overview-card.component.scss"],
})
export class StockOverviewCardComponent implements OnInit {
  @Input() stock!: Stock;

  constructor() {}

  ngOnInit(): void {}
}
