import { Component, OnInit } from '@angular/core';
import { HomeService, IProyecto } from 'src/app/shared/home.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  listaProyectos$:Observable<IProyecto[]> = this.homeService.listarProyectos()
  constructor(private homeService:HomeService) { }


}
