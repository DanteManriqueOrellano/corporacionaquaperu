import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidoComponent } from '../bienvenido/bienvenido.component';


const routes: Routes = [
  /*{path:'ubigeo',loadChildren:  '../modules/ubigeo/ubigeo.module#UbigeoModule'},*/
  /* {path:'ubigeo',loadChildren: () => import('../modules/ubigeo/ubigeo.module').then(m => m.UbigeoModule)},
  {path:'bienvenido',loadChildren: () => import('../modules/bienvenido/bienvenido.module').then(m => m.BienvenidoModule)},
  {path:'referencia', loadChildren:()=> import('../modules/generalidadesproyecto/generalidadesproyecto.module').then(m=>m.GeneralidadesproyectoModule)}, */
  
  {path:'',component:BienvenidoComponent},
  {path:'proyecto',loadChildren:()=>import('../dashboard/dashboard.module').then(m=>m.DashboardModule)}
  
 

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
