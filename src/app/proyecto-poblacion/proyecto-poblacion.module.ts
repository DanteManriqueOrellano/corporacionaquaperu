import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectoPoblacionContainerComponent } from './proyecto-poblacion-container/proyecto-poblacion-container.component';

import { PoblacionRoutingModule } from './poblacion-routing.module';
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
import { ProyectoPoblacionRootComponent } from './proyecto-poblacion-container/proyecto-poblacion-root/proyecto-poblacion-root.component';
import { PoblacionFormComponent } from './proyecto-poblacion-container/proyecto-poblacion-root/poblacion-form/poblacion-form.component';



@NgModule({
  declarations: [ProyectoPoblacionContainerComponent, ProyectoPoblacionRootComponent, PoblacionFormComponent],
  imports: [
    CommonModule,
    PoblacionRoutingModule,
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
export class ProyectoPoblacionModule { }
