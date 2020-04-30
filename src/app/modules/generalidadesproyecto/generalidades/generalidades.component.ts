import { Component, OnInit } from '@angular/core';
import { NgxSubFormComponent, Controls, subformComponentProviders } from 'ngx-sub-form';

import { IGeneralidad } from 'src/app/models/IGeneralidad';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-generalidades',
  templateUrl: './generalidades.component.html',
  styleUrls: ['./generalidades.component.css'],
  providers:subformComponentProviders(GeneralidadesComponent)
})
export class GeneralidadesComponent extends NgxSubFormComponent<IGeneralidad> implements OnInit {

  protected getFormControls():Controls<IGeneralidad>{
    return {
      alias: new FormControl(),
      cliente: new FormControl(),
      nombre_proyecto: new FormControl(),
      modalidad_ejecucion: new FormControl(),
      otros:new FormControl(),
      plazo_ejecucion: new FormControl(),
      sist_contratacion: new FormControl(),
      snip: new FormControl()
    }
    
    
  }

  ngOnInit(): void {
  }

}
