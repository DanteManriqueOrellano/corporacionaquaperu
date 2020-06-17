import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MenulateralComponent } from './dashboard/menulateral/menulateral.component';
import { CuerpoComponent } from './dashboard/cuerpo/cuerpo.component';
import { OverviewComponent } from './dashboard/overview/overview.component';

import { CompSanitarioRootFormComponent } from './dashboard/comp-sanitario/comp-sanitario-root-form/comp-sanitario-root-form.component';
import { PoblacionComponent } from './dashboard/poblacion/poblacion.component';
import { PoblacionRootFormComponent } from './dashboard/poblacion/poblacion-root-form/poblacion-root-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompSanitarioComponent } from './dashboard/comp-sanitario/comp-sanitario.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule} from '@angular/material/list';
import { ConfigComponent } from './config/config.component';
import { MatSelectModule } from '@angular/material/select';
import { RedTuberiaComponent } from './dashboard/comp-sanitario/comp-sanitario-root-form/red-tuberia/red-tuberia.component';
import { CaptacionComponent } from './dashboard/comp-sanitario/comp-sanitario-root-form/captacion/captacion.component';
import { ReservorioComponent } from './dashboard/comp-sanitario/comp-sanitario-root-form/reservorio/reservorio.component';
import { TecnologiaExcretaComponent } from './dashboard/comp-sanitario/comp-sanitario-root-form/tecnologia-excreta/tecnologia-excreta.component';
import { LineaAduccionComponent } from './dashboard/comp-sanitario/comp-sanitario-root-form/red-tuberia/linea-aduccion/linea-aduccion.component';
import { RedDistribucionComponent } from './dashboard/comp-sanitario/comp-sanitario-root-form/red-tuberia/red-distribucion/red-distribucion.component';
import { ConexionDomiciliariaComponent } from './dashboard/comp-sanitario/comp-sanitario-root-form/red-tuberia/conexion-domiciliaria/conexion-domiciliaria.component';
import { MatRadioModule} from '@angular/material/radio';
import { LineaConduccionComponent } from './dashboard/comp-sanitario/comp-sanitario-root-form/red-tuberia/linea-conduccion/linea-conduccion.component';

@NgModule({
  declarations: [MenulateralComponent, CuerpoComponent, OverviewComponent, CompSanitarioComponent, CompSanitarioRootFormComponent, PoblacionComponent, PoblacionRootFormComponent, DashboardComponent, ConfigComponent, RedTuberiaComponent, CaptacionComponent, ReservorioComponent, TecnologiaExcretaComponent, LineaAduccionComponent, RedDistribucionComponent, ConexionDomiciliariaComponent,LineaConduccionComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[MenulateralComponent, CuerpoComponent, OverviewComponent, CompSanitarioComponent, CompSanitarioRootFormComponent, PoblacionComponent, PoblacionRootFormComponent, DashboardComponent, ConfigComponent, RedTuberiaComponent, CaptacionComponent, ReservorioComponent, TecnologiaExcretaComponent, LineaAduccionComponent, RedDistribucionComponent, ConexionDomiciliariaComponent,LineaConduccionComponent]
})
export class DashboardModule { }
