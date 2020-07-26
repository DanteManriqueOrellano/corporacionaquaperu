import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EliminarPDFComponent } from '../eliminar-pdf/eliminar-pdf.component';

import { FileUploadComponent } from '../upload/file-upload/file-upload.component';



const routes: Routes = [
  
  //{path: "",loadChildren:()=>import('../home/home.module').then(m=>m.HomeModule)},
  //{path:'',component:EliminarPDFComponent},//funciona, crea el pdf
  //{path: "",loadChildren:()=>import('../ubigeo/ubigeo.module').then(m=>m.UbigeoModule)},//funciona correctamente
  {path:'',loadChildren:()=>import('../upload/upload.module').then(m=>m.UploadModule)}

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
