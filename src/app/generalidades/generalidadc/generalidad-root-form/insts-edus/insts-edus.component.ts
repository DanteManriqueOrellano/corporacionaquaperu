import { Component, EventEmitter } from '@angular/core';
import { IInst_Edu } from '../inst-edu/inst-edu.component';
import { NgxSubFormComponent, Controls, subformComponentProviders, NgxRootFormComponent, DataInput } from 'ngx-sub-form';
import { FormArray, FormControl } from '@angular/forms';

export interface IInsts_edus {
  insts_edus: IInst_Edu[]

}
@Component({
  selector: 'app-insts-edus',
  templateUrl: './insts-edus.component.html',
  styleUrls: ['./insts-edus.component.css'],
  providers:subformComponentProviders(InstsEdusComponent)
})
export class InstsEdusComponent extends NgxRootFormComponent<IInsts_edus> {
  
  @DataInput()
  dataInput: Required<IInsts_edus>;
  dataOutput: EventEmitter<IInsts_edus>;

  protected getFormControls():Controls<IInsts_edus>{
    return {
      insts_edus: new FormArray([])
    }
  }
  eliminarCentroEducativo(i){
    this.formGroupControls.insts_edus.removeAt(i)
  }
  agregarCentroEducativo(){
    this.formGroupControls.insts_edus.push(new FormControl())
  }

}
