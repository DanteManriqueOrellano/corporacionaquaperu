import { Component, OnInit } from '@angular/core';
import { SharedGeneralidadService } from 'src/app/core/shared-generalidad.service';

@Component({
  selector: 'app-proyecto-generalidad-container',
  templateUrl: './proyecto-generalidad-container.component.html',
  styleUrls: ['./proyecto-generalidad-container.component.css']
})
export class ProyectoGeneralidadContainerComponent implements OnInit {

  
  constructor(
    private webApiGeneralidad: SharedGeneralidadService,
   // private route: Activate
    ) { }

  ngOnInit(): void {
  }
  proyectoGeneralidadesOutput($event){
   
    const id =  this.webApiGeneralidad.crearGeneralidadToDocument($event)
    

  }
  
}
