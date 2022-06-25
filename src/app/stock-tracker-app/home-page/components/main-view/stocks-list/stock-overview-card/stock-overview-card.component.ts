import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import { Stock } from "../../../../../../shared/models/stocks/Stock";

@Component({
  selector: "stock-overview-card",
  templateUrl: "./stock-overview-card.component.html",
  styleUrls: ["./stock-overview-card.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockOverviewCardComponent {
  @Input() stock: Stock;
  @Output() deleteButton = new EventEmitter();

  constructor() {}

  deleteButtonEmit(): void {
    this.deleteButton.emit();
  }
}
