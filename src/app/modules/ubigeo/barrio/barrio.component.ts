import { Component, OnInit } from '@angular/core';
import { NgxSubFormComponent, Controls, subformComponentProviders } from 'ngx-sub-form';
import { IBarrio } from '../IBarrio';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-barrio',
  templateUrl: './barrio.component.html',
  styleUrls: ['./barrio.component.css'],
  providers: subformComponentProviders(BarrioComponent)
})
export class BarrioComponent extends NgxSubFormComponent<IBarrio> implements OnInit {
  barrio:string = 'Nombre del Barrio'

  protected getFormControls():Controls<IBarrio>{
    return{
      nombre_barrio:new FormControl()
    }
  }

  ngOnInit(): void {
  }

}
