import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IGeneralidadRoot } from '../generalidad-root-form/generalidad-root-form.component';

@Component({
  selector: 'app-generalidad',
  templateUrl: './generalidad.component.html',
  styleUrls: ['./generalidad.component.css']
})
export class GeneralidadComponent implements OnInit {
  generalidadData$:Observable<IGeneralidadRoot>
  constructor() { }

  ngOnInit(): void {
  }

}
