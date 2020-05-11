import { Component } from '@angular/core';
import {NgxSubFormComponent,subformComponentProviders,Controls} from 'ngx-sub-form'
import { IAntecedenteIntervencion } from './IAntecedente-intervencion';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-antecedente-intervencion-form',
  templateUrl: './antecedente-intervencion-form.component.html',
  styleUrls: ['./antecedente-intervencion-form.component.css'],
  providers: subformComponentProviders(AntecedenteIntervencionFormComponent)
})
export class AntecedenteIntervencionFormComponent extends NgxSubFormComponent<IAntecedenteIntervencion>  {

  protected getFormControls():Controls<IAntecedenteIntervencion>{
    return {
      detalle_intervencion: new FormControl()
    }
  }

}
