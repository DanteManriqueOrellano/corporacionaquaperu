import { Component, OnInit } from '@angular/core';
import { NgxSubFormComponent, subformComponentProviders, Controls  } from "ngx-sub-form";
import { FormControl } from '@angular/forms';
export interface IGeneralidad {
  snip:string;
  
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
      modalidad_ejecucion: new FormControl(),
      plazo_ejecucion: new FormControl(),
      sist_contratacion: new FormControl(),
      snip: new FormControl(),
    }
  }
}
