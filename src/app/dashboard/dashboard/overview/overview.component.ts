import { Component, OnInit, Input } from '@angular/core';
import { IProyecto } from 'src/app/home/home.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {

  @Input()
  public dataUnProyecto:IProyecto
  constructor() { }

}
