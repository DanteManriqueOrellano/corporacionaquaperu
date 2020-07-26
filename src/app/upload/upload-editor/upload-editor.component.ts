import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgxRootFormComponent, Controls, DataInput, subformComponentProviders } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';
import { IFoto } from '../upload.service';



@Component({
  selector: 'app-upload-editor',
  templateUrl: './upload-editor.component.html',
  styleUrls: ['./upload-editor.component.css'],
  providers:subformComponentProviders(UploadEditorComponent)
})
export class UploadEditorComponent extends NgxRootFormComponent <IFoto> {
  public imagePath;
  imgURL: any;
  public message: string;

  @DataInput()
  @Input('ubigeosData')
  dataInput: Required<IFoto>;
  @Output('ubigeoDataUpdate')
  dataOutput: EventEmitter<IFoto> = new EventEmitter();
  
  protected getFormControls(): Controls<IFoto> {
    return {
      docIdProyecto: new FormControl(),
      descripcion: new FormControl(),
      accion: new FormControl(),
      dowloadUrl: new FormControl(),
      path: new FormControl(),
      archivo:new FormControl()
    }
  }
  
  preview(files) {
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
      this.formGroupControls.archivo.setValue(files)
     // console.log(this.imgURL)
     
    }
  }


}
