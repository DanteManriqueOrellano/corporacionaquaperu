import { Component } from '@angular/core';
import { NgxSubFormComponent, Controls, subformComponentProviders } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';
export interface IAntecedente_intervencion {
  detalle_intervencion:string;
}
@Component({
  selector: 'app-antecedente-intervencion',
  templateUrl: './antecedente-intervencion.component.html',
  styleUrls: ['./antecedente-intervencion.component.css'],
  providers:subformComponentProviders(AntecedenteIntervencionComponent)
})
export class AntecedenteIntervencionComponent extends NgxSubFormComponent<IAntecedente_intervencion>  {

  protected getFormControls():Controls<IAntecedente_intervencion>{
    return {
      detalle_intervencion: new FormControl()
    }
  }


}
