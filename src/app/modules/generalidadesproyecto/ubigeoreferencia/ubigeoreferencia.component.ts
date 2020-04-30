import { Component, OnInit } from '@angular/core';
import { NgxSubFormComponent, Controls } from 'ngx-sub-form';
import { IUbigeoReferencia } from 'src/app/models/IUbigeoReferencia';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-ubigeoreferencia',
  templateUrl: './ubigeoreferencia.component.html',
  styleUrls: ['./ubigeoreferencia.component.css']
})
export class UbigeoreferenciaComponent extends NgxSubFormComponent<IUbigeoReferencia> implements OnInit {

  protected getFormControls():Controls<IUbigeoReferencia>{
    return{
      altitud: new FormControl(),
      latitud: new FormControl(),
    }
  }

  ngOnInit(): void {
  }

}
