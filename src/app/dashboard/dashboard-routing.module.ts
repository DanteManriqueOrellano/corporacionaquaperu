import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewContainerComponent } from './overview-container/overview-container.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
const routes: Routes = 
  [
    {path:':id/overview',component:OverviewContainerComponent,children:[
      
      {path:'config',component:ConfiguracionComponent}
      ]
    },
    
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
