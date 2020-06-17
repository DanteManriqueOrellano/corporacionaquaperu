import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, mergeMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { IGeneralidadRoot } from 'src/app/generalidad/generalidad-root-form/generalidad-root-form.component';
import { GeneralidadService } from 'src/app/shared/generalidad.service';
import { IGeneralidad } from 'src/app/generalidad/generalidad-root-form/generalidad/generalidad.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit   {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  
  alias:string = "";
  listaGeneralidad:IGeneralidadRoot[]=[];
  
  dataUnaGeneralidad$:Observable<IGeneralidadRoot> = this.route.paramMap.pipe(
    map(
      (param)=>param.get('docId')),
    mergeMap(
      (docId:string)=>{return this.generalidadService.obtenUnaGeneralidad(docId)}
    ) 
   )

   ngOnInit(){
     this.dataUnaGeneralidad$.subscribe((generalidad)=>{
       
       this.alias = generalidad.generalidad.alias_proyecto;
     })
     this.generalidadService.obtenGeneralidades().subscribe((generalidad)=>{
       this.listaGeneralidad = generalidad
     })
   }



constructor(
  private breakpointObserver: BreakpointObserver,
  private route:ActivatedRoute,
  private generalidadService:GeneralidadService
  
) {}
proyectoGeneralidadesOutput($event){
  console.log($event)
  

}


}
