import { Injectable } from '@angular/core';
import { IGeneralidadRoot } from '../generalidad/generalidad-root-form/generalidad-root-form.component';
import { BehaviorSubject, Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

export interface IGeneralidadDataId extends IGeneralidadRoot {
  id:string
 
}
@Injectable({
  providedIn: 'root'
})
export class GeneralidadService {
  
  public generalidades: Observable<IGeneralidadDataId[]>;
  private generalidadCollection: AngularFirestoreCollection<IGeneralidadDataId>;
  private generalidadDocument: AngularFirestoreDocument<IGeneralidadDataId>

  //public generalidadData$:BehaviorSubject<IGeneralidadRoot> = new BehaviorSubject(generalidadData)

  constructor(private firestore: AngularFirestore) {
    this.generalidadCollection = this.firestore.collection<IGeneralidadDataId>('ubigeos');
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
  public crearUnaGeneralidad(generalidad: IGeneralidadDataId) {
    return this.generalidadCollection.doc(generalidad.id).set(generalidad)
    .then(()=>{
      console.log("Documento creado Satisfactoriamente");
    })
    .catch((error)=>{console.error("error al crear el domumento",error)})
  }
  public obtenGeneralidades(): Observable<IGeneralidadDataId[]> {
    return this.generalidades
  }
  public obtenUnaGeneralidad(docId: string) {
    this.generalidadDocument = this.firestore.collection('ubigeos').doc(docId);
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

export const generalidadData:IGeneralidadRoot = null
/*{
  "antecedente_intervencion": {
    "detalle_intervencion": "asd"
  },
  "colindante": {
    "este": "asd",
    "norte": "asd",
    "oeste": "asd",
    "sur": "asd"
  },
  "generalidad": {
    "alias_proyecto": "asd",
    "cliente": "asd",
    "modalidad_ejecucion": "asd",
    "nombre_proyecto": "asd",
    "plazo_ejecucion": "asd",
    "sist_contratacion": "asd",
    "snip": "asd"
  },
  "hist_doc": {
    "anio_priorizacion": "asd",
    "fecha_aprovacion": "asd",
    "inf_tec_nro": "asdasd",
    "resp_und_ejecutora": "asd",
    "resp_und_evaluadora": "asd",
    "resp_und_formuladora": "asd"
  },
  "insts_edus": {
    "insts_edus": [
      {
        "codigo_modular": "asd",
        "direccion": "asd",
        "gestion_dependencia": "asd",
        "nivel_modalidad": "asd",
        "nombre": "asd",
        "nro_alumnos": "asd",
        "nro_profes": "asd",
        "nro_secciones": "asd"
      }
    ]
  },
  "ubigeo_select": {
    "centros_poblados_select": [
      {
        "nombre": "UCHPA",
        "id": 0
      },
      {
        "nombre": "pira",
        "id": 1
      },
      {
        "nombre": "vicos",
        "id": 0
      }
    ],
    "cacerios_select": [
      {
        "nombre": "PONGOR",
        "id": 0
      },
      {
        "nombre": "marian",
        "id": 1
      }
    ],
    "depa_select": "ANCASH",
    "dist_select": "INDEPENDENCIA",
    "prov_select": "HUARAZ"
  },
  "vias_accesos": {
    "vias_accesos": [
      {
        "distancia": "asd",
        "localidad": "asd",
        "tiempo": "asd",
        "tipo_via": "asd",
        "transporte": "asd"
      }
    ]
  }
}*/