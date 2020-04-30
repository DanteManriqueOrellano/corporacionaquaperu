import { Component, OnInit } from '@angular/core';
import { NgxSubFormComponent,Controls,subformComponentProviders, ArrayPropertyValue, ArrayPropertyKey } from 'ngx-sub-form';
import { ICentro_Poblado } from '../ICentro_Poblado';
import { ICacerio } from '../ICacerio';
import { FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-cacerio',
  templateUrl: './cacerio.component.html',
  styleUrls: ['./cacerio.component.css'],
  providers:subformComponentProviders(CacerioComponent)
})
export class CacerioComponent extends NgxSubFormComponent<ICentro_Poblado[],ICacerio> implements OnInit {

  nombreCacerioLabel='Nombre Cacerio'
  eliminarCentroPobladoLabel = 'Eliminar Centro Poblado'
  agregarCentroPobladoLabel = 'Agregar Centro Poblado'
  protected getFormControls():Controls<ICacerio> {
    return{
      nombre_cacerio: new FormControl(),
      centros_poblados: new FormArray([])
    }
  }

  ngOnInit(): void {
  }
  
  public createFormArrayControl(
    key: 'centros_poblados',
    value: ICentro_Poblado,
  ): FormControl {
    switch (key) {
      // note: the following string is type safe based on your form properties!
      case 'centros_poblados':
        return new FormControl();
      default:
        return new FormControl(value);
    }
  }
  agregarCentroPoblado(){
    this.formGroupControls.centros_poblados.push(
      this.createFormArrayControl('centros_poblados', {
        nombre_centro_poblado:'',
        anexos:[]
      }),
    );
  }
  eliminarCentroPoblado(index){
    this.formGroupControls.centros_poblados.removeAt(index);
  }

}
