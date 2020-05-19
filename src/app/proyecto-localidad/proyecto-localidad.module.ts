import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectoLocalidadRoutingModule } from './proyecto-localidad-routing.module';
import { LocalidadContainerComponent } from '../core/proyecto-localidad/localidad-container/localidad-container.component';
import { LocalidadRootComponent } from '../core/proyecto-localidad/localidad-container/localidad-root/localidad-root.component';


@NgModule({
  declarations: [LocalidadContainerComponent, LocalidadRootComponent],
  imports: [
    CommonModule,
    ProyectoLocalidadRoutingModule
  ]
})
export class ProyectoLocalidadModule { }
