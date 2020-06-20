import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemDesComponent } from '../memDes/mem-des/mem-des.component';
import { PoblacionComponent } from '../memDes/memDes/poblacion/poblacion.component';
import { PoblacionRootFormComponent } from '../memDes/memDes/poblacion/poblacion-root-form/poblacion-root-form.component';
import { ComSanComponent } from '../memDes/memDes/com-san/com-san.component';
import { ComSanRootFormComponent } from '../memDes/memDes/comSan/com-san-root-form/com-san-root-form.component';



@NgModule({
  declarations: [MemDesComponent, PoblacionComponent, PoblacionRootFormComponent, ComSanComponent, ComSanRootFormComponent],
  imports: [
    CommonModule
  ]
})
export class MemDesModule { }
