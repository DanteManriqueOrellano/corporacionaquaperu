import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DialogBoxUploadComponent } from '../dialog-box-upload/dialog-box-upload.component';

export interface Fotos {
  docIdProyecto:string,
  descripcion:string,
  ubicacion:String,
  imageUrl: string;
}
const ELEMENT_DATA1: Fotos[] = [
  { docIdProyecto: '1560608769632', descripcion: 'Artificial Intelligence',ubicacion:'cover1', imageUrl: 'https://github.com/SiddAjmera.png',},
  { docIdProyecto: '1560608796014', descripcion: 'Machine Learning',ubicacion:'cover2', imageUrl: 'https://github.com/SiddAjmera.png' },
  { docIdProyecto: '1560608787815', descripcion: 'Robotic Process Automation',ubicacion:'encabezado', imageUrl: 'https://github.com/SiddAjmera.png' },
  { docIdProyecto: '1560608805101', descripcion: 'Blockchain',ubicacion:'pie_pagina', imageUrl: 'https://github.com/SiddAjmera.png' },
  
];
interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
//export class FileUploadComponent  {
export class FileUploadComponent {
  displayedColumns: string[] = ['id', 'name', 'imageUrl', 'action'];
  dataSource = ELEMENT_DATA1;
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  selectedValue: string;
  selectedCar: string;

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  cars: Car[] = [
    {value: 'volvo', viewValue: 'Volvo'},
    {value: 'saab', viewValue: 'Saab'},
    {value: 'mercedes', viewValue: 'Mercedes'}
  ];
  constructor(public dialog: MatDialog) { }

  public isHovering: boolean;
  files: File[] = []

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
  openDialog(accion,obj) {
    console.log(obj)
    obj.accion = accion;
    
    const dialogRef = this.dialog.open(DialogBoxUploadComponent, {
      //width: '90%',
      //height: '100%',
      data:obj,

      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if(result === undefined) return null
      if(result.event == 'Agregar'){
        this.addRowData(result.data);
      }else if(result.event == 'Actualizar'){
        this.updateRowData(result.data);
      }else if(result.event == 'Eliminar'){
        this.deleteRowData(result.data);
      }
    });
  };
  addRowData(row_obj){
   console.log(row_obj)
   
  }
  updateRowData(row_obj){
   //console.log(row_obj)
   
  }
  deleteRowData(row_obj){
   
   // this.table.renderRows();
  }

}
