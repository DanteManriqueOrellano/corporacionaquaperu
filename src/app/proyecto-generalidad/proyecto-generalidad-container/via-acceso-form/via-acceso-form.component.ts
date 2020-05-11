import { Component } from '@angular/core';
import { NgxSubFormComponent, Controls,subformComponentProviders } from 'ngx-sub-form';
import { IVia_Acceso } from './IVia-acceso';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-via-acceso-form',
  templateUrl: './via-acceso-form.component.html',
  styleUrls: ['./via-acceso-form.component.css'],
  providers: subformComponentProviders(ViaAccesoFormComponent)
  
})
export class ViaAccesoFormComponent extends NgxSubFormComponent<IVia_Acceso>  {

  getFormControls():Controls<IVia_Acceso>{
    return{
      distancia: new FormControl(),
      localidad: new FormControl(),
      tiempo: new FormControl(),
      tipo_via: new FormControl(),
      transporte: new FormControl(),
    }
  }
}
