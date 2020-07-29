import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgxSubFormComponent, subformComponentProviders, Controls } from 'ngx-sub-form';
import { IFotografia } from '../estudio-fotografico.service';
import { FormArray, FormControl } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from 'src/app/ubigeo/dialog-box/dialog-box.component';
import { FotosDialogComponent } from '../fotos-dialog/fotos-dialog.component';
import { Observable } from 'rxjs';
import { filter } from 'lodash';

interface IFotografiaForm {
  fotografias: IFotografia[]
}
@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css'],
  providers: subformComponentProviders(FotosComponent)
})
export class FotosComponent extends NgxSubFormComponent<IFotografiaForm> {

  

  protected getFormControls(): Controls<IFotografiaForm> {
    return {
      fotografias: new FormArray([])
    }
  }

  agregarUnaFotografia() {
    this.formGroupControls.fotografias.push(new FormControl())
  }
  eliminarUnaFotografia(i) {
    this.formGroupControls.fotografias.removeAt(i)
  }
  
}
export function readFileAsDataURL(file: Blob): Observable<string> {
  return Observable.create((observable) => {
    const fileReader = new FileReader;

    fileReader.onload = (() => {
      observable.next(fileReader.result);
      observable.complete();
    });

    fileReader.readAsDataURL(file);
  });
}