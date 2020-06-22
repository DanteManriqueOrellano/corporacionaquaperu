import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, mergeMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { HomeService, IProyectoDocId, IProyecto } from 'src/app/home/home.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  
  dataUnProyecto:IProyecto = {
    alias:"",
    cliente:"",
    fecha:"",
    nombre_proyecto:"",
    tipo_proyecto:"",
    funcionalidadesInstaladas:null,
  }; 
  listaProyectos$:Observable<IProyectoDocId[]>=this.homeservice.obtenProyectos()
  
  dataUnProyecto$:Observable<IProyecto> = this.route.paramMap.pipe(
    map(
      (param)=>param.get('docId')),
    mergeMap(
      (docId:string)=>{return this.homeservice.obtenUnProyecto(docId)}
    )
   );

   ngOnInit(){
     this.dataUnProyecto$.subscribe((proyecto:IProyecto)=>{
       this.dataUnProyecto = proyecto
     })
     /*this.generalidadService.obtenGeneralidades().subscribe((generalidad)=>{
       this.listaGeneralidad = generalidad
     })*/
   }



constructor(
  private breakpointObserver: BreakpointObserver,
  private route:ActivatedRoute,
  private homeservice:HomeService
  
) {}
proyectoGeneralidadesOutput($event){
  console.log($event)
  

}

}
