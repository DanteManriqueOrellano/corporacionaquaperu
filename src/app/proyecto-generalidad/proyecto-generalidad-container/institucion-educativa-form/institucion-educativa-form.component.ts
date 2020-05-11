import { Component } from '@angular/core';
import { NgxSubFormComponent, Controls,subformComponentProviders } from 'ngx-sub-form';
import { IIntitucion_educativa } from './IInstitucion-educativa';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-institucion-educativa-form',
  templateUrl: './institucion-educativa-form.component.html',
  styleUrls: ['./institucion-educativa-form.component.css'],
  providers: subformComponentProviders(InstitucionEducativaFormComponent)
})
export class InstitucionEducativaFormComponent extends NgxSubFormComponent<IIntitucion_educativa> {

  protected getFormControls():Controls<IIntitucion_educativa>{
    return {
      codigo_modular:new FormControl(),
      direccion:new FormControl(),
      gestion_dependencia:new FormControl(),
      modalidad:new FormControl(),
      niveles:new FormControl(),
      nombre:new FormControl(),
      nro_alumnos:new FormControl(),
      nro_profesores:new FormControl(),
    }
  }

 

}
