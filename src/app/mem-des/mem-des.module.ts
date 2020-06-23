import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemDesComponent } from './mem-des/mem-des.component';
import { PoblacionComponent } from './mem-des/poblacion/poblacion.component';
import { PoblacionRootFormComponent } from './mem-des/poblacion/poblacion-root-form/poblacion-root-form.component';
import { ComSanComponent } from './mem-des/com-san/com-san.component';
import { ComSanRootFormComponent } from './mem-des/com-san/com-san-root-form/com-san-root-form.component';
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
import { UbigeoModule } from '../ubigeo/ubigeo.module';

@NgModule({
  declarations: [MemDesComponent, PoblacionComponent, PoblacionRootFormComponent, ComSanComponent, ComSanRootFormComponent],
  imports: [
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
    UbigeoModule,
  ],
  exports:[MemDesComponent, PoblacionComponent, PoblacionRootFormComponent, ComSanComponent, ComSanRootFormComponent]
})
export class MemDesModule { }
