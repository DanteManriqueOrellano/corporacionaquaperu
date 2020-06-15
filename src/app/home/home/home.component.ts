import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


import { IGeneralidadDataId, GeneralidadService } from 'src/app/shared/generalidad.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  //lista todos los documentos
  listaProyectos$:Observable<IGeneralidadDataId[]> = this.generalidadService.obtenGeneralidades()
  
  constructor(
    private generalidadService:GeneralidadService,
    
    ) { }


}
