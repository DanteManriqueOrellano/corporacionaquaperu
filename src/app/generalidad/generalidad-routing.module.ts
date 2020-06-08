import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralidadRootFormComponent } from './generalidad-root-form/generalidad-root-form.component';


const routes: Routes = [
  {path:'',component:GeneralidadRootFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralidadRoutingModule { }
