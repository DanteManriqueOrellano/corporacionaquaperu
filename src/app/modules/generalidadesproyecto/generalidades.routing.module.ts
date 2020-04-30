import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralidadesproyectoComponent } from './generalidadesproyecto/generalidadesproyecto.component';

const routes: Routes = [
  {path:'',component:GeneralidadesproyectoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralidadesRoutingModule { }
