import { Component } from '@angular/core';
import { NgxSubFormComponent, Controls } from 'ngx-sub-form';
import { IProyecto, HomeService } from '../home.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends NgxSubFormComponent<IProyecto> {

  tipoProyectos: string[] = this.homeService.tipoProyectos;
  constructor(
    private homeService: HomeService,
    private route: Router,
  ) {
    super();
  }

  protected getFormControls(): Controls<IProyecto> {
    return {
      alias: new FormControl(),
      cliente: new FormControl(),
      fecha: new FormControl(),
      nombre_proyecto: new FormControl(),
      tipo_proyecto: new FormControl(),
      funcionalidadesInstaladas: new FormControl([]),
      localidadesSeleccionadas: new FormControl(),
      altitud: new FormControl(),
      coordenadas_utm: new FormControl(),
    }
  }

  public nuevoProyecto() {
    const docId = this.homeService.crearUnProyecto(this.formGroupValues)
    this.route.navigate(['proyecto', docId, 'overview'])


  }
}
