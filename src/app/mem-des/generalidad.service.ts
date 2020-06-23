import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

import { DocidService } from 'src/app/shared/docid.service';
import { IGeneralidadRoot } from './mem-des/generalidadc/generalidad-root-form/generalidad-root-form.component';


export interface IGeneralidadDataId extends IGeneralidadRoot {
  id:string
 
}
@Injectable({
  providedIn: 'root'
})
export class GeneralidadService {
  public docId:string;
  
  private generalidades: Observable<IGeneralidadDataId[]>;
  private generalidadCollection: AngularFirestoreCollection<IGeneralidadDataId>;
  private generalidadDocument: AngularFirestoreDocument<IGeneralidadDataId>

  //public generalidadData$:BehaviorSubject<IGeneralidadRoot> = new BehaviorSubject(generalidadData)

  constructor(private firestore: AngularFirestore, private docIdService:DocidService) {
    this.generalidadCollection = this.firestore.collection<IGeneralidadDataId>('generalidades');
    this.generalidades = this.generalidadCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as IGeneralidadDataId;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
  
  public crearUnaGeneralidad(generalidad: IGeneralidadRoot) {
    const docId = this.docIdService.DocId
    this.generalidadCollection.doc(docId).set(generalidad)
    .then(()=>{
      console.log("Documento creado Satisfactoriamente");
    })
    .catch((error)=>{console.error("error al crear el domumento",error)})
    return docId;
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
