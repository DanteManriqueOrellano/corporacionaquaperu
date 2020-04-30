import { Component, OnInit } from '@angular/core';
import { NgxSubFormComponent,subformComponentProviders, Controls } from 'ngx-sub-form';
import { IHistorialDocumentario } from 'src/app/models/IHistorialDocumentario';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-historialdocumentario',
  templateUrl: './historialdocumentario.component.html',
  styleUrls: ['./historialdocumentario.component.css'],
  providers: subformComponentProviders(HistorialdocumentarioComponent)
})
export class HistorialdocumentarioComponent extends NgxSubFormComponent<IHistorialDocumentario> implements OnInit {

  protected getFormControls():Controls<IHistorialDocumentario>{
    return {
      anio_priorizacion: new FormControl(),
      fecha_aprobacion: new FormControl(),
      nro_inf_tecnico : new FormControl(),
      responsable_unidad_ejecutora: new FormControl(),
      responsable_unidad_evaluadora: new FormControl(),
      responsable_unidad_formuladora: new FormControl(),
    }
  }

  ngOnInit(): void {
  }

}
