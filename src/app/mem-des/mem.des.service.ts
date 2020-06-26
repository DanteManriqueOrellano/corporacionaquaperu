import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

import { DocidService } from 'src/app/shared/docid.service';
import { IGeneralidadRoot } from './mem-des/generalidad-root-form/generalidad-root-form.component';



export interface IMemoriaDescriptiva extends IGeneralidadRoot {
  docIdGeneralidad:string
  
}
@Injectable({
  providedIn: 'root'
})
export class MemDesService {
  
  public localidades:string[];
  public docId:string;
  
  private memoriasDescriptivas: Observable<IMemoriaDescriptiva[]>;
  private memoriaDescriptivaCollection: AngularFirestoreCollection<IMemoriaDescriptiva>;
  private memoriaDescriptivaDocument: AngularFirestoreDocument<IMemoriaDescriptiva>

  //public generalidadData$:BehaviorSubject<IGeneralidadRoot> = new BehaviorSubject(generalidadData)

  constructor(private firestore: AngularFirestore, private docIdService:DocidService) {
    this.memoriaDescriptivaCollection = this.firestore.collection<IMemoriaDescriptiva>('memoriadescriptiva');
    this.memoriasDescriptivas = this.memoriaDescriptivaCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as IMemoriaDescriptiva;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
  
  public crearUnaMemoriaDescriptiva(generalidad: IGeneralidadRoot) {
    const docId = this.docIdService.DocId
    this.memoriaDescriptivaCollection.doc(docId).set(generalidad)
    .then(()=>{
      console.log("Documento creado Satisfactoriamente");
    })
    .catch((error)=>{console.error("error al crear el domumento",error)})
    return docId;
  }
  public obtenMemoriasDescriptivas(): Observable<IMemoriaDescriptiva[]> {
    return this.memoriasDescriptivas
  }
  public obtenUnaMemoriaDescriptiva(docId: string) {
    this.memoriaDescriptivaDocument = this.firestore.collection('generalidades').doc(docId);
    return this.memoriaDescriptivaDocument.valueChanges();
  }

  public actualizaUnaMemoriaDescriptiva(generalidadDataId: IMemoriaDescriptiva): void {

    this.memoriaDescriptivaCollection.doc(generalidadDataId.docIdGeneralidad).set(generalidadDataId).then(function () {
      console.log("Document successfully updated!");
    }).catch(function (error) {
      console.error("Error updating document: ", error);
    });
  }
  public eliminaMemoriaDescriptiva(idUbigeo: string): void {
    this.memoriaDescriptivaCollection.doc(idUbigeo).delete().then(function () {
      console.log("Document successfully deleted!");
    }).catch(function (error) {
      console.error("Error removing document: ", error);
    });
  }


}
