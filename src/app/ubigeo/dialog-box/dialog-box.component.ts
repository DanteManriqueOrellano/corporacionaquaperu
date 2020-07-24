import { Component, Optional, Inject, InjectionToken, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IUbigeo } from '../editor/editor.component';

import { UbigeoService } from '../ubigeoService';
 interface IUbigeoId extends IUbigeo {
  docId: number;
};

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

  action:string;
  local_data:any;
  
  ubigeosData$:any; 

  constructor(
    private ubigeoService:UbigeoService,
    public dialogRef: MatDialogRef<DialogBoxComponent>,
  
    @Optional() @Inject(MAT_DIALOG_DATA) public data: IUbigeoId)   {
  
    this.local_data = {...data};
    this.action = this.local_data.action;
  }
  ngOnInit(){
    if( this.data.docId === undefined) return null
    this.ubigeosData$ = this.ubigeoService.obtenUnUbigeoPorDocId( this.data.docId.toString())
    
  }

  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});
  }

  closeDialog(){

    this.dialogRef.close({event:'Cancelar'});
  }

}
