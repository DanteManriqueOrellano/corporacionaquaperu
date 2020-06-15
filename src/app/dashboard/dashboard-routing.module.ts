import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { config } from 'process';
import { ConfigComponent } from './config/config.component';


const routes: Routes = [
  {path:"",component:DashboardComponent,children:[
      {path:"config",component:ConfigComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
