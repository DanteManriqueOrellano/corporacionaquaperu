import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemDesComponent } from './mem-des/mem-des.component';
import { PoblacionComponent } from './mem-des/poblacion/poblacion.component';
import { PoblacionRootFormComponent } from './mem-des/poblacion/poblacion-root-form/poblacion-root-form.component';
import { ComSanComponent } from './mem-des/com-san/com-san.component';
import { ComSanRootFormComponent } from './mem-des/com-san/com-san-root-form/com-san-root-form.component';
import { GeneralidadesModule } from './mem-des/generalidades/generalidades.module';

@NgModule({
  declarations: [MemDesComponent, PoblacionComponent, PoblacionRootFormComponent, ComSanComponent, ComSanRootFormComponent],
  imports: [
    CommonModule,
    GeneralidadesModule
  ]
})
export class MemDesModule { }
