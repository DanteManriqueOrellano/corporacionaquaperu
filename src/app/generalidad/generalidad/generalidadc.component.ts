import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IGeneralidadRoot } from '../generalidad-root-form/generalidad-root-form.component';

@Component({
  selector: 'app-generalidadc',
  templateUrl: './generalidadc.component.html',
  styleUrls: ['./generalidadc.component.css']
})
export class GeneralidadCComponent implements OnInit {
  generalidadData$:Observable<IGeneralidadRoot>
  constructor() { }

  ngOnInit(): void {
  }

}
