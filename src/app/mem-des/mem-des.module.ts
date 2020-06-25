import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemDesComponent } from './mem-des/mem-des.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UbigeoModule } from '../ubigeo/ubigeo.module';
import {MatTabsModule} from '@angular/material/tabs';

import {MatDividerModule} from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { PoblacionRootFormComponent } from './mem-des/generalidad-root-form/poblacion-root-form/poblacion-root-form.component';
import { ComSanRootFormComponent } from './mem-des/generalidad-root-form/com-san-root-form/com-san-root-form.component';
import { RedTuberiaComponent } from './mem-des/generalidad-root-form/com-san-root-form/red-tuberia/red-tuberia.component';
import { LineaConduccionComponent } from './mem-des/generalidad-root-form/com-san-root-form/red-tuberia/linea-conduccion/linea-conduccion.component';
import { LineaAduccionComponent } from './mem-des/generalidad-root-form/com-san-root-form/red-tuberia/linea-aduccion/linea-aduccion.component';
import { RedDistribucionComponent } from './mem-des/generalidad-root-form/com-san-root-form/red-tuberia/red-distribucion/red-distribucion.component';
import { ConexionDomiciliariaComponent } from './mem-des/generalidad-root-form/com-san-root-form/red-tuberia/conexion-domiciliaria/conexion-domiciliaria.component';
import { CaptacionComponent } from './mem-des/generalidad-root-form/com-san-root-form/captacion/captacion.component';
import { ReservorioComponent } from './mem-des/generalidad-root-form/com-san-root-form/reservorio/reservorio.component';
import { TecnologiaExcretaComponent } from './mem-des/generalidad-root-form/com-san-root-form/tecnologia-excreta/tecnologia-excreta.component';
@NgModule({
  declarations: [MemDesComponent,  PoblacionRootFormComponent, ComSanRootFormComponent, RedTuberiaComponent, LineaConduccionComponent, LineaAduccionComponent, RedDistribucionComponent, ConexionDomiciliariaComponent, CaptacionComponent, ReservorioComponent, TecnologiaExcretaComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatDividerModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    UbigeoModule,
  ],
  exports:[MemDesComponent, PoblacionRootFormComponent, ComSanRootFormComponent]
})
export class MemDesModule { }
