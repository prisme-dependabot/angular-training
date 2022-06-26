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

  cardTitle!: string;

  constructor() {}

  ngOnInit(): void {
    this.cardTitle = this.stock.companyName.concat(
      " (" + this.stock.symbol + ")"
    );
  }

  deleteButtonEmit(): void {
    this.deleteButton.emit();
  }
}
