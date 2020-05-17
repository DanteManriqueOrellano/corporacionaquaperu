import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { ShellComponent } from './shell/shell.component';
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
import { ProyectoGeneralidadModule } from '../proyecto-generalidad/proyecto-generalidad.module';
import { UbigeoModule } from './custom/ubigeo/ubigeo.module';
import { ProyectoPoblacionModule } from '../proyecto-poblacion/proyecto-poblacion.module';
import { ProyectoComponenteModule } from '../proyecto-componente/proyecto-componente.module';
import { BienvenidoComponent } from '../bienvenido/bienvenido.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';






@NgModule({
  declarations: [ShellComponent, BienvenidoComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
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
    ProyectoGeneralidadModule,
    UbigeoModule,
    ProyectoPoblacionModule,
    ProyectoComponenteModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    
  
  ],
  exports:[
    ShellComponent,
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
export class CoreModule { }
