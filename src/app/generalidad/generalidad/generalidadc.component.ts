import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IGeneralidadRoot } from '../generalidad-root-form/generalidad-root-form.component';
import { IDepartamento } from 'src/app/ubigeo/departamento-form/IDepartamento';
import { UbigeoService } from 'src/app/shared/ubigeo.service';

@Component({
  selector: 'app-generalidadc',
  templateUrl: './generalidadc.component.html',
  styleUrls: ['./generalidadc.component.css']
})
export class GeneralidadCComponent  {
  generalidadData$:Observable<IGeneralidadRoot>
  
  constructor() { }

}
