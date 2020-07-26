import { Component, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
