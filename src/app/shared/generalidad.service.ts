import { Injectable } from '@angular/core';
import { IGeneralidadRoot } from '../generalidad/generalidad-root-form/generalidad-root-form.component';

@Injectable({
  providedIn: 'root'
})
export class GeneralidadService {

  constructor() { }
}
/*
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
    "alias_proyecto": "aasd",
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
    "inf_tec_nro": "asd",
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
    "anexos_select": "asd",
    "cacerios_select": "asd",
    "depa_select": "asd",
    "dist_select": "asd",
    "prov_select": "asd"
  },
  "vias_accesos1": {
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