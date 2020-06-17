import { Component } from '@angular/core';
import { IRedTuberia } from '../red-tuberia.component';
import { NgxSubFormComponent, Controls, subformComponentProviders } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';
export interface ILineaConduccionForm extends IRedTuberia{}
@Component({
  selector: 'app-linea-conduccion',
  templateUrl: './linea-conduccion.component.html',
  styleUrls: ['./linea-conduccion.component.css'],
  providers:subformComponentProviders(LineaConduccionComponent)
})
export class LineaConduccionComponent extends NgxSubFormComponent<ILineaConduccionForm> {

  protected getFormControls():Controls<ILineaConduccionForm> {
    return {
      cantidad_ML: new FormControl(),
      estado_conservacion: new FormControl(),
      obras_arte: new FormControl(),
      pase_aereo: new FormControl(),
    }
  }

}
