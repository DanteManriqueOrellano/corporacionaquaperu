import { Component, OnInit } from '@angular/core';
import { IRedTuberia } from '../red-tuberia.component';
import { subformComponentProviders, NgxSubFormComponent, Controls } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';

export interface IRedDistribucionForm extends IRedTuberia {}
@Component({
  selector: 'app-red-distribucion',
  templateUrl: './red-distribucion.component.html',
  styleUrls: ['./red-distribucion.component.css'],
  providers:subformComponentProviders(RedDistribucionComponent)
})
export class RedDistribucionComponent extends NgxSubFormComponent<IRedDistribucionForm> {

  protected getFormControls():Controls<IRedDistribucionForm> {
    return {
      cantidad_ML: new FormControl(),
      estado_conservacion: new FormControl(),
      obras_arte: new FormControl(),
      pase_aereo: new FormControl(),
    }
  }
}
