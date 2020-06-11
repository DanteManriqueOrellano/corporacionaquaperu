import { Component, AfterViewInit } from '@angular/core';
import { subformComponentProviders, NullableObject } from 'ngx-sub-form';
import { Observable, of } from 'rxjs';
import { IDepartamento } from '../departamento-form/IDepartamento';

import { map, switchMap } from 'rxjs/operators';

import { ActivatedRoute } from '@angular/router';
import { UbigeoService } from 'src/app/shared/ubigeo.service';

@Component({
  selector: 'app-ubigeo-container',
  templateUrl: './ubigeo-container.component.html',
  styleUrls: ['./ubigeo-container.component.css'],
  providers: subformComponentProviders(UbigeoContainerComponent)
})
export class UbigeoContainerComponent {

  constructor(
    private ubigeoService: UbigeoService,
    private route: ActivatedRoute,

  ) { }
  public ubigeo$:Observable<IDepartamento[]> = this.ubigeoService.ListarUbigeos()
  

  /*public ubigeo$: Observable<NullableObject<IDepartamento>> = this.route.paramMap.pipe(
    map(params => {
      const id = params.get('id');
      return id
    }),
    switchMap(id => {
      if (id === 'nuevo' || !id) {
        return of(null);
      }
      this.apiUbigeo.id = id
      return this.apiUbigeo.obtenerUnUbigeo(id)
    }

    ),
    map((ubigeo) => ubigeo ? ubigeo : this.ubigeoVacio())

  )*/

  private ubigeoVacio(): NullableObject<IDepartamento> {

    return {
      nombre_dep: null,
      provincias: [{ nombre_provincia: null, distritos: [] }]
    };
  }
  public upsertListing(ubigeo: IDepartamento): void {
  
    this.ubigeoService.actualizaUbigeo(ubigeo,this.ubigeoService.id);

  }

  public eliminaUbigeoOutput($evnt): void {

    this.ubigeoService.eliminarUnUbigeo(this.ubigeoService.id)
  }

  public crearUbigeoOutput(departamento: IDepartamento): void {
    this.ubigeoService.crearUbigeo(departamento)
  }


}
