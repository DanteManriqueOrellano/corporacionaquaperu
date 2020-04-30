import { Component, OnInit } from '@angular/core';
import { NgxSubFormComponent, Controls,subformComponentProviders, ArrayPropertyKey, ArrayPropertyValue } from 'ngx-sub-form';
import { IDistrito } from '../IDistrito';
import { IProvincia } from '../IProvincia';
import { FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-provincia',
  templateUrl: './provincia.component.html',
  styleUrls: ['./provincia.component.css'],
  providers:subformComponentProviders(ProvinciaComponent)
})
export class ProvinciaComponent extends NgxSubFormComponent<IDistrito[],IProvincia> implements OnInit {
  nombreProviniciaLabel='nombre Provinicia'
  eliminarDistritoLabel = 'eliminar Distrito'
  agregarDistritoLabel = 'agregar Distrito'

  protected getFormControls():Controls<IProvincia>{
    return{
      nombre_provincia: new FormControl(),
      distritos: new FormArray([])
    }
  }
  
 

  ngOnInit(): void {
  }
  eliminarDistrito(index){
    this.formGroupControls.distritos.removeAt(index);

  }
  agregarDistrito(){
    this.formGroupControls.distritos.push(
      this.createFormArrayControl('distritos', {
        nombre_distrito:'',
        caserios:[]
      }),
    );
    
  }
  public createFormArrayControl(
    key: 'distritos',
    value: IDistrito,
  ): FormControl {
    switch (key) {
      // note: the following string is type safe based on your form properties!
      case 'distritos':
        return new FormControl();
      default:
        return new FormControl(value);
    }
  }
  

}
