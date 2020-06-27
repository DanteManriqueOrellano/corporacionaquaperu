import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { MemDesService, IMemoriaDescriptiva } from '../mem.des.service';
import { DocidService } from 'src/app/shared/docid.service';

@Component({
  selector: 'app-mem-des',
  templateUrl: './mem-des.component.html',
  styleUrls: ['./mem-des.component.css']
})
export class MemDesComponent {


  generalidadData$: Observable<IMemoriaDescriptiva> = this.memDes.obtenUnaMemoriaDescriptiva(this.docIdService.DocId)
  constructor(
    private memDes: MemDesService,
    private docIdService: DocidService
  ) {

  }

  generalidadDataUpdated($event) {
    console.log($event)
   }
}
