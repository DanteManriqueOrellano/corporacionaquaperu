import { Component, Optional, Inject, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IUbigeo } from '../editor/editor.component';

import { UbigeoService } from '../ubigeoService';

import { DataInput, Controls, NgxRootFormComponent } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';
 

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent  {

  ubigeosData:any
  accion:string;
  local_data:any;
  
  
  constructor(
    private ubigeoService:UbigeoService,
    public dialogRef: MatDialogRef<DialogBoxComponent>,
  
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any)   {
      
  
     
    if (data.accion === "Agregar"){
        this.local_data = data;
        this.accion = this.local_data.accion;
      }else {
        this.ubigeosData = data;
        this.accion = this.ubigeosData.accion;
      }
  }
 

  doAction(){
    
    this.dialogRef.close({event:this.accion,data:this.ubigeosData});
  }

  closeDialog(){

    this.dialogRef.close({event:'Cancelar'});
  }
  ubigeoDataUpdate($event){
    console.log($event)
  }

}
