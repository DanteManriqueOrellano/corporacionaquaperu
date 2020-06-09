import { Component,EventEmitter } from '@angular/core';
import { NgxSubFormComponent, Controls, subformComponentProviders, NgxRootFormComponent, DataInput } from 'ngx-sub-form';
import { IVia_Acceso } from '../via-acceso/via-acceso.component';
import { FormArray, FormControl } from '@angular/forms';

export interface IVias_Accesos {
  vias_accesos:IVia_Acceso[]
}

@Component({
  selector: 'app-vias-accesos',
  templateUrl: './vias-accesos.component.html',
  styleUrls: ['./vias-accesos.component.css'],
  providers:subformComponentProviders(ViasAccesosComponent)
})
export class ViasAccesosComponent extends NgxRootFormComponent<IVias_Accesos> {
  
  @DataInput()
  dataInput: Required<IVias_Accesos>;
  dataOutput: EventEmitter<IVias_Accesos>;

  
  

  protected getFormControls():Controls<IVias_Accesos> {
    return {
      vias_accesos: new FormArray([])
    }
  }
  eliminarVia(i:number){
    this.formGroupControls.vias_accesos.removeAt(i)
  }
  agregarVia(){
    this.formGroupControls.vias_accesos.push(new FormControl())

  }


}
