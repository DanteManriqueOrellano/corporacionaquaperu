import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenulateralComponent } from './dashboard/menulateral/menulateral.component';
import { ConfigComponent } from './dashboard/config/config.component';
import { OverviewComponent } from './dashboard/overview/overview.component';
import { CuerpoComponent } from './dashboard/overview/cuerpo/cuerpo.component';
import { FuncionalidadesModule } from '../funcionalidades/funcionalidades.module';
import { EstadisticasModule } from '../estadisticas/estadisticas.module';
import { FasesModule } from '../fases/fases.module';



@NgModule({
  declarations: [DashboardComponent, MenulateralComponent, ConfigComponent, OverviewComponent, CuerpoComponent],
  imports: [
    CommonModule,
    FuncionalidadesModule,
    EstadisticasModule,
    FasesModule
  ]
})
export class DashboardModule { }
