import { Component, OnInit, Input } from '@angular/core';
import { AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { tap, finalize } from 'rxjs/operators';
import { UploadService } from '../upload.service';


@Component({
  selector: 'app-upload-task',
  templateUrl: './upload-task.component.html',
  styleUrls: ['./upload-task.component.css']
})
export class UploadTaskComponent implements OnInit {

  @Input()file:File;
  task: AngularFireUploadTask;
  percentage:Observable<number>;
  snapshot:Observable<any>
  downloadURL; 
  constructor(private storage:AngularFireStorage,private db:AngularFirestore,private uploadService:UploadService) { }

  ngOnInit(): void {
    this.startUpload()
  }
  startUpload(){
   

    const path = `test1/${Date.now()}_${this.file.name}`
    const ref = this.storage.ref(path);
    this.task = this.storage.upload(path,this.file);
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges().pipe(
      tap(console.log),
      finalize(async()=>{
        this.downloadURL = await ref.getDownloadURL().toPromise();
        this.db.collection('files').add({downloadUrl:this.downloadURL,path,'docIdUpload':2})
      })
    )
    
    
  }
  isActive(snapshot){
    return snapshot.state === "running"
    && snapshot.bytesTransferred < snapshot.totalBytes;
  }
 

}
