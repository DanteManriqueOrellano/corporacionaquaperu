import { Injectable } from '@angular/core';
import { IDepartamento } from './departamento-form/IDepartamento';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { IProvincia } from './provincia-form/IProvincia';
import { Observable, BehaviorSubject } from 'rxjs';

import { map, find } from 'rxjs/operators';
import { SharedService } from '../shared.service';

export interface DepartamentoId extends IDepartamento { id: string; }
@Injectable({
  providedIn: 'root'
})
export class UbigeoService {
  
  public ubigeosData$ = this.webApiUbigeos.departamentos
  public id: string = null;
  
  
  constructor(private webApiUbigeos:SharedService){ }
  
  public crearUbigeo(departamento:IDepartamento){
    this.webApiUbigeos.crearUbigeo(departamento)
  }
  public ListarUbigeos() {//:Observable<IDepartamento[]>
    return this.webApiUbigeos.ListarUbigeos()
  }
   
  public obtenerUnUbigeo(docId:string){
   return this.webApiUbigeos.obtenerUnUbigeo(docId)
  }

  public actualizaUbigeo(ubigeo: IDepartamento,docId:string): void {
    
    
    return this.webApiUbigeos.actualizaUbigeo(ubigeo,docId)
  }
  public eliminarUnUbigeo(idUbigeo: string): void {
    return this.webApiUbigeos.eliminarUnUbigeo(idUbigeo)
  }
}
