import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { HomeService } from '../home/home.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  py:Observable<any>
  constructor(
    private homeService:HomeService,
    private route:ActivatedRoute,
    private afs:AngularFirestore
  ) { }
  
  public optenImagenPorIdProyecto(docIdProyecto){
    
   const joder = this.afs.collection('files', ref => ref.where('docIdUpload', '==', 1)).valueChanges();
   joder.subscribe((val)=>{console.log(val)})

  }

}
