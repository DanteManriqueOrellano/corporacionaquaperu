import { Component, OnInit } from '@angular/core';
import { IRedTuberiaBase } from '../red-tuberia.component';
import { subformComponentProviders, NgxSubFormComponent, Controls } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';
import { MAT_CHECKBOX_CLICK_ACTION } from '@angular/material/checkbox';
export interface IConexionDomiciliaria extends IRedTuberiaBase {}
@Component({
  selector: 'app-conexion-domiciliaria',
  templateUrl: './conexion-domiciliaria.component.html',
  styleUrls: ['./conexion-domiciliaria.component.css'],
  providers:[subformComponentProviders(ConexionDomiciliariaComponent),{provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check'}]
})
export class ConexionDomiciliariaComponent extends NgxSubFormComponent<IConexionDomiciliaria> {

  checkedObrasArte:boolean = true;
  checkedPaseAereo:boolean = true;

  protected getFormControls():Controls<IConexionDomiciliaria> {
    return {
      cantidad_ML: new FormControl(),
      estado_conservacion: new FormControl(),
      obras_arte: new FormControl(),
      pase_aereo: new FormControl(),
    }
  }

}
