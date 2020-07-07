import { Txt, Ol, Item, Cell } from 'pdfmake-wrapper';
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
  /*funcion que me permite simular un OL de una lista
  ejemplo:
  new Ol([
      [
          item({title:'uno ',detail:''}),
          [
            new Ol([
              
              item({title:'uno uno',detail:'joder'}),

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

  ])
     
   
  */
  export function OrderingList(x: {title:string,detail:string}[],  separator?:string | [string,string]){
    let data = [];
    for (let index = 0; index < x.length ; index++) {
      data.push(item({title:x[index].title, detail:x[index].detail}))
    }
    return  new Ol(data).separator(separator) ;
  }

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