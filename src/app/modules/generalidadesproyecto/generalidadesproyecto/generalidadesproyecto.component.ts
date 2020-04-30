import { Component, OnInit } from '@angular/core';
import { IDepartamento } from '../../ubigeo/IDepartamento';
import { IProvincia } from '../../ubigeo/IProvincia';
import { IDistrito } from '../../ubigeo/IDistrito';
import { ICacerio } from '../../ubigeo/ICacerio';
import { ICentro_Poblado } from '../../ubigeo/ICentro_Poblado';
import { IAnexo } from '../../ubigeo/IAnexo';
import { IBarrio } from '../../ubigeo/IBarrio';

/*interface IUbigeoForm {
  departamento:IDepartamento;
  provincia:IProvincia;
  distrito:IDistrito;
  cacerio:ICacerio;
  centro_poblado:ICentro_Poblado;
  anexo:IAnexo;
  barrio:IBarrio;
}*/
@Component({
  selector: 'app-generalidadesproyecto',
  templateUrl: './generalidadesproyecto.component.html',
  styleUrls: ['./generalidadesproyecto.component.css']
})
export class GeneralidadesproyectoComponent  implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
