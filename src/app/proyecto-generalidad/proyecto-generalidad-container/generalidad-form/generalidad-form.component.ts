import { Component, OnInit } from '@angular/core';
import { NgxSubFormComponent, Controls, subformComponentProviders } from 'ngx-sub-form';
import { IGeneralidad } from './IGeneralidad';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-generalidad-form',
  templateUrl: './generalidad-form.component.html',
  styleUrls: ['./generalidad-form.component.css'],
  providers:subformComponentProviders(GeneralidadFormComponent)
  
})
export class GeneralidadFormComponent extends NgxSubFormComponent<IGeneralidad> {

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
