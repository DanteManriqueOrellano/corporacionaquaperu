import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { IGeneralidadDataId } from 'src/app/shared/generalidad.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listaproyecto',
  templateUrl: './listaproyecto.component.html',
  styleUrls: ['./listaproyecto.component.css']
})
export class ListaproyectoComponent {

  constructor(private route:Router ){}

  @Input('listaProyectos')
  listaProyectos:IGeneralidadDataId[]

  goTo(docId:string){    
    this.route.navigate(['proyecto',docId,'overview'])
  }


}
