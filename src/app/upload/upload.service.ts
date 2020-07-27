import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { HomeService } from '../home/home.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';
import { DocIdProyectoService } from '../shared/docIdProyecto.service';

export interface IFoto {
  idlocal:string;
  docIdProyecto:string;
  descripcion:string;
  accion:string
  dowloadUrl:string;
  path:string;
  archivo:string;

}
@Injectable({
  providedIn: 'root'
})
export class UploadService {

  image_local:any[]=[
    
  ] 
  
  
  private fotos$: Observable<IFoto[]>;
  private fotoCollection: AngularFirestoreCollection<IFoto>;
  private fotoDocument: AngularFirestoreDocument<IFoto>
  
  constructor(private firestore: AngularFirestore, private docIdProyectoService:DocIdProyectoService) {
    this.fotoCollection = this.firestore.collection<IFoto>('fotos');
    this.fotos$ = this.fotoCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as IFoto;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
  
  public crearUnaFoto(foto: IFoto) {
    const docId = this.docIdProyectoService.docIdProyecto
    this.fotoCollection.doc(docId).set(foto)
    .then(()=>{
      console.log("Foto creado Satisfactoriamente");
    })
    .catch((error)=>{console.error("error al crear la Foto",error)})
    return docId;
  }
  public obtenFotos(): Observable<IFoto[]> {
    return this.fotos$
  }
  public obtenUnaFoto(docId: string) {
    this.fotoDocument = this.firestore.collection('fotos').doc(docId);
    return this.fotoDocument.valueChanges();
  }

  public actualizaUnaFoto(fotoDataId: IFoto): void {

    this.fotoCollection.doc('').set(fotoDataId).then(function () {
      console.log("Document successfully updated!");
    }).catch(function (error) {
      console.error("Error updating document: ", error);
    });
  }
  public eliminaMemoriaDescriptiva(idUbigeo: string): void {
    this.fotoCollection.doc(idUbigeo).delete().then(function () {
      console.log("Document successfully deleted!");
    }).catch(function (error) {
      console.error("Error removing document: ", error);
    });
  }

  
  

}
