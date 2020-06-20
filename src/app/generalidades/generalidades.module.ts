import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralidadcComponent } from './generalidadc/generalidadc.component';
import { GeneralidadFormRootComponent } from './generalidadc/generalidad-form-root/generalidad-form-root.component';



@NgModule({
  declarations: [GeneralidadcComponent, GeneralidadFormRootComponent],
  imports: [
    CommonModule
  ]
})
export class GeneralidadesModule { }
