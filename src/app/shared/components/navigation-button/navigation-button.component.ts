import { Component, Input } from "@angular/core";

@Component({
  selector: "navigation-button",
  templateUrl: "./navigation-button.component.html",
  styleUrls: ["./navigation-button.component.scss"],
})
export class NavigationButtonComponent {
  @Input() text!: string;
  @Input() routerLink!: any[] | string | null | undefined;

  constructor() {}
}
