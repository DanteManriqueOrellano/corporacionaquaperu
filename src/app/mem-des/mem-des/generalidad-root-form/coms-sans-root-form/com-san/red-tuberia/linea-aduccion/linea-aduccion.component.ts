import { Component, OnInit } from '@angular/core';
import { IRedTuberiaBase } from '../red-tuberia.component';
import { subformComponentProviders, NgxSubFormComponent, Controls } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';
import { MAT_CHECKBOX_CLICK_ACTION } from '@angular/material/checkbox';
export interface ILineaAduccion extends IRedTuberiaBase {}
@Component({
  selector: 'app-linea-aduccion',
  templateUrl: './linea-aduccion.component.html',
  styleUrls: ['./linea-aduccion.component.css'],
  providers:[subformComponentProviders(LineaAduccionComponent),{provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check'}]
})
export class LineaAduccionComponent extends NgxSubFormComponent<ILineaAduccion> {

  checkedObrasArte:boolean = true;
  checkedPaseAereo:boolean = true;

  protected getFormControls():Controls<ILineaAduccion> {
    return {
      cantidad_ML: new FormControl(),
      estado_conservacion: new FormControl(),
      obras_arte: new FormControl(),
      pase_aereo: new FormControl(),
    }
  }
}
