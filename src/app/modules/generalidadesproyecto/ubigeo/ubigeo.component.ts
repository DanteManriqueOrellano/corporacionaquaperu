import { Component, OnInit } from '@angular/core';
import { ShareModuleDataService } from 'src/app/shareModuleData/share.module.data.service';
import { IDepartamento } from '../../ubigeo/IDepartamento';
import { FormControl, Validators } from '@angular/forms';
import { IProvincia } from '../../ubigeo/IProvincia';
import { IDistrito } from '../../ubigeo/IDistrito';
import { ICacerio } from '../../ubigeo/ICacerio';
import { ICentro_Poblado } from '../../ubigeo/ICentro_Poblado';
import { IAnexo } from '../../ubigeo/IAnexo';
import { IBarrio } from '../../ubigeo/IBarrio';
interface Animal {
  name: string;
  sound: string;
}
@Component({
  selector: 'app-ubigeo',
  templateUrl: './ubigeo.component.html',
  styleUrls: ['./ubigeo.component.css']
})
export class UbigeoComponent implements OnInit {

  departamentos:IDepartamento[] = []
  provincias:IProvincia[];
  distritos:IDistrito[];
  cacerios:ICacerio[];
  centros_poblados:ICentro_Poblado[];
  anexos:IAnexo[];
  barrios:IBarrio[];

  constructor(private ubigeo:ShareModuleDataService) { }

  ngOnInit(): void {
    this.ubigeo.listaDepartamentos().subscribe((departamentos:IDepartamento[])=>{
      this.departamentos = departamentos
     
    })
  }
  setIndiceDepartamento(i){
    this.provincias = this.departamentos[i].provincias
    
  }
  setIndiceProvincia(i){
    this.distritos = this.provincias[i].distritos

  }
  setIndiceDistrito(i){
    this.cacerios = this.distritos[i].caserios

  }
  setIndiceCacerio(i){
    this.centros_poblados = this.cacerios[i].centros_poblados
    
  }
  setIndiceCentroPoblado(i){
    this.anexos = this.centros_poblados[i].anexos

  }
  setIndiceAnexo(i){
    this.barrios = this.anexos[i].barrios


  }
  setIndiceBarrio(i){
    // this.distritos = this.provincias[i].distritos
 
    
   }

}
