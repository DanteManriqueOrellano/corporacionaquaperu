import { Component, OnInit } from '@angular/core';
import { NgxSubFormComponent, Controls, subformComponentProviders } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export interface IUbigeo_seleccionado {
  id:string
}
@Component({
  selector: 'app-ubigeo-select',
  templateUrl: './ubigeo-select.component.html',
  styleUrls: ['./ubigeo-select.component.css'],
  providers: subformComponentProviders(UbigeoSelectComponent)
})
export class UbigeoSelectComponent extends NgxSubFormComponent<IUbigeo_seleccionado>  {

  protected getFormControls():Controls<IUbigeo_seleccionado>{
    return {
      id: new FormControl()
    }
  }

  
  

}
