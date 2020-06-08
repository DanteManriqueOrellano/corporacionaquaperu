import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralidadRoutingModule } from './generalidad-routing.module';
import { GeneralidadComponent } from './generalidad/generalidad.component';
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


@NgModule({
  declarations: [GeneralidadComponent, GeneralidadRootFormComponent, HistDocComponent, UbigeoSelectComponent, ColindanteComponent, AntecedenteIntervencionComponent, ViaAccesoComponent, InstEduComponent, ViasAccesosComponent, InstsEdusComponent],
  imports: [
    CommonModule,
    GeneralidadRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports :[GeneralidadComponent, GeneralidadRootFormComponent, HistDocComponent, UbigeoSelectComponent, ColindanteComponent, AntecedenteIntervencionComponent, ViaAccesoComponent, InstEduComponent, ViasAccesosComponent, InstsEdusComponent]

})
export class GeneralidadModule { }
