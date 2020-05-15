import { Component } from '@angular/core';
import { NgxSubFormComponent, Controls, subformComponentProviders } from 'ngx-sub-form';
import { IConexionDomiciliaria } from './IConexionDomiciliaria';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-conexion-domiciliaria',
  templateUrl: './conexion-domiciliaria.component.html',
  styleUrls: ['./conexion-domiciliaria.component.css'],
  providers:subformComponentProviders(ConexionDomiciliariaComponent)
})
export class ConexionDomiciliariaComponent extends NgxSubFormComponent <IConexionDomiciliaria>  {

  protected getFormControls():Controls<IConexionDomiciliaria>{
    return {
      nro_conexiones: new FormControl(),
    }
  }

}
