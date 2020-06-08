import { Component, OnInit } from '@angular/core';
import { NgxSubFormComponent, subformComponentProviders, Controls  } from "ngx-sub-form";
import { FormControl } from '@angular/forms';
export interface IGeneralidad {
  nombre_proyecto:string;
  snip:string;
  cliente:string;
  alias_proyecto:string;
  plazo_ejecucion:string;
  sist_contratacion:string;
  modalidad_ejecucion:string;

}
@Component({
  selector: 'app-generalidad',
  templateUrl: './generalidad.component.html',
  styleUrls: ['./generalidad.component.css'],
  providers:subformComponentProviders(GeneralidadComponent)
})
export class GeneralidadComponent extends NgxSubFormComponent<IGeneralidad>  {

  protected getFormControls():Controls<IGeneralidad>{
    return {
      alias_proyecto: new FormControl(),
      cliente: new FormControl(),
      modalidad_ejecucion: new FormControl(),
      nombre_proyecto: new FormControl(),
      plazo_ejecucion: new FormControl(),
      sist_contratacion: new FormControl(),
      snip: new FormControl(),
    }
  }
}
