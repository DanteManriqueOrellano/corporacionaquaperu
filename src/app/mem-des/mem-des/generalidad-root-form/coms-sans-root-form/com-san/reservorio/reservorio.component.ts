import { Component, OnInit } from '@angular/core';
import { subformComponentProviders, NgxSubFormComponent, Controls } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';
export interface IReservorio {
  antiguedad:String;
  ubicacion_norte:string;
  ubicacion_este:string;
  ubicacion_latitud:string;
  forma_estructura:string;
  capacidad_almacenamiento:string;
  caceta_cloracion:string;
  cerco_perimetrico:string;
}
@Component({
  selector: 'app-reservorio',
  templateUrl: './reservorio.component.html',
  styleUrls: ['./reservorio.component.css'],
  providers:subformComponentProviders(ReservorioComponent)
})
export class ReservorioComponent extends NgxSubFormComponent<IReservorio> {

  protected getFormControls():Controls<IReservorio>{
    return {
      antiguedad:new FormControl(),
      caceta_cloracion:new FormControl(),
      capacidad_almacenamiento:new FormControl(),
      cerco_perimetrico:new FormControl(),
      forma_estructura:new FormControl(),
      ubicacion_este:new FormControl(),
      ubicacion_latitud:new FormControl(),
      ubicacion_norte:new FormControl(),
    }
  }

}
