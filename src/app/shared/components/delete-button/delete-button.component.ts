import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "delete-button",
  templateUrl: "./delete-button.component.html",
  styleUrls: ["./delete-button.component.scss"],
})
export class DeleteButtonComponent {
  @Output() deletionPerformed = new EventEmitter();

  constructor() {}

  deleting(): void {
    this.deletionPerformed.emit();
  }
}
