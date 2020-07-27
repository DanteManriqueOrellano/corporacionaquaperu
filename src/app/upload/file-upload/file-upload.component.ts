import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxUploadComponent } from '../dialog-box-upload/dialog-box-upload.component';
import { UploadService, IFoto } from '../upload.service';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
//export class FileUploadComponent  {
export class FileUploadComponent {
  public imagePath;
  imgURL: any;
  public message: string;
  displayedColumns: string[] = ['idlocal', 'descripcion', 'foto', 'action'];
  dataSource: IFoto[] = [];

  @ViewChild(MatTable, { static: true }) table: MatTable<IFoto>;

  selectedValue: string;
  selectedCar: string;
  galeriaFotografica$//:Observable<IFoto[]> = this.uploadService.obtenFotos() 

  constructor(
    public dialog: MatDialog,
    private uploadService: UploadService
  ) { }

  public isHovering: boolean;
  files: File[] = [
  ]

  public toggleHover(event: boolean) {
    this.isHovering = event
  }
  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i))
    }
  }
  public isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes
  }
  openDialog(accion, obj) {
    console.log(obj)
    obj.accion = accion;

    const dialogRef = this.dialog.open(DialogBoxUploadComponent, {
      //width: '90%',
      //height: '100%',
      data: obj,


    });

    dialogRef.afterClosed().subscribe(result => {

      if (result === undefined) return null
      if (result.event == 'Agregar') {
        this.addRowData(result.data);
      } else if (result.event == 'Actualizar') {
        this.updateRowData(result.data);
      } else if (result.event == 'Eliminar') {
        this.deleteRowData(result.data);
      }
    });
  };
  addRowData(row_obj) {
    this.preview_add(row_obj.archivo)
  }
  updateRowData(nuevo_obj) {
    this.preview_update(nuevo_obj.archivo)
  }
  deleteRowData(row_obj) {

    this.dataSource = this.dataSource.filter((value, key) => {
      return value.idlocal != row_obj.idlocal;
    });
  }

  preview_add(files) {
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;


    reader.onload = (_event) => {
      this.imgURL = reader.result;



      this.uploadService.image_local.push({ uno: reader.result })

      var d = new Date();
      this.dataSource = this.dataSource.concat(
        {
          docIdProyecto: '',
          descripcion: 'joder tio',
          archivo: this.imgURL,
          accion: '',
          dowloadUrl: '',
          path: '',
          idlocal: d.getTime().toString()

        })

    }
    reader.readAsDataURL(files[0]);


  }
  preview_update(files) {


    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.onload = (_event) => {
      this.imgURL = reader.result;

      let updateItem = this.dataSource.find(this.findIndexToUpdate, files.idlocal);

      if (updateItem === undefined) {
        return
      } else {
        let index = this.dataSource.indexOf(updateItem);

        this.dataSource[index].archivo = this.imgURL;
      }

    }
    reader.readAsDataURL(files[0]);
  }
  findIndexToUpdate(newItem) {
    return newItem.id === this;
  }

}


