import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralidadRoutingModule } from './generalidad-routing.module';
import { GeneralidadComponent } from './generalidad/generalidad.component';
import { GeneralidadRootFormComponent } from './generalidad-root-form/generalidad-root-form.component';


@NgModule({
  declarations: [GeneralidadComponent, GeneralidadRootFormComponent],
  imports: [
    CommonModule,
    GeneralidadRoutingModule
  ]
})
export class GeneralidadModule { }
