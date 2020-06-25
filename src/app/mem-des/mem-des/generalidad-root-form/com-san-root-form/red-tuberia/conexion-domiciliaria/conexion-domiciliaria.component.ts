import { Component, OnInit } from '@angular/core';
import { IRedTuberiaBase } from '../red-tuberia.component';
import { subformComponentProviders, NgxSubFormComponent, Controls } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';
export interface IConexionDomiciliaria extends IRedTuberiaBase {}
@Component({
  selector: 'app-conexion-domiciliaria',
  templateUrl: './conexion-domiciliaria.component.html',
  styleUrls: ['./conexion-domiciliaria.component.css'],
  providers:subformComponentProviders(ConexionDomiciliariaComponent)
})
export class ConexionDomiciliariaComponent extends NgxSubFormComponent<IConexionDomiciliaria> {

  protected getFormControls():Controls<IConexionDomiciliaria> {
    return {
      cantidad_ML: new FormControl(),
      estado_conservacion: new FormControl(),
      obras_arte: new FormControl(),
      pase_aereo: new FormControl(),
    }
  }

}
