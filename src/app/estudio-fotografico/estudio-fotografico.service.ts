import { Injectable } from '@angular/core';
export interface IFotografia{
  downloadUrl:string;
  path:string;
  file:any;
  descripcion:string;
  idLocal:number;
}
@Injectable({
  providedIn: 'root'
})
export class EstudioFotograficoService {

  fotografia:IFotografia={
    descripcion:'',
    downloadUrl:'',
    idLocal:0,
    path:'',
    file:null
  }

  subirFotoFirestorage(){

  }
  subirFotoFireStore(){

  }
}
