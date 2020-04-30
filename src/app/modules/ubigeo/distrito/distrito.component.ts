import { Component, OnInit } from '@angular/core';
import { ICacerio } from '../ICacerio';
import {  IDistrito} from "../IDistrito";
import { NgxSubFormComponent,Controls,subformComponentProviders, ArrayPropertyKey, ArrayPropertyValue } from 'ngx-sub-form';
import { FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-distrito',
  templateUrl: './distrito.component.html',
  styleUrls: ['./distrito.component.css'],
  providers:subformComponentProviders(DistritoComponent)
})
export class DistritoComponent extends NgxSubFormComponent <ICacerio[],IDistrito>  implements OnInit {

  nombreDistritoLabel= 'Nombre Distrito';
  eliminarCacerioLabel='Eliminar Cacerio';
  agregarCacerioLabel='Agregar Cacerio'
  protected getFormControls():Controls<IDistrito>{
    return{
      nombre_distrito: new FormControl(),
      caserios: new FormArray([])
    }
  }

  ngOnInit(): void {
  }

  
  public createFormArrayControl(
    key: 'caserios',
    value: ICacerio,
  ): FormControl {
    switch (key) {
      // note: the following string is type safe based on your form properties!
      case 'caserios':
        return new FormControl();
      default:
        return new FormControl(value);
    }
  }
  eliminarCacerio(index){
    this.formGroupControls.caserios.removeAt(index);

  }
  agregarCacerio(){
    this.formGroupControls.caserios.push(
      this.createFormArrayControl('caserios', {
        nombre_cacerio:'',
        centros_poblados:[]
      }),
    );
    
  }


}
