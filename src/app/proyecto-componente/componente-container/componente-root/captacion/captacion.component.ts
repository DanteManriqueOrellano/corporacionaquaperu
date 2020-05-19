import { Component } from '@angular/core';
import { NgxSubFormComponent,Controls,subformComponentProviders } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';

export interface ICaptacion{
  nombre_captacion:string;
  ubicacion:string;
  antiguedad:string;
  estado_concervacion:string;
  reutilizable:boolean;
  cerco_perimetrico:boolean;

}
@Component({
  selector: 'app-captacion',
  templateUrl: './captacion.component.html',
  styleUrls: ['./captacion.component.css'],
  providers:subformComponentProviders(CaptacionComponent)
})
export class CaptacionComponent extends NgxSubFormComponent<ICaptacion> {

  protected getFormControls():Controls<ICaptacion>{
    return {
      antiguedad: new FormControl(),
      cerco_perimetrico: new FormControl(),
      estado_concervacion: new FormControl(),
      nombre_captacion: new FormControl(),
      reutilizable: new FormControl(),
      ubicacion: new FormControl(),
    }
  }


}
