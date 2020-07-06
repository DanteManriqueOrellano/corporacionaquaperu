import { Component, OnInit } from '@angular/core';
import { AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
 
  public isHovering:boolean;
  files : File[] = []

  public toggleHover(event:boolean){
    this.isHovering = event
  }
  onDrop(files:FileList){
    for(let i = 0; i<files.length;i++){
      this.files.push(files.item(i))
    }
  }
  public isActive(snapshot){
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes
  }
}
