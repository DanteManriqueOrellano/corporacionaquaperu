import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

export interface IProyecto {
  nombre_proyecto:string

}  
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }
  private proyectosDocuments$: BehaviorSubject<IProyecto[]> = new BehaviorSubject(data)
  public listarProyectos(){
    return this.proyectosDocuments$.asObservable();
  }
  

}
export const data:IProyecto[] = [
  {
    nombre_proyecto:"primer proyecto"
  },
  {
    nombre_proyecto:"segundo proyecto"
  }
]
  