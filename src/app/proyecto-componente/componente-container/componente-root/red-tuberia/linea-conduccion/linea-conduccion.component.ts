import { Component } from '@angular/core';
import { NgxSubFormComponent, Controls, subformComponentProviders } from 'ngx-sub-form';
import { ILineaConduccion } from './ILineaConduccion';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-linea-conduccion',
  templateUrl: './linea-conduccion.component.html',
  styleUrls: ['./linea-conduccion.component.css'],
  providers:subformComponentProviders(LineaConduccionComponent)
})
export class LineaConduccionComponent extends NgxSubFormComponent<ILineaConduccion>  {
  protected getFormControls():Controls<ILineaConduccion>{
    return{
      cantidad_ml: new FormControl(),
      cuenta_obras_arte: new FormControl(),
      estado_conservacion: new FormControl(),
      tiene_pase_aereo: new FormControl(),
    }
  }
}
