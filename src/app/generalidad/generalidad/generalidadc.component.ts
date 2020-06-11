import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IGeneralidadRoot } from '../generalidad-root-form/generalidad-root-form.component';
import { IDepartamento } from 'src/app/ubigeo/departamento-form/IDepartamento';
import { UbigeoService } from 'src/app/shared/ubigeo.service';
import { GeneralidadService, IGeneralidadDataId } from 'src/app/shared/generalidad.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-generalidadc',
  templateUrl: './generalidadc.component.html',
  styleUrls: ['./generalidadc.component.css']
})
export class GeneralidadCComponent  {
  generalidadData$:Observable<IGeneralidadDataId> = this.generalidadService.obtenUnaGeneralidad('bSk7QJrAZTjWYDiI32cn')
  
  constructor(private generalidadService: GeneralidadService) { }
  
  public upsertGeneralidad(generalidad: IGeneralidadDataId): void {
    //actualiza si se esta editando / crea si es nuevo
    this.generalidadData$.subscribe((value)=>{
      if(value === null){// es nuevo

      }else{//actualiza

      }
    })
  }



}
