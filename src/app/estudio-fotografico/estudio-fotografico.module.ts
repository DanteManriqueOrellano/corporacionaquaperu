import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudioFotograficoRoutingModule } from './estudio-fotografico-routing.module';
import { FotoComponent } from './fotos/foto/foto.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FotografiaRootComponent } from './fotografia-root/fotografia-root.component';
import { FotosComponent } from './fotos/fotos.component';
import { FotosDialogComponent } from './fotos-dialog/fotos-dialog.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [FotoComponent, FotografiaRootComponent, FotosComponent, FotosDialogComponent],
  imports: [
    CommonModule,
    EstudioFotograficoRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
  ],
  entryComponents: [
    FotosDialogComponent
  ],
  exports:[FotoComponent, FotografiaRootComponent, FotosComponent]
})
export class EstudioFotograficoModule { }
