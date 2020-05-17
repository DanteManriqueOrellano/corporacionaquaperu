import { Component } from '@angular/core';
import { NgxSubFormComponent,subformComponentProviders, Controls } from 'ngx-sub-form';
import { IUbigeo_Seleccionado } from './IUbigeo-seleccionado';
import { FormControl, FormArray } from '@angular/forms';
import { SharedUbigeoService } from 'src/app/core/shared.ubigeo.service';
import { IDepartamento } from 'src/app/core/custom/ubigeo/departamento-form/IDepartamento';
import { DepartamentoId } from 'src/app/core/custom/ubigeo/ubigeo.service';
import { Observable, of } from 'rxjs';
import { IBarrio } from 'src/app/core/custom/ubigeo/barrio-form/IBarrio';
import { IAnexo } from 'src/app/core/custom/ubigeo/anexo-form/IAnexo';
import { ICp } from 'src/app/core/custom/ubigeo/cp-form/ICp';
import { ICacerio } from 'src/app/core/custom/ubigeo/cacerio-form/ICacerio';
import { IDistrito } from 'src/app/core/custom/ubigeo/distrito-form/IDistrito';
import { IProvincia } from 'src/app/core/custom/ubigeo/provincia-form/IProvincia';

@Component({
  selector: 'app-ubigeo-seleccionado-form',
  templateUrl: './ubigeo-seleccionado-form.component.html',
  styleUrls: ['./ubigeo-seleccionado-form.component.css'],
  providers: subformComponentProviders(UbigeoSeleccionadoFormComponent)
})
export class UbigeoSeleccionadoFormComponent extends NgxSubFormComponent<IUbigeo_Seleccionado>  {

  public departamentos$:Observable<DepartamentoId[]> = this.apiWebUbigeo.departamentos
 
  


  public depId:number = 0;
  public proId:number = 0;
  public disId:number = 0;
  public casId:number = 0;
  public cpId:number = 0;
  public aneId:number = 0;
  public barId:number = 0;

  public dataProvincia:IProvincia[];
  public dataDistrito:IDistrito[];
  public dataCaserio:ICacerio[];
  public dataCp:ICp[];
  public dataAnexo:IAnexo[];
  public dataBar:IBarrio[];
  public selectedValue:string[]


  constructor(private apiWebUbigeo:SharedUbigeoService){
    super();
  }

  
  protected getFormControls():Controls<IUbigeo_Seleccionado>{
    return {
      anexos: new FormArray([]),
      barrios: new FormArray([]),
      cacerios: new FormControl(),
      centros_poblados: new FormControl(),
      departamento: new FormControl(),
      distrito: new FormControl(),
      provincia: new FormControl(),
    }
  }

  setIndiceDepartamento(depId){
    this.depId = depId
    
    this.departamentos$.subscribe((val)=>{this.dataProvincia = val[depId].provincias})
  }
  setIndiceProvincia(proId){
    this.proId=proId
    this.departamentos$.subscribe((val)=>{this.dataDistrito = val[this.depId].provincias[proId].distritos})
  }
  setIndiceDistrito(disId){
    this.disId=disId
    this.departamentos$.subscribe((val)=>{this.dataCaserio=val[this.depId].provincias[this.proId].distritos[disId].cacerios})
  }
  setIndiceCacerio(casId) {


    this.departamentos$.subscribe((val) => {
      let Arreglo: number[] = [99]
      let index: any[] = this.formGroupControls.cacerios.value
      //busca un elemento segun el index
      index.map((val) => {
        Arreglo.map((elemento) => {
          if (elemento === val.id) {//existe, por lo tanto elimina al elemento del arreglo
            Arreglo.slice[val.id, val.id]
          }
          else {//agrega al arreglo
            Arreglo.push(val.id)
          }
        })
      })
      let sinRepetidos = [...new Set(Arreglo)]//elimina elelentos repetidos de tipos primitivos


      let cas: any[] = [{ 'cp': 'nada', 'id': 98 }]


      for (let index = 1; index < sinRepetidos.length; index++) {
        const element = sinRepetidos[index];
        cas.map((elemento) => {
          if (elemento === sinRepetidos[index]) {
            cas.slice[sinRepetidos[index], sinRepetidos[index]]
          }
          else {
            cas.push({ 'cp': val[this.depId].provincias[this.proId].distritos[this.disId].cacerios[element].cps, 'id': element })
          }
        })
      }

      this.dataCp = cas.filter((valorActual, indiceActual, arreglo) => {
        //Podríamos omitir el return y hacerlo en una línea, pero se vería menos legible
        return arreglo.findIndex(valorDelArreglo => JSON.stringify(valorDelArreglo) === JSON.stringify(valorActual)) === indiceActual
      });

      this.dataCp.shift()
    })
  }
  setIndiceCentroPoblado(cpId){
    this.cpId = cpId
    
    
    this.departamentos$.subscribe((val)=>
    {
      
      //this.dataAnexo =val[this.depId].provincias[this.proId].distritos[this.disId].cacerios[this.disId].cps[cpId].anexos
    })
  }
  setIndiceAnexo(aneId){
    this.aneId = aneId
    //this.departamentos$.subscribe((val)=>{this.dataBar =val[this.depId].provincias[this.proId].distritos[this.disId].cacerios[this.disId].cps[this.casId].anexos[aneId].barrios})
  }
  setIndiceBarrio(barId){
    //this.departamentos$.subscribe((val)=>{this.dataBar =val[this.depId].provincias[this.proId].distritos[this.proId].cacerios[this.disId].cps[this.casId].anexos[this.aneId].barrios[barId]})

  }

}

