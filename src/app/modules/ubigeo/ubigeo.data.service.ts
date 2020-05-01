import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IDepartamento } from './IDepartamento';
import { IProvincia } from './IProvincia';

import * as firebase from 'firebase/app';
import 'firebase/firestore';


export interface DepartamentoId extends IDepartamento { id: string; }
@Injectable({
  providedIn: 'root'
})
export class UbigeoDataService {
  tmpDepartamentos:IDepartamento[];

  private departamentoCollection: AngularFirestoreCollection<IDepartamento>;
  private provinciaCollection: AngularFirestoreCollection<IProvincia>;

  departamentos: Observable<DepartamentoId[]>;
  constructor(private readonly afs: AngularFirestore) {

    this.departamentoCollection = this.afs.collection<IDepartamento>('departamentos');

    this.departamentos = this.departamentoCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as IDepartamento;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  agregarUbigeoDepartamento(data: IDepartamento) {
    this.departamentoCollection.add(data).then(e => console.log(e))

  }
  actulizaProvincia(provincia) {
    var washingtonRef = this.afs.collection("departamentos").doc('8AD8RfNcCLQDOzmvmGuQ');
    washingtonRef.update
    (
      {
      provincias: firebase.firestore.FieldValue.arrayUnion(provincia)
      }
    )
    


  }
  agregarProvincia(docId: string, data:any) {


    data =  {
      "nombre_provincia": 'bien',
      "distritos":
        [
          {
            "nombre_distrito": 'bien',
            "caserios":
              [
                {
                  "nombre_cacerio": 'bien',
                  "centros_poblados":
                    [
                      {
                        "nombre_centro_poblado": 'bien',
                        "anexos":
                          [
                            {
                              "nombre_anexo": 'bien',
                              "barrios":
                                [
                                  { "nombre_barrio": 'bien' }
                                ]
                            }
                          ]
                      }
                    ]
                }
              ]
          }
        ]
    }
    var washingtonRef = this.afs.collection("departamentos").doc('yTD2QxBZPT8BDYRDB1JI');
    washingtonRef.update({
      provincias: firebase.firestore.FieldValue.arrayUnion
        (
         data
        )
    })
  }

  agregarDistrito(docId: string) {// yTD2QxBZPT8BDYRDB1JI
    var washingtonRef = this.afs.collection("departamentos").doc('yTD2QxBZPT8BDYRDB1JI');
    washingtonRef.update(
     
      {
      distritos: firebase.firestore.FieldValue.arrayUnion
        (
          {
            "nombre_distrito": 'bien',
            "caserios":
              [
                {
                  "nombre_cacerio": 'bien',
                  "centros_poblados":
                    [
                      {
                        "nombre_centro_poblado": 'bien',
                        "anexos":
                          [
                            {
                              "nombre_anexo": 'bien',
                              "barrios":
                                [
                                  { "nombre_barrio": 'bien' }
                                ]
                            }
                          ]
                      }
                    ]
                }
              ]
          }
        )
    }
    )
  }
  agregarCacerio(docId: string) {
    var washingtonRef = this.afs.collection("departamentos").doc(docId);
    washingtonRef.update({
      caserios: firebase.firestore.FieldValue.arrayUnion
        (
          {
            "nombre_cacerio": 'bien',
            "centros_poblados":
              [
                {
                  "nombre_centro_poblado": 'bien',
                  "anexos":
                    [
                      {
                        "nombre_anexo": 'bien',
                        "barrios":
                          [
                            { "nombre_barrio": 'bien' }
                          ]
                      }
                    ]
                }
              ]
          }
        )
    })
  }
  agregarCentroPoblado(docId: string) {
    var washingtonRef = this.afs.collection("departamentos").doc(docId);
    washingtonRef.update({
      centros_poblados: firebase.firestore.FieldValue.arrayUnion
        (
          {
            "nombre_centro_poblado": 'bien',
            "anexos":
              [
                {
                  "nombre_anexo": 'bien',
                  "barrios":
                    [
                      { "nombre_barrio": 'bien' }
                    ]
                }
              ]
          }
        )
    })
  }
  agregarAnexo(docId: string) {
    var washingtonRef = this.afs.collection("departamentos").doc(docId);
    washingtonRef.update({
      anexos: firebase.firestore.FieldValue.arrayUnion
        (
          {
            "nombre_anexo": 'bien',
            "barrios":
              [
                { "nombre_barrio": 'bien' }
              ]
          }
        )
    })
  }
  agregarBarrio(docId: string) {
    var washingtonRef = this.afs.collection("departamentos").doc(docId);
    washingtonRef.update({
      barrios: firebase.firestore.FieldValue.arrayUnion
        (
          { "nombre_barrio": 'bien' }
        )
    })
  }
  unosole() {
    var washingtonRef = this.afs.collection("departamentos").doc('frvaLPWyQMwYJyi0E20T');
    washingtonRef.update(
     
      {
        nombre_departamento:'departamento modificado',
        provincias:[{'provincia0':'provincia0'},{'provincia0':'provincia0'}]
      }


    )
  }
  joder:any
  nuevo:any
  modificaUnaProvincia(){
    var washingtonRef = this.afs.collection("departamentos").doc('frvaLPWyQMwYJyi0E20T');
    
    
    

  }


}

