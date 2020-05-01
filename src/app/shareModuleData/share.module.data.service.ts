import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IDepartamento } from '../modules/ubigeo/IDepartamento';
import { UbigeoDataService } from '../modules/ubigeo/ubigeo.data.service';
@Injectable({
  providedIn: 'root'
})
export class ShareModuleDataService {
  
  
  constructor(
    private readonly ubigeoService: UbigeoDataService
    ) { }
  
  listaDepartamentos(){
    return this.ubigeoService.departamentos

  }

   

 
}
