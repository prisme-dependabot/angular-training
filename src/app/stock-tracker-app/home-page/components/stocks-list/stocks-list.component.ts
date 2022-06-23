import { Component, Input, OnInit } from "@angular/core";
import { Stock } from "../../../../shared/models/stocks/Stock";

@Component({
  selector: "stocks-list",
  templateUrl: "./stocks-list.component.html",
  styleUrls: ["./stocks-list.component.scss"],
})
export class StocksListComponent implements OnInit {
  @Input() stocks: Stock[] = [];

  constructor() {}

  ngOnInit(): void {}
}
