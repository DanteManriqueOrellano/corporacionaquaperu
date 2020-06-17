import { Component, EventEmitter } from '@angular/core';
import { IRedTuberiaForm } from './red-tuberia/red-tuberia.component';
import { ICaptacion } from './captacion/captacion.component';
import { IReservorio } from './reservorio/reservorio.component';
import { ITecnologiaExcreta } from './tecnologia-excreta/tecnologia-excreta.component';
import { subformComponentProviders, NgxRootFormComponent, Controls, DataInput } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';
export interface IComp_sanitarioRoot {
  red_tuberia:IRedTuberiaForm;
  captacion:ICaptacion;
  reservorio:IReservorio;
  tecnologiaExcreta:ITecnologiaExcreta;
}

@Component({
  selector: 'app-comp-sanitario-root-form',
  templateUrl: './comp-sanitario-root-form.component.html',
  styleUrls: ['./comp-sanitario-root-form.component.css'],
  providers:subformComponentProviders(CompSanitarioRootFormComponent)
})
export class CompSanitarioRootFormComponent extends NgxRootFormComponent<IComp_sanitarioRoot>  {
  @DataInput()
  dataInput: Required<IComp_sanitarioRoot>;
  dataOutput: EventEmitter<IComp_sanitarioRoot>;
  
  protected getFormControls():Controls<IComp_sanitarioRoot>{
    return {
      captacion: new FormControl(),
      red_tuberia: new FormControl(),
      reservorio: new FormControl(),
      tecnologiaExcreta: new FormControl(),
    }
  }


}
 