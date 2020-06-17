import { Component, OnInit } from '@angular/core';
import { IRedTuberia } from '../red-tuberia.component';
import { NgxSubFormComponent, Controls, subformComponentProviders } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';
export interface IConexionDomiciliariaForm extends IRedTuberia {}
@Component({
  selector: 'app-conexion-domiciliaria',
  templateUrl: './conexion-domiciliaria.component.html',
  styleUrls: ['./conexion-domiciliaria.component.css'],
  providers:subformComponentProviders(ConexionDomiciliariaComponent)
})
export class ConexionDomiciliariaComponent extends NgxSubFormComponent<IConexionDomiciliariaForm> {

  protected getFormControls():Controls<IConexionDomiciliariaForm> {
    return {
      cantidad_ML: new FormControl(),
      estado_conservacion: new FormControl(),
      obras_arte: new FormControl(),
      pase_aereo: new FormControl(),
    }
  }
 }
