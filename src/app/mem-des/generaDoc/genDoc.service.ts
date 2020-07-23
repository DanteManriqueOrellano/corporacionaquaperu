import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProyecto } from 'src/app/home/home.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ILocalidadesSeleccionadas } from 'src/app/ubigeo/localidades.service';

@Injectable({
  providedIn: 'root'
})
export class genDocService {
    private proyecto$: BehaviorSubject<IProyecto> = new BehaviorSubject(proyecto);
    private localidadesseleccionadas$: BehaviorSubject<ILocalidadesSeleccionadas[]> = new BehaviorSubject(localidadesseleccionadas);
    
    public getProyecto():Observable<IProyecto>{
        return this.proyecto$
    }
  constructor() { }
}

export const proyecto = {
    alias:"culebrita",
    cliente:"muni",
    fecha:"30/30/30",
    nombre_proyecto:"mejoramietno de agua",
    tipo_proyecto:"Saneamiento",
    funcionalidadesInstaladas:[{nombreFuncionalidad:'',id:''}]
};
export const localidadesseleccionadas = []