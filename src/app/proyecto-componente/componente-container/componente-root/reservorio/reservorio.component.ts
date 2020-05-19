import { Component, OnInit } from '@angular/core';
import { NgxSubFormComponent, Controls, subformComponentProviders } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';

export interface IReservorio{
  antiguedad:string;
  ubicacion:string;
  forma_estructura:string;
  capacidad_almacenamiento:number;
  caceta_cloracion:boolean;
  cerco_perimetrico:boolean;

}

@Component({
  selector: 'app-reservorio',
  templateUrl: './reservorio.component.html',
  styleUrls: ['./reservorio.component.css'],
  providers:subformComponentProviders(ReservorioComponent)
})
export class ReservorioComponent extends NgxSubFormComponent<IReservorio>  {

  protected getFormControls():Controls<IReservorio>{
    return {
      antiguedad: new FormControl(),
      caceta_cloracion: new FormControl(),
      capacidad_almacenamiento: new FormControl(),
      cerco_perimetrico: new FormControl(),
      forma_estructura: new FormControl(),
      ubicacion: new FormControl(),

    }
  }


}
