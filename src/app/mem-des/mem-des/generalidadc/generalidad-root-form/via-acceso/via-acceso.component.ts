import { Component } from '@angular/core';
import { NgxSubFormComponent, Controls, subformComponentProviders } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';
export interface IVia_Acceso {
  localidad:string;
  distancia:string;
  tiempo:string;
  transporte:string;
  tipo_via:string;
}
@Component({
  selector: 'app-via-acceso',
  templateUrl: './via-acceso.component.html',
  styleUrls: ['./via-acceso.component.css'],
  providers:subformComponentProviders(ViaAccesoComponent)
})
export class ViaAccesoComponent extends NgxSubFormComponent<IVia_Acceso>  {

  protected getFormControls():Controls<IVia_Acceso>{
    return {
      distancia: new FormControl(),
      localidad: new FormControl(),
      tiempo: new FormControl(),
      tipo_via: new FormControl(),
      transporte: new FormControl(),
    }
  }


}
