import { Component, OnInit, ViewChild } from '@angular/core';

import { UbigeoService } from '../ubigeoService';
import { Observable } from 'rxjs';
import { IUbigeo } from '../editor/editor.component';
import { MatTable } from '@angular/material/table';

import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
export interface UsersData {
  name: string;
  id: number;
};
const ELEMENT_DATA: UsersData[] = [
  {id: 1560608769632, name: 'Artificial Intelligence'},
  {id: 1560608796014, name: 'Machine Learning'},
  {id: 1560608787815, name: 'Robotic Process Automation'},
  {id: 1560608805101, name: 'Blockchain'}
];

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent   {

  displayedColumns: string[] = ['id', 'name', 'action'];
  dataSource = ELEMENT_DATA;
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  ubigeosData$:Observable<IUbigeo[]> = this.ubigeoService.obtenUbigeos()

  constructor(
    private ubigeoService: UbigeoService,
    public dialog: MatDialog
    ) { }

  eliminarUbigeo(id){
    this.ubigeoService.eliminaUbigeo(id);

  }
  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }else if(result.event == 'Update'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  };
  addRowData(row_obj){
    var d = new Date();
    this.dataSource.push({
      id:d.getTime(),
      name:row_obj.name
    });
    this.table.renderRows();
    
  }
  updateRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.name = row_obj.name;
      }
      return true;
    });
  }
  deleteRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      return value.id != row_obj.id;
    });
  }

 
}
