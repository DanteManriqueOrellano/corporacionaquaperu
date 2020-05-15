import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyecto-poblacion-container',
  templateUrl: './proyecto-poblacion-container.component.html',
  styleUrls: ['./proyecto-poblacion-container.component.css']
})
export class ProyectoPoblacionContainerComponent  {

  poblacionOutput($event){
    console.log($event)
  }

}
