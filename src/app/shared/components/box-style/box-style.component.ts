import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "box-style",
  templateUrl: "./box-style.component.html",
})
export class BoxStyleComponent {
  @Input() title?: string;
  @Input() showDeleteOption? = false;
  @Output() deletionPerformed = new EventEmitter();

  constructor() {}

  deleting(): void {
    this.deletionPerformed.emit();
  }
}
