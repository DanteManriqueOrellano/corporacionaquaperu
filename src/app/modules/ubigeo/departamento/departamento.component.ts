import { Component, OnInit } from '@angular/core';
import { NgxSubFormComponent, Controls, subformComponentProviders, ArrayPropertyKey, ArrayPropertyValue } from 'ngx-sub-form';

import { IDepartamento } from '../IDepartamento';
import { FormControl, Validators, FormArray } from '@angular/forms';
import { IProvincia } from '../IProvincia';
import { ShareModuleDataService } from 'src/app/shareModuleData/share.module.data.service';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css'],
  providers:subformComponentProviders(DepartamentoComponent),
})
export class DepartamentoComponent extends NgxSubFormComponent<IProvincia[],IDepartamento> implements OnInit {
  
  constructor(private webApiUbigeo:ShareModuleDataService){
    super();

  }

  protected getFormControls():Controls<IDepartamento>{
    return {
      nombre_departamento: new FormControl(),
      provincias: new FormArray([])
    }
  }

  ngOnInit(): void {
    
  }
  


  agregarProvincia(){
    this.formGroupControls.provincias.push(
      this.createFormArrayControl('provincias', {
        nombre_provincia: '',
        distritos: []
      }),
    );
    
  }


  

  eliminarProvincia(index){
    this.formGroupControls.provincias.removeAt(index);

  }
  public createFormArrayControl(
    key:'provincias',
    value: IProvincia,
  ): FormControl {
    
    switch (key) {
      // note: the following string is type safe based on your form properties!
      case 'provincias':
        return new FormControl();
      default:
        return new FormControl(value);
    }
  }

  guardarUbigeo(){
    this.webApiUbigeo.agregarUbigeo(this.formGroupValues);

  }

}
