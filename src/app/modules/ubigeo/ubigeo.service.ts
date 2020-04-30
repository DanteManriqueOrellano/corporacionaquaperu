import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
export interface AccountLogItem { description: string; amount: number; }
export interface AccountLogItemId extends AccountLogItem { id: string; }
export interface AccountDeposit { description: string; amount: number; }
export interface AccountDepoistId extends AccountDeposit { id: string; }
export interface Shirt { name: string; price: number; }
export interface ShirtId extends Shirt { id: string; }
@Injectable({
  providedIn: 'root'
})
export class UbigeoService {

  private shirtCollection: AngularFirestoreCollection<Shirt>;
  shirts: Observable<ShirtId[]>;
  constructor(private readonly afs: AngularFirestore) {
    this.shirtCollection = afs.collection<Shirt>('shirts');
 
    this.shirts = this.shirtCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Shirt;
        const id = a.payload.doc.id;
        return {id, ...data };
      }))
    );
    }

}
