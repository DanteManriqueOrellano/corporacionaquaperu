import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionalidadesComponent } from './funcionalidades/funcionalidades.component';
import { DialogMemDesComponent } from './dialog-mem-des/dialog-mem-des.component';
import { DialogExpTecComponent } from './dialog-exp-tec/dialog-exp-tec.component';
import { DialogComMatComponent } from './dialog-com-mat/dialog-com-mat.component';
import { GeneralidadesModule } from '../generalidades/generalidades.module';



@NgModule({
  declarations: [FuncionalidadesComponent, DialogMemDesComponent, DialogExpTecComponent, DialogComMatComponent],
  imports: [
    CommonModule,
    GeneralidadesModule
  ]
})
export class FuncionalidadesModule { }
