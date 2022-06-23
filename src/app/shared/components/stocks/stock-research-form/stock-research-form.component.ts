import { Component, OnInit } from "@angular/core";
import { StockService } from "../../../services/stock.service";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { onlyLettersValidator } from "../../../validators/only-letters.validator";

@Component({
  selector: "stock-research-form",
  templateUrl: "./stock-research-form.component.html",
  styleUrls: ["./stock-research-form.component.scss"],
})
export class StockResearchFormComponent implements OnInit {
  stockResearchForm!: FormGroup;

  constructor(private stockService: StockService) {}

  get symbol(): AbstractControl {
    return this.stockResearchForm.get("symbol");
  }

  ngOnInit(): void {
    this.stockResearchForm = new FormGroup({
      symbol: new FormControl(null, [
        onlyLettersValidator,
        Validators.required,
        Validators.maxLength(5),
      ]),
    });
  }

  onSubmit(): void {
    if (this.stockResearchForm.valid) {
      this.stockService
        .getStockBySymbol(this.stockResearchForm.value.symbol)
        .subscribe((result) => console.log(result));

      this.stockResearchForm.reset();
    }
  }
}
