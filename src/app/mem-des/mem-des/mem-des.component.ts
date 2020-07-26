import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { MemDesService, IMemoriaDescriptiva } from '../mem.des.service';
import { DocIdProyectoService } from 'src/app/shared/docIdProyecto.service';
import { IGeneralidadRoot } from './generalidad-root-form/generalidad-root-form.component';

@Component({
  selector: 'app-mem-des',
  templateUrl: './mem-des.component.html',
  styleUrls: ['./mem-des.component.css']
})
export class MemDesComponent {


  generalidadData$: Observable<IMemoriaDescriptiva> = this.memDesService.obtenUnaMemoriaDescriptiva(this.docIdService.docIdProyecto)
  constructor(
    private memDesService: MemDesService,
    private docIdService: DocIdProyectoService,
    
  ) {

  }

  generalidadDataUpdated(event:IGeneralidadRoot) {
    const docIdProyecto = this.docIdService.docIdProyecto
    const men = {...event,docIdProyecto}

   this.memDesService.crearUnaMemoriaDescriptiva(men)
    
   }
}
