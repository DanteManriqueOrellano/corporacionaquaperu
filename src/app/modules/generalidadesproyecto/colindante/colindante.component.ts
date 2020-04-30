import { Component, OnInit } from '@angular/core';
import { NgxSubFormComponent, Controls } from 'ngx-sub-form';
import { IColindante } from 'src/app/models/IColindantes';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-colindante',
  templateUrl: './colindante.component.html',
  styleUrls: ['./colindante.component.css']
})
export class ColindanteComponent extends NgxSubFormComponent<IColindante> implements OnInit {

  protected getFormControls():Controls<IColindante>{
    return {
      este: new FormControl(),
      oeste: new FormControl(),
      norte: new FormControl(),
      sur: new FormControl(),
    }
  }

  ngOnInit(): void {
  }

}
