import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { MemDesService, IMemoriaDescriptiva } from '../mem.des.service';
import { DocidService } from 'src/app/shared/docid.service';
import { IGeneralidadRoot } from './generalidad-root-form/generalidad-root-form.component';

@Component({
  selector: 'app-mem-des',
  templateUrl: './mem-des.component.html',
  styleUrls: ['./mem-des.component.css']
})
export class MemDesComponent {


  generalidadData$: Observable<IMemoriaDescriptiva> = this.memDesService.obtenUnaMemoriaDescriptiva(this.docIdService.DocId)
  constructor(
    private memDesService: MemDesService,
    private docIdService: DocidService
  ) {

  }

  generalidadDataUpdated(event:IGeneralidadRoot) {
    console.log(event)
    
   }
}
