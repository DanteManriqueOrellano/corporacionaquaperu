import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralidadcComponent } from './generalidadc/generalidadc.component';
import { GeneralidadRootFormComponent } from './generalidadc/generalidad-root-form/generalidad-root-form.component';
import { UbigeoModule } from '../ubigeo/ubigeo.module';



@NgModule({
  declarations: [GeneralidadcComponent, GeneralidadRootFormComponent],
  imports: [
    CommonModule,
    UbigeoModule
  ]
})
export class GeneralidadesModule { }
