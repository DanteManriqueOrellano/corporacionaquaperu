import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IDepartamento } from '../modules/ubigeo/IDepartamento';
export interface AccountLogItem { description: string; amount: number; }
export interface AccountLogItemId extends AccountLogItem { id: string; }
export interface AccountDeposit { description: string; amount: number; }
export interface AccountDepoistId extends AccountDeposit { id: string; }
export interface Shirt { name: string; price: number; }
export interface DepartamentoId extends IDepartamento { id: string; }
@Injectable({
  providedIn: 'root'
})
export class ShareModuleDataService {
  
  private departamentoCollection: AngularFirestoreCollection<IDepartamento>;
  departamentos: Observable<DepartamentoId[]>;
  constructor(private readonly afs: AngularFirestore) {
    
    this.departamentoCollection = this.afs.collection<IDepartamento>('departamentos');
 
    this.departamentos = this.departamentoCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as IDepartamento;
        const id = a.payload.doc.id;
        return {id, ...data };
      }))
    );
    }

    agregarUbigeo(data:IDepartamento){
      this.departamentoCollection.add(data).then(e=>console.log(e))

    }

 
}
