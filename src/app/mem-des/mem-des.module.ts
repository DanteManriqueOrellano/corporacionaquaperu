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
@NgModule({
  declarations: [MemDesComponent,  PoblacionRootFormComponent, ComSanRootFormComponent],
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
