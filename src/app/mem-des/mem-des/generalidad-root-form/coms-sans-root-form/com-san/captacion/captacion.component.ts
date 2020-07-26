import { Component, OnInit } from '@angular/core';
import { subformComponentProviders, NgxSubFormComponent, Controls } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';
export interface ICaptacion{
  nombre_captacion:string;
  ubicacion_norte:string;
  ubicacion_este:string;
  ubicacion_latitud:string;
  antiguedad:string;
  estado_concervacion:string;
  reutilizable:string;
  cerco_perimetrico:string;
}
@Component({
  selector: 'app-captacion',
  templateUrl: './captacion.component.html',
  styleUrls: ['./captacion.component.css'],
  providers: subformComponentProviders(CaptacionComponent)
})
export class CaptacionComponent  extends NgxSubFormComponent<ICaptacion> {

  protected getFormControls():Controls<ICaptacion>{
    return{
      antiguedad: new FormControl(),
      cerco_perimetrico: new FormControl(),
      estado_concervacion: new FormControl(),
      nombre_captacion: new FormControl(),
      reutilizable: new FormControl(),
      ubicacion_este:new FormControl(),
      ubicacion_latitud:new FormControl(),
      ubicacion_norte:new FormControl(),
    }

  }

}
