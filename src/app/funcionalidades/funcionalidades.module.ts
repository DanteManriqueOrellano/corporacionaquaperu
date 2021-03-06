import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionalidadesComponent } from './funcionalidades/funcionalidades.component';


import {MatDividerModule} from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import { FuncinalidadesRoutingModule } from './funcionalidades-routing.module';
import { MemDesModule } from '../mem-des/mem-des.module';

@NgModule({
  declarations: [FuncionalidadesComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatTabsModule,
    FormsModule,
    MemDesModule,
    ReactiveFormsModule,
    FuncinalidadesRoutingModule,
  ],
  exports: [FuncionalidadesComponent]
})
export class FuncionalidadesModule { }
