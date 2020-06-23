import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionalidadesComponent } from './funcionalidades/funcionalidades.component';
import { MemDesComponent } from './mem-des/mem-des.component';
import { ExpTecComponent } from './exp-tec/exp-tec.component';
import { ComMatComponent } from './com-mat/com-mat.component';
import { GeneralidadesModule } from '../generalidades/generalidades.module';
import {MatDividerModule} from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import { FuncinalidadesRoutingModule } from './funcionalidades-routing.module';

@NgModule({
  declarations: [FuncionalidadesComponent, MemDesComponent, ExpTecComponent, ComMatComponent],
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
    ReactiveFormsModule,
    GeneralidadesModule,
    FuncinalidadesRoutingModule,
  ],
  exports: [FuncionalidadesComponent, MemDesComponent, ExpTecComponent, ComMatComponent]
})
export class FuncionalidadesModule { }
