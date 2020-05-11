import { Component } from '@angular/core';
import { NgxSubFormComponent,subformComponentProviders, Controls } from 'ngx-sub-form';
import { IUbigeo_Seleccionado } from './IUbigeo-seleccionado';
import { FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-ubigeo-seleccionado-form',
  templateUrl: './ubigeo-seleccionado-form.component.html',
  styleUrls: ['./ubigeo-seleccionado-form.component.css'],
  providers: subformComponentProviders(UbigeoSeleccionadoFormComponent)
})
export class UbigeoSeleccionadoFormComponent extends NgxSubFormComponent<IUbigeo_Seleccionado>  {

  protected getFormControls():Controls<IUbigeo_Seleccionado>{
    return {
      anexos: new FormArray([]),
      barrios: new FormArray([]),
      cacerios: new FormArray([]),
      centros_poblados: new FormArray([]),
      departamento: new FormControl(),
      distrito: new FormControl(),
      provincia: new FormControl(),
    }
  }

}
