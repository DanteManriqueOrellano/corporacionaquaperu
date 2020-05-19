import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedGeneralidadService, IProyectoGeneralidadesIdForm } from 'src/app/core/shared-generalidad.service';
import { map, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NullableObject } from 'ngx-sub-form';

@Component({
  selector: 'app-overview-container',
  templateUrl: './overview-container.component.html',
  styleUrls: ['./overview-container.component.css']
})
export class OverviewContainerComponent implements OnInit {

 
  constructor(
    private route:ActivatedRoute,
    private webApiGeneralidad:SharedGeneralidadService
    ) { }

  ngOnInit(): void {
    
  }
  public generalidadData1$:Observable<IProyectoGeneralidadesIdForm> = this.route.paramMap.pipe(
    map(
      (param)=>param.get('id')),
    mergeMap(
      (id:string)=>{return this.webApiGeneralidad.obtenerGeneralidadId(id)}
    ) 
   )
    
  

}

