import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { EditorComponent } from './editor/editor.component';
import { UbigeoComponent } from './ubigeo/ubigeo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DepartamentoComponent } from './editor/departamento/departamento.component';
import { ProvinciaComponent } from './editor/provincia/provincia.component';
import { DistritoComponent } from './editor/distrito/distrito.component';
import { CacerioComponent } from './editor/cacerio/cacerio.component';
import { CentroPobladoComponent } from './editor/centro-poblado/centro-poblado.component';
import { UbigeoRoutingModule } from './ubigeo-routing.module';
import { SeleccionadoComponent } from './seleccionado/seleccionado.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { ScrollingModule } from '@angular/cdk/scrolling';


@NgModule({
  declarations: [ListaComponent, EditorComponent, UbigeoComponent, DepartamentoComponent, ProvinciaComponent, DistritoComponent, CacerioComponent, CentroPobladoComponent, SeleccionadoComponent, NuevoComponent, DialogBoxComponent],
  imports: [
    CommonModule,
    UbigeoRoutingModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    ScrollingModule,
  ],
  entryComponents: [
    DialogBoxComponent
  ],
  exports:[ListaComponent, EditorComponent, UbigeoComponent, DepartamentoComponent, ProvinciaComponent, DistritoComponent, CacerioComponent, CentroPobladoComponent, SeleccionadoComponent, NuevoComponent,DialogBoxComponent]
})
export class UbigeoModule { }
