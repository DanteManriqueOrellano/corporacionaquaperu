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
import {MatListModule} from '@angular/material/list';
import { ConfigComponent } from './config/config.component';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [MenulateralComponent, CuerpoComponent, OverviewComponent, CompSanitarioComponent, CompSanitarioRootFormComponent, PoblacionComponent, PoblacionRootFormComponent, DashboardComponent, ConfigComponent],
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
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[MenulateralComponent, CuerpoComponent, OverviewComponent, CompSanitarioComponent, CompSanitarioRootFormComponent, PoblacionComponent, PoblacionRootFormComponent]
})
export class DashboardModule { }
