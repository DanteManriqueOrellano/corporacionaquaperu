import { Component } from '@angular/core';
import { NgxSubFormComponent, Controls, subformComponentProviders } from 'ngx-sub-form';
import { IRedTuberia } from './red-tuberia/red-tuberia.component';
import { ICaptacion } from './captacion/captacion.component';
import { IReservorio } from './reservorio/reservorio.component';
import { FormControl } from '@angular/forms';

export interface IComSan{
  captacion:ICaptacion,
  reservorio:IReservorio,
  tecnologiaExcreta:ICaptacion,
  redTuberia:IRedTuberia
}
@Component({
  selector: 'app-com-san-root-form',
  templateUrl: './com-san-root-form.component.html',
  styleUrls: ['./com-san-root-form.component.css'],
  providers:subformComponentProviders(ComSanRootFormComponent)
})
export class ComSanRootFormComponent extends NgxSubFormComponent<IComSan> {

  protected getFormControls():Controls<IComSan>{
    return {
      captacion:new FormControl(),
      redTuberia:new FormControl(),
      reservorio:new FormControl(),
      tecnologiaExcreta:new FormControl(),
    }
  }
}
