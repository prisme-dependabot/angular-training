import { NgModule } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { BoxStyleComponent } from "./components/box-style/box-style.component";
import { CustomPercentPipe } from "./pipes/custom-percent.pipe";
import { CustomNumberSignPipe } from "./pipes/custom-number-sign.pipe";
import { UpArrowComponent } from "./components/up-arrow/up-arrow.component";
import { DownArrowComponent } from "./components/down-arrow/down-arrow.component";
import { DeleteButtonComponent } from "./components/delete-button/delete-button.component";
import { NavigationButtonComponent } from "./components/navigation-button/navigation-button.component";

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  declarations: [
    BoxStyleComponent,
    CustomPercentPipe,
    CustomNumberSignPipe,
    UpArrowComponent,
    DownArrowComponent,
    DeleteButtonComponent,
    NavigationButtonComponent,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    BoxStyleComponent,
    DeleteButtonComponent,
    NavigationButtonComponent,
    UpArrowComponent,
    DownArrowComponent,
    CustomPercentPipe,
    CustomNumberSignPipe,
  ],
  providers: [DatePipe],
})
export class SharedModule {}
