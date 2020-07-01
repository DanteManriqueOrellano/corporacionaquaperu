import { Component, Input } from '@angular/core';
import { NgxSubFormComponent, Controls, subformComponentProviders } from 'ngx-sub-form';
import { IRedTuberia } from './red-tuberia/red-tuberia.component';
import { ICaptacion } from './captacion/captacion.component';
import { IReservorio } from './reservorio/reservorio.component';
import { FormControl } from '@angular/forms';
import { MemDesService } from 'src/app/mem-des/mem.des.service';

export interface IComSan{
  captacion:ICaptacion,
  reservorio:IReservorio,
  tecnologiaExcreta:ICaptacion,
  redTuberia:IRedTuberia
}
@Component({
  selector: 'app-com-san',
  templateUrl: './com-san.component.html',
  styleUrls: ['./com-san.component.css'],
  providers:subformComponentProviders(ComSanComponent)
})
export class ComSanComponent extends NgxSubFormComponent<IComSan> {

  @Input('nombreLocalidad') public nombreLocalidad;
  localidad = this.memDesService.localidadesSeleccionadas;

  constructor(private memDesService:MemDesService){super();}

  protected getFormControls():Controls<IComSan>{
    return {
      captacion:new FormControl(),
      redTuberia:new FormControl(),
      reservorio:new FormControl(),
      tecnologiaExcreta:new FormControl(),
    }
  }
}
