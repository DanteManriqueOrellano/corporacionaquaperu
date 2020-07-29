import { Component, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IFotografia } from '../estudio-fotografico.service';
import { NgxSubFormComponent,Controls, subformComponentProviders} from 'ngx-sub-form';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-fotos-dialog',
  templateUrl: './fotos-dialog.component.html',
  styleUrls: ['./fotos-dialog.component.css'],
  providers:subformComponentProviders(FotosDialogComponent)
  
})
export class FotosDialogComponent extends NgxSubFormComponent<IFotografia> {

  ubigeosData:any
  accion:string;
  local_data:any;

  constructor(
    public dialogRef: MatDialogRef<FotosDialogComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
      super()
      console.log(data)
      
      this.local_data = data;//{accion:agregar}
      this.accion = this.local_data.accion;//this.accion => Agregar
  }
  public imagePath;  
  public imgURL: any;
  public message: string;
  
  protected getFormControls():Controls<IFotografia>{
    return {
      downloadUrl: new FormControl(),
      path: new FormControl(),
      file: new FormControl(),
      descripcion: new FormControl(),
      idLocal:new FormControl(),
    }
  }
  fotografiaSeleccionada($event){
    const files = $event.target.files;
    var d = new Date();
    const path = `test1/${Date.now()}_${files[0].name}`
   
    this.formGroupControls.file.value = files[0];
    this.formGroupControls.idLocal.value = d.getTime();
    this.formGroupControls.path.value = path
    this.formGroupControls.downloadUrl.value='';
    /*el control de descripcion ya asiganada directamemte desde el formulario
    * faltaria downloadUrl, que será llenado al final, desde el componente "contenedor"
    */
    
   
      
    
    this.preview(files)

  }
  preview(fileList:FileList) {

    if (fileList.length === 0)
      return;

    var mimeType = fileList[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
    

    var reader = new FileReader();
    this.imagePath = fileList;
    reader.readAsDataURL(fileList[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
  
   
     
    }
  }

      doAction(){
        if(this.formGroupControls.idLocal.value !== null)
        {
          this.dialogRef.close({event:this.accion,data:this.formGroupValues});//{event:Agregar,data:}
         

        }else{
          this.dialogRef.close({event:this.accion,data:this.local_data});//{event:Agregar,data:}

        }
       
       
      }
    
      closeDialog(){
        this.dialogRef.close({event:'Cancelar'});
      }

}
