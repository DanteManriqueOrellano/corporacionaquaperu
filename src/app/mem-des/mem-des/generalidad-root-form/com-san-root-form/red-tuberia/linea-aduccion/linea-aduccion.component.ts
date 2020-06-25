import { Component, OnInit } from '@angular/core';
import { IRedTuberiaBase } from '../red-tuberia.component';
import { subformComponentProviders, NgxSubFormComponent, Controls } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';
export interface ILineaAduccion extends IRedTuberiaBase {}
@Component({
  selector: 'app-linea-aduccion',
  templateUrl: './linea-aduccion.component.html',
  styleUrls: ['./linea-aduccion.component.css'],
  providers:subformComponentProviders(LineaAduccionComponent)
})
export class LineaAduccionComponent extends NgxSubFormComponent<ILineaAduccion> {

  protected getFormControls():Controls<ILineaAduccion> {
    return {
      cantidad_ML: new FormControl(),
      estado_conservacion: new FormControl(),
      obras_arte: new FormControl(),
      pase_aereo: new FormControl(),
    }
  }
}
