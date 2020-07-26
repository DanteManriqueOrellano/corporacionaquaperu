import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

export interface IFuncionalidad {
  nombreFuncionalidad:string;
  id:string;
}
export interface IProyecto {
  nombre_proyecto:string;
  alias:string;
  cliente:string;
  fecha:string;
  tipo_proyecto:string;
  funcionalidadesInstaladas:IFuncionalidad[];
  localidadesSeleccionadas:string[];
  coordenadas_utm:string;
  altitud:string;
}
export interface IProyectoDocId extends IProyecto {
  docId:string;
}
const tipoProyectos:string[]=["Saneamiento"];

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private proyectos: Observable<IProyectoDocId[]>;
  private proyectoCollection: AngularFirestoreCollection<IProyectoDocId>;
  private proyectoDocument: AngularFirestoreDocument<IProyectoDocId>
  public tipoProyectos:string[] = tipoProyectos;

  constructor(private firestore: AngularFirestore) {
    this.proyectoCollection = this.firestore.collection<IProyectoDocId>('proyectos');
    this.proyectos = this.proyectoCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as IProyectoDocId;
        const docId = a.payload.doc.id;
        return { docId, ...data };
      }))
    );
  }
  private crearUUID(){
    return this.firestore.createId()
  }
  public crearUnProyecto(proyecto: IProyecto) {
    const uid = this.crearUUID()
    this.proyectoCollection.doc(uid).set(proyecto)
    .then(()=>{
      console.log("Documento creado Satisfactoriamente");
    })
    .catch((error)=>{console.error("error al crear el domumento",error)})
    return uid;
  }
  public obtenProyectos(): Observable<IProyectoDocId[]> {
    return this.proyectos
  }
  public obtenUnProyecto(docId: string) {
    this.proyectoDocument = this.firestore.collection('proyectos').doc(docId);
    return this.proyectoDocument.valueChanges();
  }

  public actualizaUnProyecto(proyectoDataId: IProyectoDocId): void {

    this.proyectoCollection.doc(proyectoDataId.docId).set(proyectoDataId).then(function () {
      console.log("Document successfully updated!");
    }).catch(function (error) {
      console.error("Error updating document: ", error);
    });
  }
  public eliminaUnProyecto(docId: string): void {
    this.proyectoCollection.doc(docId).delete().then(function () {
      console.log("Document successfully deleted!");
    }).catch(function (error) {
      console.error("Error removing document: ", error);
    });
  }
}
