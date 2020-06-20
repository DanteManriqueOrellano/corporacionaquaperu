import { Component, OnInit } from '@angular/core';
import { HomeService, IProyectoDocId } from '../home.service';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-proyectos',
  templateUrl: './lista-proyectos.component.html',
  styleUrls: ['./lista-proyectos.component.css']
})
export class ListaProyectosComponent implements OnInit {
  proyectos$:Observable<IProyectoDocId[]> = this.homeService.obtenProyectos(); 

  constructor(
    private homeService:HomeService,
    private route:Router 
    ) { }

  goTo(docId:string){    
    
    this.route.navigate(['proyecto',docId,'overview'])
  }
  ngOnInit(){

  }


}
