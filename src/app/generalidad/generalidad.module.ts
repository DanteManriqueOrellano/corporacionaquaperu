import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralidadRoutingModule } from './generalidad-routing.module';
import { GeneralidadCComponent } from './generalidad/generalidadc.component';
import { GeneralidadRootFormComponent } from './generalidad-root-form/generalidad-root-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HistDocComponent } from './generalidad-root-form/hist-doc/hist-doc.component';
import { UbigeoSelectComponent } from './generalidad-root-form/ubigeo-select/ubigeo-select.component';
import { ColindanteComponent } from './generalidad-root-form/colindante/colindante.component';
import { AntecedenteIntervencionComponent } from './generalidad-root-form/antecedente-intervencion/antecedente-intervencion.component';
import { ViaAccesoComponent } from './generalidad-root-form/via-acceso/via-acceso.component';
import { InstEduComponent } from './generalidad-root-form/inst-edu/inst-edu.component';
import { ViasAccesosComponent } from './generalidad-root-form/vias-accesos/vias-accesos.component';
import { InstsEdusComponent } from './generalidad-root-form/insts-edus/insts-edus.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { GeneralidadComponent } from './generalidad-root-form/generalidad/generalidad.component';
import { UbigeoModule } from '../ubigeo/ubigeo.module';


@NgModule({
  declarations: [GeneralidadCComponent, GeneralidadRootFormComponent, HistDocComponent, UbigeoSelectComponent, ColindanteComponent, AntecedenteIntervencionComponent, ViaAccesoComponent, InstEduComponent, ViasAccesosComponent, InstsEdusComponent,GeneralidadComponent],
  imports: [
    CommonModule,
    GeneralidadRoutingModule,
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
  ],
  exports :[GeneralidadComponent, GeneralidadCComponent, GeneralidadRootFormComponent, HistDocComponent, UbigeoSelectComponent, ColindanteComponent, AntecedenteIntervencionComponent, ViaAccesoComponent, InstEduComponent, ViasAccesosComponent, InstsEdusComponent]

})
export class GeneralidadModule { }
