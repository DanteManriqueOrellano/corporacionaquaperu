import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProyectoGeneralidadContainerComponent } from '../proyecto-generalidad/proyecto-generalidad-container/proyecto-generalidad-container.component';
import { BienvenidoComponent } from '../bienvenido/bienvenido.component';
//import { DepartamentoComponent } from '../modules/ubigeo/departamento/departamento.component';
const routes: Routes = [
  /*{path:'ubigeo',loadChildren:  '../modules/ubigeo/ubigeo.module#UbigeoModule'},*/
  /* {path:'ubigeo',loadChildren: () => import('../modules/ubigeo/ubigeo.module').then(m => m.UbigeoModule)},
  {path:'bienvenido',loadChildren: () => import('../modules/bienvenido/bienvenido.module').then(m => m.BienvenidoModule)},
  {path:'referencia', loadChildren:()=> import('../modules/generalidadesproyecto/generalidadesproyecto.module').then(m=>m.GeneralidadesproyectoModule)}, */
  {path:'generalidad',component:ProyectoGeneralidadContainerComponent},
  {path:'',component:BienvenidoComponent}
  
 

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
