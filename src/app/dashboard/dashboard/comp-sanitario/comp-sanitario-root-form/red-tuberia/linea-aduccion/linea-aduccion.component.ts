import { Component, OnInit } from '@angular/core';
import { IRedTuberia } from '../red-tuberia.component';
import { NgxSubFormComponent, subformComponentProviders, Controls } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';
export interface ILineaAduccionForm extends IRedTuberia {}
@Component({
  selector: 'app-linea-aduccion',
  templateUrl: './linea-aduccion.component.html',
  styleUrls: ['./linea-aduccion.component.css'],
  providers:subformComponentProviders(LineaAduccionComponent)
})
export class LineaAduccionComponent extends NgxSubFormComponent<ILineaAduccionForm>  {

  protected getFormControls():Controls<ILineaAduccionForm> {
    return {
      cantidad_ML: new FormControl(),
      estado_conservacion: new FormControl(),
      obras_arte: new FormControl(),
      pase_aereo: new FormControl(),
    }
  }

}
