import { Component } from '@angular/core';
import { subformComponentProviders, NgxSubFormComponent, Controls } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';
export interface IPoblacion{
  total_familias_beneficiadas:number;
  total_beneficiarios:number;
  tasa_crecimiento:number;
  concentracion_miembros_x_familia:number;
  dencidad_poblacional:number;
  poblacion_actual:number;
  poblacion_futura:number;
}
@Component({
  selector: 'app-poblacion',
  templateUrl: './poblacion.component.html',
  styleUrls: ['./poblacion.component.css'],
  providers: subformComponentProviders(PoblacionComponent)
})
export class PoblacionComponent extends NgxSubFormComponent<IPoblacion> {

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
