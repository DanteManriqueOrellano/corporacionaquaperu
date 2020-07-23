import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface ILocalidadesSeleccionadas {
  nombre_centro_poblado:string;
  id:number;
}
interface ILocalidadesSeleccionadasDocId extends ILocalidadesSeleccionadas{
  docIdLocalidadesSeleccionadas:string
}
@Injectable({
  providedIn: 'root'
})
export class LocalidadesService {

  private localidadesData$:Observable<ILocalidadesSeleccionadasDocId[]>;
  private localidadesCollection:AngularFirestoreCollection<ILocalidadesSeleccionadasDocId>;
  private ubigeoDocument:AngularFirestoreDocument<ILocalidadesSeleccionadasDocId>;
 
  constructor(private readonly afs: AngularFirestore){
     this.localidadesCollection = this.afs.collection<ILocalidadesSeleccionadasDocId>('localidadesseleccionadas');
     this.localidadesData$ = this.localidadesCollection.snapshotChanges().pipe(
         map(actions => actions.map(a => {
           const data = a.payload.doc.data() as ILocalidadesSeleccionadasDocId;
           const docIdLocalidadesSeleccionadas = a.payload.doc.id;
           return { docIdLocalidadesSeleccionadas, ...data };
         }))
       );
  }
  
  obtenLocalidades():Observable<ILocalidadesSeleccionadasDocId[]>{
      return this.localidadesData$
  }
  obtenUnaLocalidad(docIdLocalidadesSeleccionadas){
    return this.localidadesCollection.doc(docIdLocalidadesSeleccionadas).snapshotChanges()

  }
  
  obtenDocId(){
      return this.afs.createId();
  }
  creaLocalidades(localidadesData:ILocalidadesSeleccionadas[]):void{
    const docIdLocalidades = this.obtenDocId() 
    const data = {docIdLocalidades,...localidadesData} 
    this.localidadesCollection.doc(data.docIdLocalidades).set(data)
  }
  actualizaLocalidades(lodalidadesData:ILocalidadesSeleccionadasDocId){    
     this.afs.collection("localidadesseleccionadas").doc(lodalidadesData.docIdLocalidadesSeleccionadas).update(lodalidadesData);
  }
  eliminaUbigeo(docIdLocalidadesSeleccionadas:string){
     this.afs.collection("localidadesseleccionadas").doc(docIdLocalidadesSeleccionadas).delete().then(function() {
         console.log("Document successfully deleted!");
     }).catch(function(error) {
         console.error("Error removing document: ", error);
     });
  }
}
