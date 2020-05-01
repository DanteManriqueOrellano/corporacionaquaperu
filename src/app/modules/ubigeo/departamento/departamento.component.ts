import { Component, OnInit } from '@angular/core';
import { NgxSubFormComponent, Controls, subformComponentProviders, ArrayPropertyKey, ArrayPropertyValue } from 'ngx-sub-form';

import { IDepartamento } from '../IDepartamento';
import { FormControl, Validators, FormArray } from '@angular/forms';
import { IProvincia } from '../IProvincia';
import { ShareModuleDataService } from 'src/app/shareModuleData/share.module.data.service';
import { UbigeoDataService } from '../ubigeo.data.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css'],
  providers:subformComponentProviders(DepartamentoComponent),
})
export class DepartamentoComponent extends NgxSubFormComponent<IProvincia[],IDepartamento> implements OnInit {
  
  constructor(private webApiUbigeo:UbigeoDataService){
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
  up:IDepartamento[]

  guardarUbigeo(){
    this.webApiUbigeo.agregarUbigeoDepartamento(this.formGroupValues);

  }
  actualizarUbigeo(){
    //this.webApiUbigeo.actulizaProvincia()
    //this.webApiUbigeo.agregarProvincia('asd')
    //this.webApiUbigeo.unosole()
     
    var algo = []
    var otro
    algo = this.webApiUbigeo.tmpDepartamentos[0].provincias
    otro = algo.concat({distritos: Array(0), nombre_provincia: "yungay"})
    this.webApiUbigeo.actulizaProvincia({distritos: Array(0), nombre_provincia: "carazzzz"}) 
    
  }
  
  actualizaOtraVez(){
    
    this.webApiUbigeo.departamentos.subscribe((val)=>{
      this.webApiUbigeo.tmpDepartamentos = val
    })
    
    

  }
 


}
