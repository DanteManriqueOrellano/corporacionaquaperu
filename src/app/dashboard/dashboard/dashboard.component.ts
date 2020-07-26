import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, mergeMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService, IProyectoDocId, IProyecto } from 'src/app/home/home.service';
import { async } from '@angular/core/testing';
import { DocIdProyectoService } from 'src/app/shared/docIdProyecto.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  
 
  listaProyectos$:Observable<IProyectoDocId[]>=this.homeservice.obtenProyectos()
  
  dataUnProyecto$:Observable<IProyectoDocId> = this.route.paramMap.pipe(
    map(
      (param)=>{
        const docId = param.get('docId')
        this.docIdService.docIdProyecto = docId
        return param.get('docId')}),
    mergeMap(
      (docId:string)=>{return this.homeservice.obtenUnProyecto(docId)}
    )
   );


  
constructor(
  private breakpointObserver: BreakpointObserver,
  private route:ActivatedRoute,
  private homeservice:HomeService,
  private docIdService: DocIdProyectoService,
  private router:Router,
  
) {}
ngOnInit():void{
  //si tiene todas las funcionalidades instaladas entonces
  //envia a estadisticas
  this.dataUnProyecto$.subscribe((proyecto:IProyecto)=>{
    if (proyecto.funcionalidadesInstaladas.length > 0){
      this.router.navigate([''])
    }else{//si no tiene funcionalidades instaladas enivar a funcionalidades
      this.router.navigate(['proyecto',this.docIdService.docIdProyecto,'overview','funcionalidades'])

    }
  })



  
}
proyectoGeneralidadesOutput($event){
  console.log($event)
  

}

}
