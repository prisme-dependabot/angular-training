import { Component, OnInit } from "@angular/core";
import { SynthetisedStock } from "../../../../shared/models/stocks/SynthetisedStock";

@Component({
  selector: "home-page",
  templateUrl: "./main-view.component.html",
  styleUrls: ["./main-view.component.scss"],
})
export class MainViewComponent implements OnInit {
  synthetisedStocks: SynthetisedStock[] = [];

  constructor() {}

  ngOnInit(): void {}
}
