import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { Stock } from "../../../../../../shared/models/stocks/Stock";

@Component({
  selector: "stock-overview-card",
  templateUrl: "./stock-overview-card.component.html",
  styleUrls: ["./stock-overview-card.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockOverviewCardComponent implements OnInit {
  @Input() stock: Stock;
  @Output() deleteButton = new EventEmitter();

  CURRENCY_SYMBOL = "USD";
  cardTitle!: string;

  constructor() {}

  ngOnInit(): void {
    this.buildCardTitle();
  }

  buildCardTitle() {
    this.cardTitle = this.stock.companyName.concat(
      " (" + this.stock.symbol + ")"
    );
  }

  positiveCurrentTrend(): boolean {
    return this.stock.percentChange > 0;
  }

  negativeCurrentTrend(): boolean {
    return this.stock.percentChange < 0;
  }

  deleteButtonEmit(): void {
    this.deleteButton.emit();
  }
}
