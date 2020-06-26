import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IGeneralidadRoot } from './generalidad-root-form/generalidad-root-form.component';

@Component({
  selector: 'app-mem-des',
  templateUrl: './mem-des.component.html',
  styleUrls: ['./mem-des.component.css']
})
export class MemDesComponent  {

  generalidadData$:Observable<IGeneralidadRoot>


  generalidadDataUpdated($event){}
}
