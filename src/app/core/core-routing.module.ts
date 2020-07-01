import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EliminarPDFComponent } from '../eliminar-pdf/eliminar-pdf.component';


const routes: Routes = [
  
//  {path: "",loadChildren:()=>import('../home/home.module').then(m=>m.HomeModule)},
  {path:'',component:EliminarPDFComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
