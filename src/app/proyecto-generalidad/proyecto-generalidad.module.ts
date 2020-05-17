import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectoGeneralidadContainerComponent } from './proyecto-generalidad-container/proyecto-generalidad-container.component';
import { ProyectoGeneralidadRootComponent } from './proyecto-generalidad-container/proyecto-generalidad-root/proyecto-generalidad-root.component';
import { GeneralidadFormComponent } from './proyecto-generalidad-container/generalidad-form/generalidad-form.component';
import { HistorialDocumentarioFormComponent } from './proyecto-generalidad-container/historial-documentario-form/historial-documentario-form.component';
import { UbigeoSeleccionadoFormComponent } from './proyecto-generalidad-container/ubigeo-seleccionado-form/ubigeo-seleccionado-form.component';
import { InstitucionEducativaFormComponent } from './proyecto-generalidad-container/institucion-educativa-form/institucion-educativa-form.component';
import { ViaAccesoFormComponent } from './proyecto-generalidad-container/via-acceso-form/via-acceso-form.component';
import { ColindanteFormComponent } from './proyecto-generalidad-container/colindante-form/colindante-form.component';
import { AntecedenteIntervencionFormComponent } from './proyecto-generalidad-container/antecedente-intervencion-form/antecedente-intervencion-form.component';
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
import { GeneralidadRoutingModule } from './generalidad-routing.module';




@NgModule({
  declarations: [ProyectoGeneralidadRootComponent, ProyectoGeneralidadContainerComponent, GeneralidadFormComponent, HistorialDocumentarioFormComponent, UbigeoSeleccionadoFormComponent, InstitucionEducativaFormComponent, ViaAccesoFormComponent, ColindanteFormComponent, AntecedenteIntervencionFormComponent],
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
    GeneralidadRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports:[ProyectoGeneralidadContainerComponent]
})
export class ProyectoGeneralidadModule { }
