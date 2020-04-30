import { Component, OnInit } from '@angular/core';
import { IVia_acceso } from 'src/app/models/IVia_acceso';
import { NgxSubFormComponent, Controls } from 'ngx-sub-form';
import { FormArray, FormControl } from '@angular/forms';
interface IAccesos {
  accesos:IVia_acceso[]
}
@Component({
  selector: 'app-accesos',
  templateUrl: './accesos.component.html',
  styleUrls: ['./accesos.component.css']
})
export class AccesosComponent extends NgxSubFormComponent<IVia_acceso[],IAccesos> implements OnInit {

  protected getFormControls():Controls<IAccesos>{
    return {
      accesos: new FormArray([]),
    }
  }
  public createFormArrayControl(
    key: 'accesos',
    value: IVia_acceso,
  ): FormControl {
    switch (key) {
      // note: the following string is type safe based on your form properties!
      case 'accesos':
        return new FormControl();
      default:
        return new FormControl(value);
    }
  }
  eliminarAcceso(index){
    this.formGroupControls.accesos.removeAt(index);

  }

  agregarAcceso(){
    this.formGroupControls.accesos.push(
      this.createFormArrayControl('accesos',{
        distancia:'',
        nombre_lugar:'',
        tiempo:'',
        tipo_via:''
      })
    )

  }
  ngOnInit(): void {
  }

}
