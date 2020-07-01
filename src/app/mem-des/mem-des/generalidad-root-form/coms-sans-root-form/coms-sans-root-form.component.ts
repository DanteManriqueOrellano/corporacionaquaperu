import { Component, OnInit } from '@angular/core';
import { NgxSubFormComponent, subformComponentProviders, Controls } from 'ngx-sub-form';
import { IComSan } from './com-san/com-san.component';
import { FormArray, FormControl } from '@angular/forms';
import { MemDesService } from 'src/app/mem-des/mem.des.service';

export interface IComSanForm {
  comsSans:IComSan[]
}
@Component({
  selector: 'app-coms-sans-root-form',
  templateUrl: './coms-sans-root-form.component.html',
  styleUrls: ['./coms-sans-root-form.component.css'],
  providers:subformComponentProviders(ComsSansRootFormComponent)
})
export class ComsSansRootFormComponent extends NgxSubFormComponent<IComSanForm> implements OnInit {

  public nombreLocalidad  = this.memDesService.localidadesSeleccionadas
 
  constructor(
    private memDesService:MemDesService,
    ){super();}
 
    ngOnInit(): void {
    const array = this.memDesService.localidadesSeleccionadas
    array.forEach(element => {
      console.log(element)
      this.agregarComponenteSanitario()
      
    });
    
  }

  protected getFormControls():Controls<IComSanForm>{
    return{
      comsSans: new FormArray([])
    }
  }

  agregarComponenteSanitario(){
    this.formGroupControls.comsSans.push(new FormControl())
  }
  quitarComponenteSanitario(i = 0){
    this.formGroupControls.comsSans.removeAt(i)
  }


}
