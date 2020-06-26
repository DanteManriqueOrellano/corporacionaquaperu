import { Component, OnInit, EventEmitter } from '@angular/core';
import { ILineaConduccion } from './linea-conduccion/linea-conduccion.component';
import { ILineaAduccion } from './linea-aduccion/linea-aduccion.component';
import { IRedDistribucion } from './red-distribucion/red-distribucion.component';
import { IConexionDomiciliaria } from './conexion-domiciliaria/conexion-domiciliaria.component';
import { subformComponentProviders, NgxRootFormComponent, DataInput, Controls } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';
export interface IRedTuberiaBase{
  cantidad_ML:string;
  estado_conservacion:string;
  obras_arte:boolean;
  pase_aereo:boolean;
}
export interface IRedTuberia{
  linea_conduccion:ILineaConduccion;
  linea_aduccion:ILineaAduccion;
  red_dictribucion:IRedDistribucion;
  conexion_domiciliaria:IConexionDomiciliaria;
}
@Component({
  selector: 'app-red-tuberia',
  templateUrl: './red-tuberia.component.html',
  styleUrls: ['./red-tuberia.component.css'],
  providers:subformComponentProviders(RedTuberiaComponent)
})
export class RedTuberiaComponent extends NgxRootFormComponent<IRedTuberia> {

  @DataInput()
  dataInput: Required<IRedTuberia>;
  dataOutput: EventEmitter<IRedTuberia>;

  protected getFormControls():Controls<IRedTuberia>{
    return {
      conexion_domiciliaria: new FormControl(),
      linea_aduccion: new FormControl(),
      linea_conduccion: new FormControl(),
      red_dictribucion: new FormControl(),
    }
  }

}
