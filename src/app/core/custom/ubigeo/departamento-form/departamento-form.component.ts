import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { Controls,subformComponentProviders, DataInput, NgxRootFormComponent } from 'ngx-sub-form';
import { IDepartamento } from './IDepartamento';
import { FormControl, FormArray } from '@angular/forms';

import { IProvincia } from '../provincia-form/IProvincia';
import { UbigeoService } from '../ubigeo.service';

interface depform {
  departamento:IDepartamento[]
}
interface mainform {
  provincias:IProvincia[]
}
@Component({
  selector: 'app-departamento-form',
  templateUrl: './departamento-form.component.html',
  styleUrls: ['./departamento-form.component.css'],
  providers:subformComponentProviders(DepartamentoFormComponent)
})
export class DepartamentoFormComponent extends NgxRootFormComponent<IProvincia[], IDepartamento> implements AfterViewInit  {
  ngAfterViewInit(): void {
    console.log('jo')
  }

  
  @DataInput()
  @Input('ubigeo')
  public dataInput: Required<IProvincia[]>  | null | undefined;

  @Output('listingUpdated')
  public dataOutput: EventEmitter<IProvincia[]> = new EventEmitter();
  
  @Output('eliminaUbigeoOutput')
  public eliminaUbigeoOutput: EventEmitter<string> = new EventEmitter();
 
  @Output('crearUbigeoOutput')
  public crearUbigeoOutput: EventEmitter<IDepartamento> = new EventEmitter();

  protected getFormControls():Controls<IDepartamento>{
    return{
     
     nombre_dep: new FormControl(),
     provincias: new FormArray([])
    }
  }
 
  public agregarProvincia(){
    this.formGroupControls.provincias.push(new FormControl())

  }
  public eliminarProvincia(index: number): void{
    this.formGroupControls.provincias.removeAt(index)
  }
  public ubigeoDeleted(){

    this.eliminaUbigeoOutput.emit('')

  }
  public ubigeoCreated(){
    
    this.crearUbigeoOutput.emit(this.formGroupValues)
  }
 
  
  
}
