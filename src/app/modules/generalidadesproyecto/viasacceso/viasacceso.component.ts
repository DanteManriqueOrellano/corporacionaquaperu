import { Component, OnInit } from '@angular/core';
import { NgxSubFormComponent, Controls,subformComponentProviders } from 'ngx-sub-form';
import { IVia_acceso } from 'src/app/models/IVia_acceso';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-viasacceso',
  templateUrl: './viasacceso.component.html',
  styleUrls: ['./viasacceso.component.css'],
  providers: subformComponentProviders(ViasaccesoComponent)
})
export class ViasaccesoComponent extends NgxSubFormComponent<IVia_acceso> implements OnInit {

  protected getFormControls():Controls<IVia_acceso>{
    return{
      distancia:new FormControl(),
      nombre_lugar:new FormControl(),
      tiempo:new FormControl(),
      tipo_via:new FormControl(),
    }
  }

  ngOnInit(): void {
  }

}
