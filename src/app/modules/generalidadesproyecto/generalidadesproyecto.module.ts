import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralidadesproyectoComponent } from './generalidadesproyecto/generalidadesproyecto.component';
import { GeneralidadesComponent } from './generalidades/generalidades.component';
import { HistorialdocumentarioComponent } from './historialdocumentario/historialdocumentario.component';
import { UbigeoComponent } from './ubigeo/ubigeo.component';
import { ViasaccesoComponent } from './viasacceso/viasacceso.component';
import { ColindanteComponent } from './colindante/colindante.component';
import { UbigeoreferenciaComponent } from './ubigeoreferencia/ubigeoreferencia.component';
import { GeneralidadesRoutingModule } from './generalidades.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { AccesosComponent } from './accesos/accesos.component';



@NgModule({
  declarations: [GeneralidadesproyectoComponent, GeneralidadesComponent, HistorialdocumentarioComponent, UbigeoComponent, ViasaccesoComponent, ColindanteComponent, UbigeoreferenciaComponent, AccesosComponent],
  imports: [
    CommonModule,
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
    GeneralidadesRoutingModule,

  ]
})
export class GeneralidadesproyectoModule { }
