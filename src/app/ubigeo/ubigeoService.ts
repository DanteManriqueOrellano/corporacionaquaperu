import { Injectable, ɵConsole } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { IUbigeo } from './editor/editor.component';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UbigeoService {

 private ubigeosData$:Observable<IUbigeo[]>;
 private ubigeoCollection:AngularFirestoreCollection<IUbigeo>;
 private ubigeoDocument:AngularFirestoreDocument<IUbigeo>;

 constructor(private readonly afs: AngularFirestore){
    this.ubigeoCollection = this.afs.collection<IUbigeo>('ubigeos');
    this.ubigeosData$ = this.ubigeoCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as IUbigeo;
          const docId = a.payload.doc.id;
          return { docId, ...data };
        }))
      );
 }
 
 obtenUbigeos():Observable<IUbigeo[]>{
     return this.ubigeosData$
 }
 obtenUnUbigeoPorDocId(docId: string){
     this.ubigeoDocument = this.afs.collection('ubigeos').doc(docId);
     return this.ubigeoDocument.valueChanges();
}
 obtenDocId(){
     return this.afs.createId();
 }
 agregaUbigeo(ubigeoData:IUbigeo){
     console.log(ubigeoData)
     this.ubigeoCollection.doc(this.obtenDocId()).set(ubigeoData)
 }
 actualizaUbigeo(ubigeoData:IUbigeo){    
   // this.afs.collection("ubigeos").doc(ubigeoData.docId).update(ubigeoData);
 }
 eliminaUbigeo(ubigeoDataId:string){
    this.afs.collection("ubigeos").doc(ubigeoDataId).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
 }
}
