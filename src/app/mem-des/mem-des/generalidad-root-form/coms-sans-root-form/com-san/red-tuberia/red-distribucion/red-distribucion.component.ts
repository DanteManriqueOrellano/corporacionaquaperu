import { Component, OnInit } from '@angular/core';
import { IRedTuberiaBase } from '../red-tuberia.component';
import { subformComponentProviders, NgxSubFormComponent, Controls } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';
import { MAT_CHECKBOX_CLICK_ACTION } from '@angular/material/checkbox';
export interface IRedDistribucion extends IRedTuberiaBase {}
@Component({
  selector: 'app-red-distribucion',
  templateUrl: './red-distribucion.component.html',
  styleUrls: ['./red-distribucion.component.css'],
  providers:[subformComponentProviders(RedDistribucionComponent),{provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check'}]
})
export class RedDistribucionComponent extends NgxSubFormComponent<IRedDistribucion>  {

  checkedObrasArte:boolean = true;
  checkedPaseAereo:boolean = true;

  protected getFormControls():Controls<IRedDistribucion> {
    return {
      cantidad_ML: new FormControl(),
      estado_conservacion: new FormControl(),
      obras_arte: new FormControl(),
      pase_aereo: new FormControl(),
    }
  }

}
