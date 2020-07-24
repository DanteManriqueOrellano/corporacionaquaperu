import { Component, OnInit, ViewChild } from '@angular/core';

import { UbigeoService } from '../ubigeoService';
import { Observable } from 'rxjs';
import { IUbigeo } from '../editor/editor.component';
import { MatTable } from '@angular/material/table';

import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent   {
 
  ubigeosData$:Observable<IUbigeo[]> = this.ubigeoService.obtenUbigeos()
  displayedColumns: string[] = ['nombre', 'accion'];
  dataSource = this.ubigeosData$ ;
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  
  
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
    //  width: '90%',
      height: '50%',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
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
    this.ubigeoService.agregaUbigeo(row_obj.ubigeo)
    this.table.renderRows();
  }
  updateRowData(row_obj){
    console.log(row_obj.docId)

    
  }
  deleteRowData(row_obj){
    this.ubigeoService.eliminaUbigeo(row_obj.docId)
    this.table.renderRows();
  }

 
}
