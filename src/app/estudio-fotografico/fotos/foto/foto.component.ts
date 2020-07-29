import { Component, OnInit, Input } from '@angular/core';
import { NgxSubFormComponent, Controls, subformComponentProviders } from 'ngx-sub-form';
import { IFotografia } from '../../estudio-fotografico.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap, finalize,map } from 'rxjs/operators';
import { AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css'],
  providers:subformComponentProviders(FotoComponent)
})
export class FotoComponent extends NgxSubFormComponent<IFotografia>   {

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
  
}
export function readFileAsDataURL(file: Blob): Observable<string>
{
	return Observable.create((observable) => {
		const fileReader = new FileReader;

		fileReader.onload = (() => {
			observable.next(fileReader.result);
			observable.complete();
		});

		fileReader.readAsDataURL(file);
	});
}

