import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropZoneDirective } from './drop-zone.directive';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FormatFileSizePipe } from './format-file-size.pipe';
import { UploadTaskComponent } from './upload-task/upload-task.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { MatTableModule } from '@angular/material/table';
import { DialogBoxUploadComponent } from './dialog-box-upload/dialog-box-upload.component';
import { DialogBoxComponent } from '../ubigeo/dialog-box/dialog-box.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { UploadEditorComponent } from './upload-editor/upload-editor.component';


@NgModule({
  declarations: [DropZoneDirective, FileUploadComponent, FormatFileSizePipe, UploadTaskComponent,ProgressbarComponent, DialogBoxUploadComponent, UploadEditorComponent ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    
  ],
  entryComponents:[
    DialogBoxComponent
  ],
})
export class UploadModule { }
