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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ComponenteContainerComponent, ComponenteRootComponent, CaptacionComponent, ReservorioComponent, TecnologiaExcretaComponent, LineaConduccionComponent, LineaAduccionComponent, RedDistribucionComponent, ConexionDomiciliariaComponent, RedTuberiaComponent],
  imports: [
    CommonModule,
    ProyectoComponenteRoutingModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatStepperModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ProyectoComponenteModule { }
