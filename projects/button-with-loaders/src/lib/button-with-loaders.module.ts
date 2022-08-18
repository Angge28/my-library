import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonWithLoadersComponent } from './button-with-loaders.component';
import { ButtonLoaderIconDirective } from './button.directive';



@NgModule({
  declarations: [
    ButtonWithLoadersComponent,
    ButtonLoaderIconDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonWithLoadersComponent,
    ButtonLoaderIconDirective
  ]
})
export class ButtonWithLoadersModule { }
