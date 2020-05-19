import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, mergeMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { SharedGeneralidadService, IProyectoGeneralidadesIdForm } from 'src/app/core/shared-generalidad.service';
import { NgxRootFormComponent, DataInput, Controls } from 'ngx-sub-form';
import { IProyectoGeneralidadesForm } from 'src/app/proyecto-generalidad/proyecto-generalidad-container/proyecto-generalidad-root/proyecto-generalidad-root.component';

import { IGeneralidad } from 'src/app/proyecto-generalidad/proyecto-generalidad-container/generalidad-form/IGeneralidad';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent extends NgxRootFormComponent<IProyectoGeneralidadesForm ,IProyectoGeneralidadesIdForm> {
  
  
  @DataInput()

  @Input('generalidadData1')
  public dataInput: Required<IProyectoGeneralidadesForm> | null | undefined
 
  @Input('alias_proyecto')
  public alias_proyecto:Observable<IProyectoGeneralidadesIdForm>

  @Output('joder')
  public dataOutput: EventEmitter<IProyectoGeneralidadesForm> = new EventEmitter()

  protected getFormControls():Controls<IProyectoGeneralidadesIdForm>{
    return {
      antecedente_intervencion: new FormControl(),
      ubigeo_seleccionado: new FormControl(),
      colindante: new FormControl(),
      generalidad: new FormControl(),
      historial_documentario: new FormControl(),
      id: new FormControl(),
      instituciones_educativas: new FormControl(),
      vias_accesos: new FormControl(),

    }
  }
  alias_proyecto1:string=''
 /* public generalidadData1$:Observable<IProyectoGeneralidadesIdForm> =this.route.paramMap.pipe(
    map(
      (param)=>param.get('id')),
    mergeMap(
      (id:string)=>{return this.webApiGeneralidad.obtenerGeneralidadId(id)}
    )
  )*/
   

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  
  
  
  constructor(
    
    private breakpointObserver: BreakpointObserver,
    private route:ActivatedRoute,
    private webApiGeneralidad:SharedGeneralidadService
    ) {
      super();      
    }
  ngOnInit(){
    //this.generalidadData1$.subscribe((val)=>{
   //   this.alias_proyecto = val.generalidad.alias_proyecto
    //})
      
   // this.alias_proyecto.subscribe((val)=>{this.alias_proyecto1 = val.generalidad.alias_proyecto})
   console.log(this.dataInput)
  }
  go(){
    console.log(this.formGroupValues) 
  }

  


}
