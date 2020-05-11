import { Component, EventEmitter, Input, Output} from '@angular/core';
import {  Controls, subformComponentProviders, NgxRootFormComponent, DataInput } from 'ngx-sub-form';
import { IGeneralidad } from '../generalidad-form/IGeneralidad';
import { FormControl, FormArray } from '@angular/forms';
import { IHistorial_Documentario } from '../historial-documentario-form/IHistorial-documentario';
import { IUbigeo_Seleccionado } from '../ubigeo-seleccionado-form/IUbigeo-seleccionado';
import { IVia_Acceso } from '../via-acceso-form/IVia-acceso';
import { IIntitucion_educativa } from '../institucion-educativa-form/IInstitucion-educativa';
import { IAntecedenteIntervencion } from '../antecedente-intervencion-form/IAntecedente-intervencion';

interface IProyectoGeneralidadesForm{
  generalidad:IGeneralidad;
  historial_documentario:IHistorial_Documentario;
  ubigeo_solicitado:IUbigeo_Seleccionado;
  vias_accesos:IVia_Acceso[];
  instituciones_educativas:IIntitucion_educativa[]
  antecedentes_intervencion:IAntecedenteIntervencion[]
}
@Component({
  selector: 'app-proyecto-generalidad-form',
  templateUrl: './proyecto-generalidad-root.component.html',
  styleUrls: ['./proyecto-generalidad-root.component.css'],
  providers: subformComponentProviders(ProyectoGeneralidadRootComponent)
  })
export class ProyectoGeneralidadRootComponent extends NgxRootFormComponent<IProyectoGeneralidadesForm>   {
  
  @DataInput()
  @Input('ubigeo')
  public dataInput: Required<IProyectoGeneralidadesForm>  | null | undefined;

  @Output('listingUpdated')
  public dataOutput: EventEmitter<IProyectoGeneralidadesForm> = new EventEmitter();

  

  protected getFormControls():Controls<IProyectoGeneralidadesForm>{
    return{
      generalidad: new FormControl(),
      historial_documentario: new FormControl(),
      ubigeo_solicitado: new FormControl(),
      vias_accesos: new FormArray([]),
      antecedentes_intervencion: new FormArray([]),
      instituciones_educativas: new FormArray([])
    }
  }

 
}
