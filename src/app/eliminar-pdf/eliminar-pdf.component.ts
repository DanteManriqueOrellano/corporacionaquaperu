import { Component, OnInit, IterableDiffers } from '@angular/core';
import { Observable } from 'rxjs';
import { PdfMakeWrapper, Txt, Ol, Ul, Item, Table, Toc, TocItem, Columns, Cell } from 'pdfmake-wrapper';
import { IOl, IItem, IText } from 'pdfmake-wrapper/lib/interfaces';
import { element } from 'protractor';



@Component({
  selector: 'app-eliminar-pdf',
  templateUrl: './eliminar-pdf.component.html',
  styleUrls: ['./eliminar-pdf.component.css']
})
export class EliminarPDFComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  generarMemoriaDescriptiva() {
    const pdf = new PdfMakeWrapper()

    pdf.header('This is a header');
    pdf.footer('This is a footer');

    pdf.add(

      new Ol([
        [
          item({title:'uno ',detail:''}),
          [
            new Ol([
              /** */
              item({title:'uno uno',detail:'joder'}),
              /** */
              item({title:'uno dos',detail:''}),
                            
              [
                item({title:'uno tres',detail:'detalle uno tres'}),
                [
                    OrderingList([{title:'uno tres uno',detail:'el detalle'}], ["1.3.",'.']).end,
                ]
              ],
              
              [
                new Item({text:'uno cuatro'}).end
              ]
              
            ]).separator(['1.','.']) .end,
            
          ],  
          pdf.ln(1)       

        ],
        
        [
          new Item({text:'cuatro'}).end,
          [
            new Ol([
              [
                new Item({text:'uno uno'}).end,
                [
                  new Ol([
                    new Item({text:'uno uno uno'}).end,
                    
                    [
                    new Item({text:'uno uno dos'}).end,
                      new Ol([
                        new Item({text:'uno uno dos uno'}).end,
                      ]).end
                    ]

                  ]).end
                ]
              ],
              [
                new Item({text:'uno dos'}).end,

              ],
              
              
              [
                new Item({text:'uno tres'}).end,
                [
                  new Ol([
                    new Item ({text:'uno tres uno'}).end,
                    new Item ({text:'uno tres dos'}).end
                  ]).end
                ]
              ],
              
              [
                new Item({text:'uno cuatro'}).end
              ]
              
            ]).end,
            
          ]         

        ],
        
        
        
      ]).bold().end
    )
    pdf.add( OrderingList([{title:'cuatro',detail:'detalle cuatro'},{title:'cinco',detail:'detalle cinco'}]).start(4).bold().end)

  /*  pdf.add(
      new Table(table(dataAlumno,['nombre','apellido','edad'])).end
    )*/
    pdf.add(
      new Table(table(data,['nombre','apellido'])).end
    )

    pdf.add(
      new Table(table(dataAlumno,['nombre','apellido','edad'])).end
    )
    
 

 
    
    
    pdf.create().open()
    

  }


}

export function item(x:{title:string,detail:string}){
  const data = 
    
    [
      new Item({text:x.title}).end,
      [
        new Txt(x.detail).alignment('justify') .end
      ]
    ]
  return data
}

export function OrderingList(x: {title:string,detail:string}[],  separator?:string | [string,string]){
  let data = [];
  for (let index = 0; index < x.length ; index++) {
    data.push(item({title:x[index].title, detail:x[index].detail}))
  }
  return  new Ol(data).separator(separator) ;
}


export const data = [
  {nombre:'dante',apellido:'manrique'},
  {nombre:'augusto',apellido:'colonia'},
  {nombre:'cesar',apellido:'ramoz'},
]
export const dataAlumno = [
  {nombre:'dante',apellido:'manrique',edad:10},
  {nombre:'colonia',apellido:'augusto',edad:20},
  {nombre:'cesar',apellido:'ramoz',edad:30},
]
export function table(data:any[],nombreColumnas:string[]){
  let tb = []
  data.map((valor) => {
    let fila = nombreColumnas.map((elemento) => {
      return valor[elemento]
    })
    tb.push(fila)
  })
      
  let cabecera = nombreColumnas.map((value)=>{
    const celda =  new Cell( new Txt(value).bold() .end ).fillColor('red').end;
    return celda

  })
  tb.push(cabecera)
  
  
return tb.reverse()

}