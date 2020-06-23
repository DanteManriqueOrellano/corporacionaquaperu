import { Component, OnInit } from '@angular/core';
import { NgxSubFormComponent, Controls, subformComponentProviders } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';
export interface IInst_Edu{
  nombre:string;
  codigo_modular:string;
  nivel_modalidad:string;
  gestion_dependencia:string;
  direccion:string;
  nro_alumnos:string;
  nro_profes:string;
  nro_secciones:string;
}

@Component({
  selector: 'app-inst-edu',
  templateUrl: './inst-edu.component.html',
  styleUrls: ['./inst-edu.component.css'],
  providers:subformComponentProviders(InstEduComponent)
})
export class InstEduComponent extends NgxSubFormComponent<IInst_Edu> {

  protected getFormControls():Controls<IInst_Edu>{
    return {
      codigo_modular: new FormControl(),
      direccion: new FormControl(),
      gestion_dependencia: new FormControl(),
      nivel_modalidad: new FormControl(),
      nombre: new FormControl(),
      nro_alumnos: new FormControl(),
      nro_profes: new FormControl(),
      nro_secciones: new FormControl(),
    }
  }


}
