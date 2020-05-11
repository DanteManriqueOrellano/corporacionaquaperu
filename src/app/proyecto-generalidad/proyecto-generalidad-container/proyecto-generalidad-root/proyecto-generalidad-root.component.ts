import { Component, OnInit } from '@angular/core';
import { NgxSubFormComponent, Controls } from 'ngx-sub-form';
import { IGeneralidad } from '../generalidad-form/IGeneralidad';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-proyecto-generalidad-form',
  templateUrl: './proyecto-generalidad-root.component.html',
  styleUrls: ['./proyecto-generalidad-root.component.css']
})
export class ProyectoGeneralidadFormComponent extends NgxSubFormComponent<IGeneralidad>  {

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
