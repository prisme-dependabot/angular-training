import { Pipe, PipeTransform } from "@angular/core";
import { formatNumber } from "@angular/common";
import { LOCALE_FORMAT } from "../constants/formats/locale-format";
import { CustomNumberSignPipe } from "./custom-number-sign.pipe";

@Pipe({
  name: "customPercent",
})
export class CustomPercentPipe implements PipeTransform {
  transform(value: number): string {
    return CustomNumberSignPipe.getPositiveNumberSign(value)
      .concat(formatNumber(value, LOCALE_FORMAT, "1.1-1"))
      .concat("%");
  }
}
