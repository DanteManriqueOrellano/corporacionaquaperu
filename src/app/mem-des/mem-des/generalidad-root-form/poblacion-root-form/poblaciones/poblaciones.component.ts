import { Component, OnInit } from '@angular/core';
import { NgxSubFormComponent, subformComponentProviders, Controls } from 'ngx-sub-form';
import { FormArray, FormControl } from '@angular/forms';
import { IPoblacion } from './poblacion/poblacion.component';
import { MemDesService } from 'src/app/mem-des/mem.des.service';
import { DocIdProyectoService } from 'src/app/shared/docIdProyecto.service';
import { HomeService } from 'src/app/home/home.service';
import { Observable } from 'rxjs';

export interface IPoblacionForm {
  poblaciones:IPoblacion[]
}
@Component({
  selector: 'app-poblaciones',
  templateUrl: './poblaciones.component.html',
  styleUrls: ['./poblaciones.component.css'],
  providers:subformComponentProviders(PoblacionesComponent)
})
export class PoblacionesComponent extends NgxSubFormComponent<IPoblacionForm> implements OnInit {

  constructor(private docIdProyecto:DocIdProyectoService,private homeService:HomeService ){
    super();

  }
  
  public proyecto:Observable<any>  = this.homeService.obtenUnProyecto(this.docIdProyecto.docIdProyecto)
  i:number
  ngOnInit():void{
   this.homeService.obtenUnProyecto(this.docIdProyecto.docIdProyecto).subscribe((val)=>{
    for(let i =0; i<val.localidadesSeleccionadas['centros_poblados'].length;i++){
      this.agregarPoblacion()
    } 
   })
  

  }
  protected getFormControls():Controls<IPoblacionForm>{
    return {
      poblaciones: new FormArray([])
    }
  }

  public agregarPoblacion(){
    this.formGroupControls.poblaciones.push(new FormControl())
  }
  public eliminarPoblacion(i){
    this.formGroupControls.poblaciones.removeAt(i)

  }


}
