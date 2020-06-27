import { Component, OnInit } from '@angular/core';
import { IRedTuberiaBase } from '../red-tuberia.component';
import { subformComponentProviders, NgxSubFormComponent, Controls } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';
import { MAT_CHECKBOX_CLICK_ACTION } from '@angular/material/checkbox';
export interface ILineaConduccion extends IRedTuberiaBase{}
@Component({
  selector: 'app-linea-conduccion',
  templateUrl: './linea-conduccion.component.html',
  styleUrls: ['./linea-conduccion.component.css'],
  providers:[subformComponentProviders(LineaConduccionComponent),{provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check'}]
})
export class LineaConduccionComponent extends NgxSubFormComponent<ILineaConduccion> {

  checkedObrasArte:boolean = true;
  checkedPaseAereo:boolean = true;


  protected getFormControls():Controls<ILineaConduccion> {
    return {
      cantidad_ML: new FormControl(),
      estado_conservacion: new FormControl(),
      obras_arte: new FormControl(),
      pase_aereo: new FormControl(),
    }
  }

}
