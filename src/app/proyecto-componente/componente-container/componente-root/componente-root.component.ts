import { Component, Input, Output,EventEmitter } from '@angular/core';
import { NgxRootFormComponent, Controls, subformComponentProviders, DataInput } from 'ngx-sub-form';
import { IRedTuberia } from './red-tuberia/IRedTuberia';
import { ICaptacion } from './captacion/captacion.component';
import { IReservorio } from './reservorio/reservorio.component';
import { ITecnologia } from './tecnologia-excreta/tecnologia-excreta.component';
import { FormControl } from '@angular/forms';

interface IProyectoComponenteForm{
  red_tuberia:IRedTuberia;
  captacion:ICaptacion;
  reservorio:IReservorio;
  tecnologia_excreta:ITecnologia;
}
@Component({
  selector: 'app-componente-root',
  templateUrl: './componente-root.component.html',
  styleUrls: ['./componente-root.component.css'],
  providers:subformComponentProviders(ComponenteRootComponent)
})
export class ComponenteRootComponent extends NgxRootFormComponent<IProyectoComponenteForm> {
  @DataInput()
  @Input('componenteInput')
  dataInput: Required<IProyectoComponenteForm>;
  @Output('componenteOutput')
  dataOutput:EventEmitter<IProyectoComponenteForm>;

  protected getFormControls():Controls<IProyectoComponenteForm>{
    return{
      captacion: new FormControl(),
      red_tuberia: new FormControl(),
      reservorio: new FormControl(),
      tecnologia_excreta: new FormControl(),
    }
  }


}
