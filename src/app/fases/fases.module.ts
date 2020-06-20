import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceEvaluacionComponent } from './face-evaluacion/face-evaluacion.component';
import { FaceEjecucionComponent } from './face-ejecucion/face-ejecucion.component';
import { ExpTecModule } from '../exp-tec/exp-tec.module';
import { ComMatModule } from '../com-mat/com-mat.module';
import { MemDesModule } from '../mem-des/mem-des.module';



@NgModule({
  declarations: [FaceEvaluacionComponent, FaceEjecucionComponent],
  imports: [
    CommonModule,
    ExpTecModule,
    ComMatModule,
    MemDesModule
  ]
})
export class FasesModule { }
