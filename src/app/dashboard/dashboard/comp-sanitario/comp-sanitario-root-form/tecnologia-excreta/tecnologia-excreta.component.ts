import { Component, OnInit } from '@angular/core';
import { subformComponentProviders, NgxSubFormComponent, Controls } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';
export interface ITecnologiaExcreta {
  tecnologia:string;
}

@Component({
  selector: 'app-tecnologia-excreta',
  templateUrl: './tecnologia-excreta.component.html',
  styleUrls: ['./tecnologia-excreta.component.css'],
  providers:subformComponentProviders(TecnologiaExcretaComponent)
})
export class TecnologiaExcretaComponent extends NgxSubFormComponent<ITecnologiaExcreta>  {

  protected getFormControls():Controls<ITecnologiaExcreta>{
    return {
      tecnologia: new FormControl(),
    }
  }


}
