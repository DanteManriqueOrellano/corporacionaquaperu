import { Component, OnInit } from '@angular/core';
import { NgxSubFormComponent, Controls, subformComponentProviders } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { DepartamentoId } from 'src/app/ubigeo/ubigeo.service';
import { IProvincia } from 'src/app/ubigeo/provincia-form/IProvincia';
import { IDistrito } from 'src/app/ubigeo/distrito-form/IDistrito';
import { ICacerio } from 'src/app/ubigeo/cacerio-form/ICacerio';
import { ICp } from 'src/app/ubigeo/cp-form/ICp';
import { IAnexo } from 'src/app/ubigeo/anexo-form/IAnexo';
import { IBarrio } from 'src/app/ubigeo/barrio-form/IBarrio';
import { UbigeoService } from 'src/app/shared/ubigeo.service';
export interface IUbigeo_seleccionado {
  depa_select:string;
  prov_select:string;
  dist_select:string;
  cacerios_select:string[];
  centros_poblados_select:string[];
}
@Component({
  selector: 'app-ubigeo-select',
  templateUrl: './ubigeo-select.component.html',
  styleUrls: ['./ubigeo-select.component.css'],
  providers: subformComponentProviders(UbigeoSelectComponent)
})
export class UbigeoSelectComponent extends NgxSubFormComponent<IUbigeo_seleccionado>  {

  public departamentos$:Observable<DepartamentoId[]> = this.ubigeoService.departamentos
 
  


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

  constructor(private ubigeoService:UbigeoService){
    super();
  }

  protected getFormControls():Controls<IUbigeo_seleccionado>{
    return {
      centros_poblados_select:new FormControl(),
      cacerios_select:new FormControl(),
      depa_select:new FormControl(),
      dist_select:new FormControl(),
      prov_select:new FormControl(),
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
      let index: any[] = this.formGroupControls.cacerios_select.value
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
