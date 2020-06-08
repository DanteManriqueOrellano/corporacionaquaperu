import { Component } from '@angular/core';
import { NgxSubFormComponent, Controls, subformComponentProviders } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';
export interface IHist_doc{
  anio_priorizacion:string;
  fecha_aprovacion:string;
  inf_tec_nro:string;
  resp_und_ejecutora:string;
  resp_und_evaluadora:string;
  resp_und_formuladora:string;
}
@Component({
  selector: 'app-hist-doc',
  templateUrl: './hist-doc.component.html',
  styleUrls: ['./hist-doc.component.css'],
  providers:subformComponentProviders(HistDocComponent)
})
export class HistDocComponent extends NgxSubFormComponent<IHist_doc>  {

  protected getFormControls():Controls<IHist_doc>{
    return {
      anio_priorizacion: new FormControl(),
      fecha_aprovacion: new FormControl(),
      inf_tec_nro: new FormControl(),
      resp_und_ejecutora: new FormControl(),
      resp_und_evaluadora: new FormControl(),
      resp_und_formuladora: new FormControl(),
    }

  }


}
