import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralidadcComponent } from './generalidadc/generalidadc.component';
import { GeneralidadRootFormComponent } from './generalidadc/generalidad-root-form/generalidad-root-form.component';



@NgModule({
  declarations: [GeneralidadcComponent, GeneralidadRootFormComponent],
  imports: [
    CommonModule
  ]
})
export class GeneralidadesModule { }
