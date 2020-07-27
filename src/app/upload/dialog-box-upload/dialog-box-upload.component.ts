import { Component, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-box-upload',
  templateUrl: './dialog-box-upload.component.html',
  styleUrls: ['./dialog-box-upload.component.css']
})
export class DialogBoxUploadComponent  {

  ubigeosData:any
  accion:string;
  local_data:any;

  constructor(
    public dialogRef: MatDialogRef<DialogBoxUploadComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
      
        
    if (data.accion === "Agregar"){
      this.local_data = data;
      this.accion = this.local_data.accion;
    }else {
    
      this.ubigeosData = data;
      this.accion = this.ubigeosData.accion;
    }
  }

  doAction() {
 
    this.dialogRef.close({event:this.accion,data:this.ubigeosData});
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
  
  ubigeoDataUpdate($event){

 }

}
