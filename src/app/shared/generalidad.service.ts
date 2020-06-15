import { Injectable } from '@angular/core';
import { IGeneralidadRoot } from '../generalidad/generalidad-root-form/generalidad-root-form.component';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

export interface IGeneralidadDataId extends IGeneralidadRoot {
  id:string
 
}
@Injectable({
  providedIn: 'root'
})
export class GeneralidadService {
  
  private generalidades: Observable<IGeneralidadDataId[]>;
  private generalidadCollection: AngularFirestoreCollection<IGeneralidadDataId>;
  private generalidadDocument: AngularFirestoreDocument<IGeneralidadDataId>

  //public generalidadData$:BehaviorSubject<IGeneralidadRoot> = new BehaviorSubject(generalidadData)

  constructor(private firestore: AngularFirestore) {
    this.generalidadCollection = this.firestore.collection<IGeneralidadDataId>('generalidades');
    this.generalidades = this.generalidadCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as IGeneralidadDataId;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
  public crearUUID(){
    return this.firestore.createId()
  }
  public crearUnaGeneralidad(generalidad: IGeneralidadRoot) {
    const uid = this.crearUUID()
    this.generalidadCollection.doc(uid).set(generalidad)
    .then(()=>{
      console.log("Documento creado Satisfactoriamente");
    })
    .catch((error)=>{console.error("error al crear el domumento",error)})
    return uid;
  }
  public obtenGeneralidades(): Observable<IGeneralidadDataId[]> {
    return this.generalidades
  }
  public obtenUnaGeneralidad(docId: string) {
    this.generalidadDocument = this.firestore.collection('generalidades').doc(docId);
    return this.generalidadDocument.valueChanges();
  }

  public actualizaUnaGeneralidad(generalidadDataId: IGeneralidadDataId): void {

    this.generalidadCollection.doc(generalidadDataId.id).set(generalidadDataId).then(function () {
      console.log("Document successfully updated!");
    }).catch(function (error) {
      console.error("Error updating document: ", error);
    });
  }
  public eliminaUnaGeneralidad(idUbigeo: string): void {
    this.generalidadCollection.doc(idUbigeo).delete().then(function () {
      console.log("Document successfully deleted!");
    }).catch(function (error) {
      console.error("Error removing document: ", error);
    });
  }


}
