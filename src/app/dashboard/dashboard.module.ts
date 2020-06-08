import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MenulateralComponent } from './menulateral/menulateral.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { OverviewComponent } from './overview/overview.component';
import { CompSanitarioComponent } from './comp-sanitario/comp-sanitario.component';
import { CompSanitarioRootFormComponent } from './comp-sanitario-root-form/comp-sanitario-root-form.component';
import { PoblacionComponent } from './poblacion/poblacion.component';
import { PoblacionRootFormComponent } from './poblacion-root-form/poblacion-root-form.component';


@NgModule({
  declarations: [MenulateralComponent, CuerpoComponent, OverviewComponent, CompSanitarioComponent, CompSanitarioRootFormComponent, PoblacionComponent, PoblacionRootFormComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
