import { Component, OnInit } from '@angular/core';
import { NgxSubFormComponent, Controls, subformComponentProviders } from 'ngx-sub-form';
import { IHistorial_Documentario } from './IHistorial-documentario';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-historial-documentario-form',
  templateUrl: './historial-documentario-form.component.html',
  styleUrls: ['./historial-documentario-form.component.css'],
  providers:subformComponentProviders(HistorialDocumentarioFormComponent)
})
export class HistorialDocumentarioFormComponent extends NgxSubFormComponent<IHistorial_Documentario>  {

 protected getFormControls():Controls<IHistorial_Documentario>{
   return{
     anio_priorizacion: new FormControl(),
     fecha_aprobacion: new FormControl(),
     inf_tecnico_nro: new FormControl(),
     rep_und_ejecutora: new FormControl(),
     rep_und_evaluadora: new FormControl(),
     rep_und_formuladora: new FormControl(),
   }
 }
}
