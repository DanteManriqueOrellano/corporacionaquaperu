import { Component, OnInit } from '@angular/core';
import { NgxSubFormComponent,subformComponentProviders, Controls, ArrayPropertyKey, ArrayPropertyValue } from 'ngx-sub-form';
import { IBarrio } from '../IBarrio';
import { IAnexo } from '../IAnexo';
import { ICentro_Poblado } from '../ICentro_Poblado';
import { FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-anexo',
  templateUrl: './anexo.component.html',
  styleUrls: ['./anexo.component.css'],
  providers: subformComponentProviders(AnexoComponent)
})
export class AnexoComponent extends NgxSubFormComponent<IBarrio[],IAnexo> implements OnInit {

  nombreAnexoLabel='Nombre Anexo';
  agregarBarrioLabel = 'Agregar Barrio';
  borrarBarrioLabel='Borrar Barrio';
  
  protected getFormControls():Controls<IAnexo>{
    return{
     
     nombre_anexo:new FormControl,
     barrios: new FormArray([]),
     }
  }
  
  public createFormArrayControl(
    key: 'barrios',
    value: IBarrio,
  ): FormControl {
    switch (key) {
      // note: the following string is type safe based on your form properties!
      case 'barrios':
        return new FormControl();
      default:
        return new FormControl(value);
    }
  }
  agregarBarrio(){
    this.formGroupControls.barrios.push(this.createFormArrayControl('barrios',{nombre_barrio:''}))
  }
  borrarBarrio(index){
    this.formGroupControls.barrios.removeAt(index);

  }
  
  ngOnInit(): void {
  }

}
