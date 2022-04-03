import { NgModule } from '@angular/core';
import { LambdaUiComponent } from './lambda-ui.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    LambdaUiComponent,
    ButtonComponent
  ],
  imports: [
  ],
  exports: [
    LambdaUiComponent,
    ButtonComponent
  ]
})
export class LambdaUiModule { }
