import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectoGeneralidadRootComponent } from './proyecto-generalidad-container/proyecto-generalidad-container.component';
import { ProyectoGeneralidadFormComponent } from './proyecto-generalidad-container/proyecto-generalidad-root/proyecto-generalidad-root.component';
import { GeneralidadFormComponent } from './proyecto-generalidad-container/generalidad-form/generalidad-form.component';
import { HistorialDocumentarioFormComponent } from './proyecto-generalidad-container/historial-documentario-form/historial-documentario-form.component';
import { UbigeoSeleccionadoFormComponent } from './proyecto-generalidad-container/ubigeo-seleccionado-form/ubigeo-seleccionado-form.component';
import { InstitucionEducativaFormComponent } from './proyecto-generalidad-container/institucion-educativa-form/institucion-educativa-form.component';
import { ViaAccesoFormComponent } from './proyecto-generalidad-container/via-acceso-form/via-acceso-form.component';
import { ColindanteFormComponent } from './proyecto-generalidad-container/colindante-form/colindante-form.component';
import { AntecedenteIntervencionFormComponent } from './proyecto-generalidad-container/antecedente-intervencion-form/antecedente-intervencion-form.component';



@NgModule({
  declarations: [ProyectoGeneralidadRootComponent, ProyectoGeneralidadFormComponent, GeneralidadFormComponent, HistorialDocumentarioFormComponent, UbigeoSeleccionadoFormComponent, InstitucionEducativaFormComponent, ViaAccesoFormComponent, ColindanteFormComponent, AntecedenteIntervencionFormComponent],
  imports: [
    CommonModule
  ]
})
export class ProyectoGeneralidadModule { }
