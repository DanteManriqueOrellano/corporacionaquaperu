import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, mergeMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { SharedGeneralidadService } from 'src/app/core/shared-generalidad.service';
import { IProyectoGeneralidadesForm } from 'src/app/proyecto-generalidad/proyecto-generalidad-container/proyecto-generalidad-root/proyecto-generalidad-root.component';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  
  public generalidadData:IProyectoGeneralidadesForm = {
    generalidad:{alias_proyecto:'',cliente:'',modalidad_ejecucion:'',nombre_proyecto:'',plazo_ejecucion:'',sist_contratacion:'',snip:''},
    antecedente_intervencion:{detalle_intervencion:''},
    colindante:{este:'',norte:'',oeste:'',sur:''},
    vias_accesos:[],
    historial_documentario:{anio_priorizacion:'',fecha_aprobacion:'',inf_tecnico_nro:'',rep_und_ejecutora:'',rep_und_evaluadora:'',rep_und_formuladora:''},
    instituciones_educativas:[],
    ubigeo_seleccionado:{departamento:'',provincia:'',distrito:'',cacerios:[],centros_poblados:[],anexos:[],barrios:[]}
  };
  constructor(
    private breakpointObserver: BreakpointObserver,
    private route:ActivatedRoute,
    private webApiGeneralidad:SharedGeneralidadService
    ) {}
  ngOnInit(){
    this.route.paramMap.pipe(
      map(
        (param)=>param.get('id')),
      mergeMap(
        (id:string)=>{return this.webApiGeneralidad.obtenerGeneralidad(id)}
      )
    ).subscribe((generalidadData:IProyectoGeneralidadesForm)=>{
      this.generalidadData = generalidadData

    })
      
    
  }
  cargado(){
    console.log(this.generalidadData)
  }


}
