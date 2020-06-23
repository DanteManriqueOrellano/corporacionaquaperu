import { Component } from '@angular/core';
import { NgxSubFormComponent, Controls, subformComponentProviders } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';
export interface IColindante {
  este:string;
  oeste:string;
  norte:string;
  sur:string;
}
@Component({
  selector: 'app-colindante',
  templateUrl: './colindante.component.html',
  styleUrls: ['./colindante.component.css'],
  providers: subformComponentProviders(ColindanteComponent)
})
export class ColindanteComponent extends NgxSubFormComponent<IColindante>  {

  protected getFormControls():Controls<IColindante>{
    return {
      este: new FormControl(),
      norte: new FormControl(),
      oeste: new FormControl(),
      sur: new FormControl(),
    }
  }


}
