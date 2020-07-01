import { Component, OnInit, Input, AfterViewInit, AfterContentInit } from '@angular/core';
import { IProyecto } from 'src/app/home/home.service';
import { Observable } from 'rxjs';
import { PdfMakeWrapper,Txt, Ol, Ul, Item } from 'pdfmake-wrapper';
@Component({
  selector: 'app-menulateral',
  templateUrl: './menulateral.component.html',
  styleUrls: ['./menulateral.component.css']
})
export class MenulateralComponent {

  @Input()
  public dataUnProyecto:IProyecto;

  constructor() { }
  //margin([0,30,0,0]) [izquierda,arriba,derecha,abajo]
  
 

}
