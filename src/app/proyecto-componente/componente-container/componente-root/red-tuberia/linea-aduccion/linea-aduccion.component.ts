import { Component } from '@angular/core';
import { NgxSubFormComponent, Controls, subformComponentProviders } from 'ngx-sub-form';
import { ILineaAduccion } from './ILineaAduccion';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-linea-aduccion',
  templateUrl: './linea-aduccion.component.html',
  styleUrls: ['./linea-aduccion.component.css'],
  providers: subformComponentProviders(LineaAduccionComponent)
  })
export class LineaAduccionComponent extends NgxSubFormComponent<ILineaAduccion>  {
  protected getFormControls():Controls<ILineaAduccion>{
    return {
      cantidad_ml:new FormControl(),
      cuenta_obras_arte:new FormControl(),
      estado_conservacion:new FormControl(),
      tiene_pase_aereo:new FormControl(),
    }
  }

}
