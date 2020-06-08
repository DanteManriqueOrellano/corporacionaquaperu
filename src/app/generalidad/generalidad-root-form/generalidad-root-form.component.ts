import { Component,EventEmitter, Input } from '@angular/core';
import { NgxRootFormComponent, DataInput,Controls,subformComponentProviders } from 'ngx-sub-form';
import { IGeneralidad } from './generalidad/generalidad.component';
import { IHist_doc } from './hist-doc/hist-doc.component';
import { IUbigeo_seleccionado } from './ubigeo-select/ubigeo-select.component';
import { IColindante } from './colindante/colindante.component';
import { IAntecedente_intervencion } from './antecedente-intervencion/antecedente-intervencion.component';
import { IVia_Acceso } from './via-acceso/via-acceso.component';
import { IInst_Edu } from './inst-edu/inst-edu.component';
import { FormControl } from '@angular/forms';

export interface IGeneralidadRoot{
  generalidad:IGeneralidad;
  hist_doc:IHist_doc;
  ubigeo_select:IUbigeo_seleccionado;
  colindante:IColindante;
  antecedente_intervencion:IAntecedente_intervencion;
  vias_accesos:IVia_Acceso;
  insts_edus:IInst_Edu;

}

@Component({
  selector: 'app-generalidad-root-form',
  templateUrl: './generalidad-root-form.component.html',
  styleUrls: ['./generalidad-root-form.component.css'],
  providers:subformComponentProviders(GeneralidadRootFormComponent)
})
export class GeneralidadRootFormComponent extends NgxRootFormComponent<IGeneralidadRoot>  {
  
  @DataInput()
  @Input('generalidadData')
  dataInput: Required<IGeneralidadRoot>;
  dataOutput: EventEmitter<IGeneralidadRoot>;
  protected getFormControls(): Controls<IGeneralidadRoot> {
    return {
      antecedente_intervencion: new FormControl(),
      colindante: new FormControl(),
      generalidad: new FormControl(),
      hist_doc: new FormControl(),
      insts_edus: new FormControl(),
      ubigeo_select: new FormControl(),
      vias_accesos: new FormControl(),
    }
  }
  


}
