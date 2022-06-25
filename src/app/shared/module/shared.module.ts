import { NgModule } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { BoxStyleComponent } from "../components/utils/box-style/box-style.component";

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  declarations: [BoxStyleComponent],
  exports: [CommonModule, ReactiveFormsModule, RouterModule, BoxStyleComponent],
  providers: [DatePipe],
})
export class SharedModule {}
