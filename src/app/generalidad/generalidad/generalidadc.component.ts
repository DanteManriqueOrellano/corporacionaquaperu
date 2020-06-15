import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IGeneralidadRoot } from '../generalidad-root-form/generalidad-root-form.component';
import { GeneralidadService, IGeneralidadDataId } from 'src/app/shared/generalidad.service';
import { map } from 'rxjs/operators';
import { identifierModuleUrl } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generalidadc',
  templateUrl: './generalidadc.component.html',
  styleUrls: ['./generalidadc.component.css']
})
export class GeneralidadCComponent  {
  
  generalidadData$:Observable<IGeneralidadDataId> = this.generalidadService.obtenUnaGeneralidad('bSk7QJrAZTjWYDiI32cn')
  
  constructor(
    private generalidadService: GeneralidadService,
    private router:Router
  ) { }
  
  public crearGeneralidad(generalidad: IGeneralidadDataId): void {

    const docId = this.generalidadService.crearUnaGeneralidad(generalidad)
    this.router.navigate(['proyecto',docId,'overview']);

  }
}
