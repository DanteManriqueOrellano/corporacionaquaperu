import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import { IGeneralidadDataId, GeneralidadService } from '../../generalidad.service';

@Component({
  selector: 'app-generalidadc',
  templateUrl: './generalidadc.component.html',
  styleUrls: ['./generalidadc.component.css']
})
export class GeneralidadcComponent {

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
