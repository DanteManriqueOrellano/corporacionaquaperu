import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { IProyecto } from 'src/app/shared/home.service';
import { IDepartamento } from 'src/app/ubigeo/departamento-form/IDepartamento';

@Component({
  selector: 'app-listaproyecto',
  templateUrl: './listaproyecto.component.html',
  styleUrls: ['./listaproyecto.component.css']
})
export class ListaproyectoComponent implements OnInit {

  @Input('listaProyectos')
  listaProyectos:IProyecto[]
  constructor() { }

  ngOnInit(): void {
  }

}
