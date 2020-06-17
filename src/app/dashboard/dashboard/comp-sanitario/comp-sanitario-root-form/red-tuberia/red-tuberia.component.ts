import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgxRootFormComponent, Controls, subformComponentProviders, DataInput } from 'ngx-sub-form';
import { ILineaConduccionForm } from './linea-conduccion/linea-conduccion.component';
import { ILineaAduccionForm } from './linea-aduccion/linea-aduccion.component';
import { IRedDistribucionForm } from './red-distribucion/red-distribucion.component';
import { IConexionDomiciliariaForm } from './conexion-domiciliaria/conexion-domiciliaria.component';
import { FormControl } from '@angular/forms';

export interface IRedTuberia{
  cantidad_ML:string;
  estado_conservacion:string;
  obras_arte:boolean;
  pase_aereo:boolean;
}
export interface IRedTuberiaForm{
  linea_conduccion:ILineaConduccionForm;
  linea_aduccion:ILineaAduccionForm;
  red_dictribucion:IRedDistribucionForm;
  conexion_domiciliaria:IConexionDomiciliariaForm;
}

@Component({
  selector: 'app-red-tuberia',
  templateUrl: './red-tuberia.component.html',
  styleUrls: ['./red-tuberia.component.css'],
  providers:subformComponentProviders(RedTuberiaComponent)
})
export class RedTuberiaComponent extends NgxRootFormComponent<IRedTuberiaForm> {
  @DataInput()
  dataInput: Required<IRedTuberiaForm>;
  dataOutput: EventEmitter<IRedTuberiaForm>;

  protected getFormControls():Controls<IRedTuberiaForm>{
    return {
      conexion_domiciliaria: new FormControl(),
      linea_aduccion: new FormControl(),
      linea_conduccion: new FormControl(),
      red_dictribucion: new FormControl(),
    }
  }


}
