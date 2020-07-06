import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropZoneDirective } from './drop-zone.directive';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FormatFileSizePipe } from './format-file-size.pipe';
import { UploadTaskComponent } from './upload-task/upload-task.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';



@NgModule({
  declarations: [DropZoneDirective, FileUploadComponent, FormatFileSizePipe, UploadTaskComponent,ProgressbarComponent],
  imports: [
    CommonModule
  ]
})
export class UploadModule { }
