import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfigComponent } from './dashboard/config/config.component';
import { EstadisticasComponent } from '../estadisticas/estadisticas/estadisticas.component';
import { FuncionalidadesComponent } from '../funcionalidades/funcionalidades/funcionalidades.component';
import { FaceElaboracionComponent } from '../fases/face-elaboracion/face-elaboracion.component';
import { ExpTecComponent } from '../funcionalidades/exp-tec/exp-tec.component';


const routes: Routes = [
    {path:"proyecto/:docId/overview",component:DashboardComponent,
      children:[
        {path:"",component:EstadisticasComponent},
        {path:"config",component:ConfigComponent},
        {path:"funcionalidades",component:FuncionalidadesComponent},
        {path:"exptec",component:ExpTecComponent},
        {path:"elaboracion",component:FaceElaboracionComponent}
      ]
    },
    
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class DashboardRoutingModule { }
