import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "customNumberSign",
})
export class CustomNumberSignPipe implements PipeTransform {
  transform(value: number): string {
    return CustomNumberSignPipe.getPositiveNumberSign(value).concat(
      value.toString()
    );
  }

  public static getPositiveNumberSign(value?: number): string {
    return value > 0 ? "+" : "";
  }
}
