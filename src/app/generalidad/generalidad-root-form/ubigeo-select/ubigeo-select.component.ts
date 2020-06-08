import { Component, OnInit } from '@angular/core';
import { NgxSubFormComponent, Controls, subformComponentProviders } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';
export interface IUbigeo_seleccionado {
  depa_select:string;
  prov_select:string;
  dist_select:string;
  cacerios_select:string[];
  anexos_select:string[];
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
      anexos_select:new FormControl(),
      cacerios_select:new FormControl(),
      depa_select:new FormControl(),
      dist_select:new FormControl(),
      prov_select:new FormControl(),
    }
  }

  

}
