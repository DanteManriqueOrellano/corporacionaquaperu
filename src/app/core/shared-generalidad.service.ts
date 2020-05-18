import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { IProyectoGeneralidadesForm } from '../proyecto-generalidad/proyecto-generalidad-container/proyecto-generalidad-root/proyecto-generalidad-root.component';

@Injectable({
  providedIn: 'root'
})
export class SharedGeneralidadService {

  public generalidades: Observable<IProyectoGeneralidadesForm[]>;
 
  private generalidadCollection: AngularFirestoreCollection<IProyectoGeneralidadesForm>;
  private departamentoDocument: AngularFirestoreDocument<IProyectoGeneralidadesForm>

  constructor(private readonly afs: AngularFirestore) {
    this.generalidadCollection = this.afs.collection<IProyectoGeneralidadesForm>('generalidades');
    this.generalidades = this.generalidadCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as IProyectoGeneralidadesForm;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  public crearGeneralidadToDocument(data: IProyectoGeneralidadesForm):string{
    const id = this.afs.createId();
    this.afs.collection('generalidades').doc(id).set(data);
    return id

  }

  public crearGeneralidad(departamento: IProyectoGeneralidadesForm) {
    return this.generalidadCollection.add(departamento)
  }
  public ListarGeneralidades(): Observable<IProyectoGeneralidadesForm[]> {
    return this.generalidades
  }
  public obtenerGeneralidad(docId: string) {
    this.departamentoDocument = this.afs.collection('generalildades').doc(docId);
    return this.departamentoDocument.valueChanges();
  }

  public actualizaUbigeo(ubigeo: IProyectoGeneralidadesForm, docId: string): void {

    this.generalidadCollection.doc(docId).set(ubigeo).then(function () {
      console.log("Document successfully updated!");
    }).catch(function (error) {
      console.error("Error updating document: ", error);
    });
  }
  public eliminarUnUbigeo(idUbigeo: string): void {
    this.generalidadCollection.doc(idUbigeo).delete().then(function () {
      console.log("Document successfully deleted!");
    }).catch(function (error) {
      console.error("Error removing document: ", error);
    });
  }
}
