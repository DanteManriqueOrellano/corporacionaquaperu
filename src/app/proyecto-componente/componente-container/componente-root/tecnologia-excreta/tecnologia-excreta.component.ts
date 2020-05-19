import { Component } from '@angular/core';
import { NgxSubFormComponent, Controls, subformComponentProviders } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';
export interface ITecnologia{
  tecnologia:string
}
@Component({
  selector: 'app-tecnologia-excreta',
  templateUrl: './tecnologia-excreta.component.html',
  styleUrls: ['./tecnologia-excreta.component.css'],
  providers:subformComponentProviders(TecnologiaExcretaComponent)
})
export class TecnologiaExcretaComponent extends NgxSubFormComponent<ITecnologia> {

  protected getFormControls():Controls<ITecnologia>{
    return{
      tecnologia: new FormControl(),
    }
  }


}
