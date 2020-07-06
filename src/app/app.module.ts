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

// Configuring custom fonts
PdfMakeWrapper.setFonts(pdfFonts, {
  roboto: {
      normal: 'Roboto-Light.ttf',
      bold: 'Roboto-Bold.ttf',
      italics: 'Roboto-Italic.ttf',
      bolditalics: 'Roboto-BoldItalic.ttf'
  }
});

PdfMakeWrapper.useFont('roboto');

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
   
    NgbModule

  ],
  providers: [
    { provide: BUCKET, useValue: 'corporacionaquaperu.appspot.com' }
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
