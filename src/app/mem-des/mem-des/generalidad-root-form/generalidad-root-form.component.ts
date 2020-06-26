import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IGeneralidad } from './generalidad/generalidad.component';
import { IHist_doc } from './hist-doc/hist-doc.component';
import { IUbigeo_seleccionado } from 'src/app/ubigeo/seleccionado/seleccionado.component';
import { IColindante } from './colindante/colindante.component';
import { IAntecedente_intervencion } from './antecedente-intervencion/antecedente-intervencion.component';
import { IVias_Accesos } from './vias-accesos/vias-accesos.component';
import { IInsts_edus } from './insts-edus/insts-edus.component';
import { NgxRootFormComponent, DataInput, Controls, subformComponentProviders } from 'ngx-sub-form';
import { FormControl, FormArray } from '@angular/forms';

import { IPoblacion } from './poblacion-root-form/poblacion-root-form.component';
import { IComSan } from './coms-sans-root-form/com-san/com-san.component';

export interface IGeneralidadRoot{
  generalidad:IGeneralidad;
  hist_doc:IHist_doc;
  ubigeo_selecionado:IUbigeo_seleccionado;
  colindante:IColindante;
  antecedente_intervencion:IAntecedente_intervencion;
  vias_accesos:IVias_Accesos;
  insts_edus:IInsts_edus;
  /*
  agregando el componente "componente sanitario"
  cada localidad puede tener muchos componentes sanitarios
  */
  compsSans:IComSan[];
  
  
  /*
  agregando el componte poblacion, cada localidad tiene una sola caracteristica
  de poblacion 
  */ 
  poblacion:IPoblacion

}
@Component({
  selector: 'app-generalidad-root-form',
  templateUrl: './generalidad-root-form.component.html',
  styleUrls: ['./generalidad-root-form.component.css'],
  providers:subformComponentProviders(GeneralidadRootFormComponent)
})
export class GeneralidadRootFormComponent  extends NgxRootFormComponent<IGeneralidadRoot> {

  @DataInput()
  @Input('generalidadData')
  dataInput: Required<IGeneralidadRoot>;
  
  @Output('generalidadDataUpdated')
  dataOutput: EventEmitter<IGeneralidadRoot> = new EventEmitter();
  protected getFormControls(): Controls<IGeneralidadRoot> {
    
    return {
      antecedente_intervencion: new FormControl(),
      colindante: new FormControl(),
      generalidad: new FormControl(),
      hist_doc: new FormControl(),
      insts_edus: new FormControl(),
      ubigeo_selecionado: new FormControl(),
      vias_accesos: new FormControl(),
      compsSans:new FormArray([]),
      poblacion: new FormControl()
    }
  }
  agregarComponenteSanitario(){
    this.formGroupControls.compsSans.push(new FormControl())
  }

}
