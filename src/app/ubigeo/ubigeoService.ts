import { Injectable} from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { IUbigeo } from './editor/editor.component';
import { Observable} from 'rxjs';
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
  //this.ubigeosData$.subscribe((val)=>{console.log(val)})
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
  const identificador = this.obtenDocId() 
  
   ubigeoData.docId = identificador
   ubigeoData.accion="Agregar"
   this.afs.collection('ubigeos').doc(identificador).set(ubigeoData)
    
     
 }
 actualizaUbigeo(ubigeoData){  
   console.log(ubigeoData.docId)
  this.ubigeoDocument = this.afs.doc<IUbigeo>(`ubigeos/${ubigeoData.docId}`);
  this.ubigeoDocument.update(ubigeoData).then(()=>{
    console.log('Documento Actualizado Satisfactoriamente')

  }).catch((error)=>{console.error('Error al Actualizar Documento',error)});
   

 }
 eliminaUbigeo(ubigeoDataId:string){
    this.afs.collection("ubigeos").doc(ubigeoDataId).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
 }
}
