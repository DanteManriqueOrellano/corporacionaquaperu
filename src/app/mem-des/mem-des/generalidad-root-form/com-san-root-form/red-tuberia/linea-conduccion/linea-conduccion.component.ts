import { Component, OnInit } from '@angular/core';
import { IRedTuberiaBase } from '../red-tuberia.component';
import { subformComponentProviders, NgxSubFormComponent, Controls } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';
export interface ILineaConduccion extends IRedTuberiaBase{}
@Component({
  selector: 'app-linea-conduccion',
  templateUrl: './linea-conduccion.component.html',
  styleUrls: ['./linea-conduccion.component.css'],
  providers:subformComponentProviders(LineaConduccionComponent)
})
export class LineaConduccionComponent extends NgxSubFormComponent<ILineaConduccion> {

  protected getFormControls():Controls<ILineaConduccion> {
    return {
      cantidad_ML: new FormControl(),
      estado_conservacion: new FormControl(),
      obras_arte: new FormControl(),
      pase_aereo: new FormControl(),
    }
  }

}
