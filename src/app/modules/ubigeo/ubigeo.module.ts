import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarrioComponent } from './barrio/barrio.component';
import { CentroPobladoComponent } from './centro-poblado/centro-poblado.component';
import { CacerioComponent } from './cacerio/cacerio.component';
import { DistritoComponent } from './distrito/distrito.component';
import { ProvinciaComponent } from './provincia/provincia.component';
import { DepartamentoComponent } from './departamento/departamento.component';
import { AnexoComponent } from './anexo/anexo.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { UbigeoRoutingModule } from './ubigeo-routing.module';



@NgModule({
  declarations: [BarrioComponent, CentroPobladoComponent, CacerioComponent, DistritoComponent, ProvinciaComponent, DepartamentoComponent, AnexoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
    UbigeoRoutingModule,
  ],
  exports:[BarrioComponent, CentroPobladoComponent, CacerioComponent, DistritoComponent, ProvinciaComponent, DepartamentoComponent, AnexoComponent]
})
export class UbigeoModule { }
