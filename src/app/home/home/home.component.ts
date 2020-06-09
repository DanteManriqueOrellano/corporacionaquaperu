import { Component, OnInit } from '@angular/core';
import { HomeService, IProyecto } from 'src/app/shared/home.service';
import { Observable } from 'rxjs';
import { UbigeoService } from 'src/app/shared/ubigeo.service';
import { IDepartamento } from 'src/app/ubigeo/departamento-form/IDepartamento';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  listaProyectos$:Observable<IProyecto[]> = this.homeService.listarProyectos()
  
  constructor(
    private homeService:HomeService,
  
    ) { }


}
