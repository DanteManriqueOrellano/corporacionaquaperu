import { Component, OnInit } from '@angular/core';
import { IInst_Edu } from '../inst-edu/inst-edu.component';
import { NgxSubFormComponent, Controls, subformComponentProviders } from 'ngx-sub-form';
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
export class InstsEdusComponent extends NgxSubFormComponent<IInsts_edus> {

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
