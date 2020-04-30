import { Component, OnInit } from '@angular/core';
import { NgxSubFormComponent, Controls, subformComponentProviders, ArrayPropertyKey, ArrayPropertyValue } from 'ngx-sub-form';

import { ICentro_Poblado } from '../ICentro_Poblado';
import { FormArray, FormControl, Validators } from '@angular/forms';
import { IAnexo } from '../IAnexo';

@Component({
  selector: 'app-centro-poblado',
  templateUrl: './centro-poblado.component.html',
  styleUrls: ['./centro-poblado.component.css'],
  providers:subformComponentProviders(CentroPobladoComponent)
})
export class CentroPobladoComponent extends NgxSubFormComponent<IAnexo[],ICentro_Poblado> implements OnInit {
  agregarAnexoLabel = 'Agregar anexo'
  borrarAnexoLabel='Borrar anexo'
  
  centroPoblado='Centro Poblado'
  protected getFormControls():Controls<ICentro_Poblado>{
    return{
      
      nombre_centro_poblado: new FormControl(),
      anexos: new FormArray([]),
    }
  }
  
 
  public createFormArrayControl(
    key: 'anexos',
    value: IAnexo,
  ): FormControl {
    switch (key) {
      // note: the following string is type safe based on your form properties!
      case 'anexos':
        return new FormControl();
      default:
        return new FormControl(value);
    }
  }
  agregarAnexo(){
    this.formGroupControls.anexos.push(
      this.createFormArrayControl('anexos', {
        nombre_anexo: '',
        barrios:[]
      }),
    );
    
  }
  borrarAnexo(index){
    this.formGroupControls.anexos.removeAt(index);

  }
  


  

  ngOnInit(): void {
  }

}
