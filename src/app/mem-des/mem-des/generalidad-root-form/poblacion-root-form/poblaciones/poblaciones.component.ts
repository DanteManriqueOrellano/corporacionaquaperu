import { Component, OnInit } from '@angular/core';
import { NgxSubFormComponent, subformComponentProviders, Controls } from 'ngx-sub-form';
import { FormArray, FormControl } from '@angular/forms';
import { IPoblacion } from './poblacion/poblacion.component';

export interface IPoblacionForm {
  poblaciones:IPoblacion[]
}
@Component({
  selector: 'app-poblaciones',
  templateUrl: './poblaciones.component.html',
  styleUrls: ['./poblaciones.component.css'],
  providers:subformComponentProviders(PoblacionesComponent)
})
export class PoblacionesComponent extends NgxSubFormComponent<IPoblacionForm> implements OnInit {

  ngOnInit():void{
    const array = [1,2]
    array.forEach(element => {
      this.agregarPoblacion()
    });

  }
  protected getFormControls():Controls<IPoblacionForm>{
    return {
      poblaciones: new FormArray([])
    }
  }

  public agregarPoblacion(){
    this.formGroupControls.poblaciones.push(new FormControl())
  }
  public eliminarPoblacion(i){
    this.formGroupControls.poblaciones.removeAt(i)

  }


}
