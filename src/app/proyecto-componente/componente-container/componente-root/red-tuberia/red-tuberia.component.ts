import { Component, OnInit } from '@angular/core';
import { NgxSubFormComponent, subformComponentProviders, Controls } from 'ngx-sub-form';
import { IRedTuberia } from './IRedTuberia';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-red-tuberia',
  templateUrl: './red-tuberia.component.html',
  styleUrls: ['./red-tuberia.component.css'],
  providers:subformComponentProviders(RedTuberiaComponent)
})
export class RedTuberiaComponent extends NgxSubFormComponent<IRedTuberia>   {

  protected getFormControls():Controls<IRedTuberia>{
    return {
      conexion_domiciliaria: new FormControl(),
      linea_aduccion: new FormControl(),
      linea_conduccion: new FormControl(),
      red_distribucion: new FormControl(),
    }
  }
}
