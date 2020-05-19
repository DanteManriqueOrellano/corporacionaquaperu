import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewContainerComponent } from './overview-container/overview-container.component';
const routes: Routes = 
  [
    {path:':id/overview',component:OverviewContainerComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
