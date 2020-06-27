import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgxSubFormComponent, Controls, subformComponentProviders, NgxRootFormComponent, DataInput } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';
import { IPoblacionForm } from './poblaciones/poblaciones.component';

export interface IPoblacionRootForm {
  poblacion:IPoblacionForm;
}
@Component({
  selector: 'app-poblacion-root-form',
  templateUrl: './poblacion-root-form.component.html',
  styleUrls: ['./poblacion-root-form.component.css'],
  providers:subformComponentProviders(PoblacionRootFormComponent),
})
export class PoblacionRootFormComponent extends NgxRootFormComponent<IPoblacionRootForm> {
  
  @DataInput()
 
  dataInput: Required<IPoblacionRootForm>;
 
  dataOutput: EventEmitter<IPoblacionRootForm>;

  protected getFormControls():Controls<IPoblacionRootForm>{
    return{
      poblacion: new FormControl()
    }
  }
}
