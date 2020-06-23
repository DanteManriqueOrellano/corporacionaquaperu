import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralidadcComponent } from './generalidadc/generalidadc.component';
import { GeneralidadRootFormComponent } from './generalidadc/generalidad-root-form/generalidad-root-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AntecedenteIntervencionComponent } from './generalidadc/generalidad-root-form/antecedente-intervencion/antecedente-intervencion.component';
import { ColindanteComponent } from './generalidadc/generalidad-root-form/colindante/colindante.component';
import { HistDocComponent } from './generalidadc/generalidad-root-form/hist-doc/hist-doc.component';
import { InstEduComponent } from './generalidadc/generalidad-root-form/inst-edu/inst-edu.component';
import { InstsEdusComponent } from './generalidadc/generalidad-root-form/insts-edus/insts-edus.component';
import { ViaAccesoComponent } from './generalidadc/generalidad-root-form/via-acceso/via-acceso.component';
import { ViasAccesosComponent } from './generalidadc/generalidad-root-form/vias-accesos/vias-accesos.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { GeneralidadComponent } from './generalidadc/generalidad-root-form/generalidad/generalidad.component';
import { UbigeoModule } from 'src/app/ubigeo/ubigeo.module';

@NgModule({
  declarations: [GeneralidadcComponent, GeneralidadRootFormComponent,AntecedenteIntervencionComponent,ColindanteComponent,HistDocComponent,InstEduComponent,InstsEdusComponent,ViaAccesoComponent,ViasAccesosComponent,GeneralidadComponent],
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
    UbigeoModule
  ],
  exports: [GeneralidadcComponent, GeneralidadRootFormComponent,AntecedenteIntervencionComponent,ColindanteComponent,HistDocComponent,InstEduComponent,InstsEdusComponent,ViaAccesoComponent,ViasAccesosComponent,GeneralidadComponent],
})
export class GeneralidadesModule { }
