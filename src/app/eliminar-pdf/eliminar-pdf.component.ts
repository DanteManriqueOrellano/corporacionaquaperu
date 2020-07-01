import { Component, OnInit, IterableDiffers } from '@angular/core';
import { Observable } from 'rxjs';
import { PdfMakeWrapper,Txt, Ol, Ul, Item } from 'pdfmake-wrapper';

@Component({
  selector: 'app-eliminar-pdf',
  templateUrl: './eliminar-pdf.component.html',
  styleUrls: ['./eliminar-pdf.component.css']
})
export class EliminarPDFComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  generarMemoriaDescriptiva(){
    pdf.header('This is a header');
    pdf.footer('This is a footer');

    this.tituloNivel0()

    pdf.create().open()
  
  }
  
tituloNivel0(){
  
  pdf.add(
    new Ol([
      new Item({text:'INDICE'}).end
    ]).end
  )
  
}

}
export const pdf = new PdfMakeWrapper()