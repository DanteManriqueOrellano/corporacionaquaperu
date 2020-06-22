import { Component, OnInit, Input, AfterViewInit, AfterContentInit } from '@angular/core';
import { IProyecto } from 'src/app/home/home.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menulateral',
  templateUrl: './menulateral.component.html',
  styleUrls: ['./menulateral.component.css']
})
export class MenulateralComponent {

  @Input()
  public dataUnProyecto:IProyecto;

  constructor() { }

 

}
