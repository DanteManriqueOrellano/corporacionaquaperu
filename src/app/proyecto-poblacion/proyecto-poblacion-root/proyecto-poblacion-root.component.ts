import { Component, Input, Output,EventEmitter} from '@angular/core';
import { IPoblacion } from './poblacion-form/IPoblacion';
import { NgxRootFormComponent, Controls, subformComponentProviders } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';

interface poblacionForm{
  poblacion:IPoblacion
}
@Component({
  selector: 'app-proyecto-poblacion-root',
  templateUrl: './proyecto-poblacion-root.component.html',
  styleUrls: ['./proyecto-poblacion-root.component.css'],
  providers: subformComponentProviders(ProyectoPoblacionRootComponent)
})
export class ProyectoPoblacionRootComponent extends NgxRootFormComponent <poblacionForm> {
  
  @Input('poblacionInput')
  dataInput: Required<poblacionForm>;
  @Output('poblacionOutput')
  dataOutput: EventEmitter<poblacionForm>= new EventEmitter();

  protected getFormControls():Controls<poblacionForm>{
    return{
      poblacion: new FormControl()
    }
  }
  sendToContainer(){
    this.dataOutput.emit(this.formGroupValues)
  }

}
