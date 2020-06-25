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
import { PoblacionComponent } from './mem-des/generalidad-root-form/poblacion/poblacion.component';
import { PoblacionRootFormComponent } from './mem-des/generalidad-root-form/poblacion/poblacion-root-form/poblacion-root-form.component';
import { ComSanComponent } from './mem-des/generalidad-root-form/com-san/com-san.component';
import { ComSanRootFormComponent } from './mem-des/generalidad-root-form/com-san/com-san-root-form/com-san-root-form.component';
import {MatDividerModule} from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
@NgModule({
  declarations: [MemDesComponent, PoblacionComponent, PoblacionRootFormComponent, ComSanComponent, ComSanRootFormComponent],
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
  exports:[MemDesComponent, PoblacionComponent, PoblacionRootFormComponent, ComSanComponent, ComSanRootFormComponent]
})
export class MemDesModule { }
