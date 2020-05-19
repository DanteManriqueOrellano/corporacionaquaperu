import { Component } from '@angular/core';
import { NgxSubFormComponent, Controls, subformComponentProviders } from 'ngx-sub-form';
import { IPoblacion } from './IPoblacion';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-poblacion-form',
  templateUrl: './poblacion-form.component.html',
  styleUrls: ['./poblacion-form.component.css'],
  providers:subformComponentProviders(PoblacionFormComponent)
})
export class PoblacionFormComponent extends NgxSubFormComponent<IPoblacion> {
  protected getFormControls():Controls<IPoblacion>{
    return{
      concentracion_miembros_x_familia: new FormControl(),
      dencidad_poblacional: new FormControl(),
      poblacion_actual: new FormControl(),
      poblacion_futura: new FormControl(),
      tasa_crecimiento: new FormControl(),
      total_beneficiarios: new FormControl(),
      total_familias_beneficiadas: new FormControl()
    }
  }
}
