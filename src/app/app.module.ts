import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {AngularFireStorageModule, BUCKET } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import 'firebase/storage'
import { CoreModule } from './core/core.module';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PdfMakeWrapper } from "pdfmake-wrapper";
import pdfFonts from '../assets/custom-fonts.js';

import { EliminarPDFComponent } from './eliminar-pdf/eliminar-pdf.component';

import { FileUploadModule } from '@iplab/ngx-file-upload';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EstudioFotograficoModule } from './estudio-fotografico/estudio-fotografico.module';

// Configuring custom fonts
PdfMakeWrapper.setFonts(pdfFonts, {
  nilam: {
      normal: 'Nilam.ttf',
      bold: 'Nilam-Bold.ttf',
      italics: 'Nilam.ttf',
      bolditalics: 'Nilam.ttf'
  },
  poppins:{
    normal:'Poppins-ExtraLight.otf',//
    bold:'Poppins-Regular.otf',
    italics:'Poppins-Light.otf',
    bolditalics:'Poppins-Light.otf'
  }
 

});

PdfMakeWrapper.useFont('poppins');

@NgModule({
  declarations: [
    AppComponent,
    EliminarPDFComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    FileUploadModule,
    CoreModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NgbModule,
    EstudioFotograficoModule,

  ],
  providers: [
    { provide: BUCKET, useValue: 'corporacionaquaperu.appspot.com' }
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
