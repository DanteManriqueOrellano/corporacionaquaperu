import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { IGeneralidadDataId } from 'src/app/shared/generalidad.service';

@Component({
  selector: 'app-listaproyecto',
  templateUrl: './listaproyecto.component.html',
  styleUrls: ['./listaproyecto.component.css']
})
export class ListaproyectoComponent {

  @Input('listaProyectos')
  listaProyectos:IGeneralidadDataId[]


}
