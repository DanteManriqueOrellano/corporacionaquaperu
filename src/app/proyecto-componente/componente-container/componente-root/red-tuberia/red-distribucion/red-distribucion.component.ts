import { Component } from '@angular/core';
import { NgxSubFormComponent, Controls, subformComponentProviders } from 'ngx-sub-form';
import { IRedDistribucion } from './IRedDistribucion';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-red-distribucion',
  templateUrl: './red-distribucion.component.html',
  styleUrls: ['./red-distribucion.component.css'],
  providers:subformComponentProviders(RedDistribucionComponent)
})
export class RedDistribucionComponent extends NgxSubFormComponent<IRedDistribucion> {
  protected getFormControls():Controls<IRedDistribucion>{
    return {
      cantidad_ml: new FormControl(),
      cuenta_obras_arte: new FormControl(),
      estado_conservacion: new FormControl(),
      tiene_pase_aereo: new FormControl(),
    }
  }
}
