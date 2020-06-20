import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceElaboracionComponent } from './face-elaboracion/face-elaboracion.component';
import { FaceEjecucionComponent } from './face-ejecucion/face-ejecucion.component';
import { ExpTecModule } from '../exp-tec/exp-tec.module';
import { ComMatModule } from '../com-mat/com-mat.module';
import { MemDesModule } from '../mem-des/mem-des.module';



@NgModule({
  declarations: [FaceElaboracionComponent, FaceEjecucionComponent],
  imports: [
    CommonModule,
    ExpTecModule,
    ComMatModule,
    MemDesModule
  ]
})
export class FasesModule { }
