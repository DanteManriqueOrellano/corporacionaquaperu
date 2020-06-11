import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  /*{path:'ubigeo',loadChildren:  '../modules/ubigeo/ubigeo.module#UbigeoModule'},*/
  /* {path:'ubigeo',loadChildren: () => import('../modules/ubigeo/ubigeo.module').then(m => m.UbigeoModule)},
  {path:'bienvenido',loadChildren: () => import('../modules/bienvenido/bienvenido.module').then(m => m.BienvenidoModule)},
  {path:'referencia', loadChildren:()=> import('../modules/generalidadesproyecto/generalidadesproyecto.module').then(m=>m.GeneralidadesproyectoModule)}, */
  
  {path: "home",loadChildren:()=>import('../generalidad/generalidad.module').then(m=>m.GeneralidadModule)},
  {path:"",loadChildren:()=>import('../home/home.module').then(m=>m.HomeModule)},
  
  
  
 

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
