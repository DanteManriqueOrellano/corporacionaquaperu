import { Component, OnInit } from '@angular/core';
import { NgxSubFormComponent, Controls } from 'ngx-sub-form';
import { IColindante } from './IColindante';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-colindante-form',
  templateUrl: './colindante-form.component.html',
  styleUrls: ['./colindante-form.component.css']
})
export class ColindanteFormComponent extends NgxSubFormComponent<IColindante> {

 protected getFormControls():Controls<IColindante>{
   return {
     este : new FormControl(),
     norte: new FormControl(),
     oeste: new FormControl(),
     sur: new FormControl(),
   }
 }
}
