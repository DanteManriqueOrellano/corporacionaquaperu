import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgxRootFormComponent, DataInput, Controls, subformComponentProviders } from 'ngx-sub-form';
import { IFotografia } from '../estudio-fotografico.service';
import { FormArray, FormControl } from '@angular/forms';
export interface IEstudioFotografico{
  fotos: IFotografia[]
}

@Component({
  selector: 'app-fotografia-root',
  templateUrl: './fotografia-root.component.html',
  styleUrls: ['./fotografia-root.component.css'],
  providers:subformComponentProviders(FotografiaRootComponent )
})
export class FotografiaRootComponent extends NgxRootFormComponent<IEstudioFotografico>  {


  @DataInput()
  @Input('fotografiaInput')
  dataInput: Required<IEstudioFotografico>;
  @Output('fotografiaOutput')
  dataOutput: EventEmitter<IEstudioFotografico> = new EventEmitter();;

  protected getFormControls():Controls<IEstudioFotografico>{
    return {
       fotos: new FormControl()
    }
  }
  fotografiaOutput($event){
    console.log($event)
  }

}
