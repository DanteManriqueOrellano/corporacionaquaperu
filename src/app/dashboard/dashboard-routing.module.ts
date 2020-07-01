import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfigComponent } from './dashboard/config/config.component';
import { EstadisticasComponent } from '../estadisticas/estadisticas/estadisticas.component';
import { FuncionalidadesComponent } from '../funcionalidades/funcionalidades/funcionalidades.component';
import { MemDesComponent } from '../mem-des/mem-des/mem-des.component';
import { UbigeoComponent } from '../ubigeo/ubigeo/ubigeo.component';
import { SeleccionadoComponent } from '../ubigeo/seleccionado/seleccionado.component';




const routes: Routes = [
    {path:"proyecto/:docId/overview",component:DashboardComponent,
      children:[
        {path:"",component:EstadisticasComponent},
        {path:"config",component:ConfigComponent,children:[
          {path:"",component:SeleccionadoComponent}
        ]},
        {path:"funcionalidades",component:FuncionalidadesComponent},
        {path:"memoria",component:MemDesComponent}

        
       
      ]
    },
    
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class DashboardRoutingModule { }
