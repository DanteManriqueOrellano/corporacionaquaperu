import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectoComponenteRoutingModule } from './proyecto-componente-routing.module';
import { ComponenteContainerComponent } from './componente-container/componente-container.component';
import { ComponenteRootComponent } from './componente-container/componente-root/componente-root.component';
import { CaptacionComponent } from './componente-container/componente-root/captacion/captacion.component';
import { ReservorioComponent } from './componente-container/componente-root/reservorio/reservorio.component';
import { TecnologiaExcretaComponent } from './componente-container/componente-root/tecnologia-excreta/tecnologia-excreta.component';

import { LineaConduccionComponent } from './componente-container/componente-root/red-tuberia/linea-conduccion/linea-conduccion.component';
import { LineaAduccionComponent } from './componente-container/componente-root/red-tuberia/linea-aduccion/linea-aduccion.component';
import { RedDistribucionComponent } from './componente-container/componente-root/red-tuberia/red-distribucion/red-distribucion.component';
import { ConexionDomiciliariaComponent } from './componente-container/componente-root/red-tuberia/conexion-domiciliaria/conexion-domiciliaria.component';
import { RedTuberiaComponent } from './componente-container/componente-root/red-tuberia/red-tuberia.component';


@NgModule({
  declarations: [ComponenteContainerComponent, ComponenteRootComponent, CaptacionComponent, ReservorioComponent, TecnologiaExcretaComponent, LineaConduccionComponent, LineaAduccionComponent, RedDistribucionComponent, ConexionDomiciliariaComponent, RedTuberiaComponent],
  imports: [
    CommonModule,
    ProyectoComponenteRoutingModule
  ]
})
export class ProyectoComponenteModule { }
