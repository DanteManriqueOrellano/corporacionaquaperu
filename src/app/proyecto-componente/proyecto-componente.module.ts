import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectoComponenteRoutingModule } from './proyecto-componente-routing.module';
import { ComponenteContainerComponent } from './componente-container/componente-container.component';
import { ComponenteRootComponent } from './componente-container/componente-root/componente-root.component';
import { CaptacionComponent } from './componente-container/componente-root/captacion/captacion.component';
import { ReservorioComponent } from './componente-container/componente-root/reservorio/reservorio.component';
import { TecnologiaExcretaComponent } from './componente-container/componente-root/tecnologia-excreta/tecnologia-excreta.component';
import { RedTuberiaComponent } from './componente-container/componente-root/red-tuberia/red-tuberia.component';
import { LineaConduccionComponent } from './componente-container/componente-root/red_tuberia/linea-conduccion/linea-conduccion.component';
import { LineaAduccionComponent } from './componente-container/componente-root/red_tuberia/linea-aduccion/linea-aduccion.component';
import { RedDistribucionComponent } from './componente-container/componente-root/red_tuberia/red-distribucion/red-distribucion.component';
import { ConexionDomiciliariaComponent } from './componente-container/componente-root/red_tuberia/conexion-domiciliaria/conexion-domiciliaria.component';


@NgModule({
  declarations: [ComponenteContainerComponent, ComponenteRootComponent, CaptacionComponent, ReservorioComponent, TecnologiaExcretaComponent, RedTuberiaComponent, LineaConduccionComponent, LineaAduccionComponent, RedDistribucionComponent, ConexionDomiciliariaComponent],
  imports: [
    CommonModule,
    ProyectoComponenteRoutingModule
  ]
})
export class ProyectoComponenteModule { }
