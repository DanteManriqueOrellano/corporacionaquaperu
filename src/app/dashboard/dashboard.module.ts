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
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';



@NgModule({
  declarations: [DashboardComponent, MenulateralComponent, ConfigComponent, OverviewComponent, CuerpoComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    FuncionalidadesModule,
    EstadisticasModule,
    FasesModule,
    DashboardRoutingModule
  ],
  exports:[DashboardComponent, MenulateralComponent, ConfigComponent, OverviewComponent, CuerpoComponent]
})
export class DashboardModule { }
