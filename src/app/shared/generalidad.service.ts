import { Injectable } from '@angular/core';
import { IGeneralidadRoot } from '../generalidad/generalidad-root-form/generalidad-root-form.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralidadService {

  public generalidadData$:BehaviorSubject<IGeneralidadRoot> = new BehaviorSubject(generalidadData)

  constructor() { }
}

export const generalidadData:IGeneralidadRoot = 
{
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
}