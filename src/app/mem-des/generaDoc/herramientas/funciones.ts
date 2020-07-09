import { Txt, Ol, Item, Cell } from 'pdfmake-wrapper';
import { NuevoComponent } from 'src/app/ubigeo/nuevo/nuevo.component';

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
  /*funcion que me permite simular un OL de una lista*/
  export function OrderingList(x: {title:string,detail:string}[],  separator?:string | [string,string]){
    let data = [];
    for (let index = 0; index < x.length ; index++) {
      data.push(item({title:x[index].title, detail:x[index].detail}))
    }
    return  new Ol(data).separator(separator) ;
  }
  /**funcion que me permite crear la tabla */

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
  export function tablev2(data:Object[],datatable:{nombres:string[],headerStyle?:{fontColor?:string,background?:string}}={nombres:[null],headerStyle:{fontColor:'',background:''}}){
   
    let tb = [];

    //a cada valor del objeto convirte a array
    let cabecera = datatable.nombres.map((value)=>{
      const celda =  new Cell( new Txt(value).bold() .end ).fillColor(datatable.headerStyle.background).color(datatable.headerStyle.fontColor).end;
      return celda
  
    })
    tb.push(cabecera)
    
    data.map((elemento)=>{
      tb.push(Object.values(elemento))
    })
    
    
    return tb;

  }

  export function tableCabeceraIzquierda(data:string[]){
    let tb = [];
    let cabecera = ['Departamento / Región','Provincia','Distrito','Coordenadas Utm','Localidades','Región Geográfica','Región Natural','Altitud'];
    data.map((elemento,index)=>{
      
      tb.push([cabecera[index],elemento])


    })
    return tb;

  }

  export function convertObjToArray(obj){
   // const o = {departamento:'depaetamento1',provincia:'provincia1',distrito:'disrtiot1',centros_poblados:[{id:0,nombre:'cp0'},{id:1,nombre:'cp1'}]}
    /*
    []
    */
   const m =[]
   const con = [];
   const ar:any = Object.values(obj);

   
   const j=  ar.splice(3,3)
   console.log(j)
   console.log(ar)//agregar los elemento nuevos a ar
   const ele = Object.values(j)
   j.map((val)=>{
     const el = Object.values(val);
     return ar.concat(el)
   });
   console.log (j)

   

   
   /*ar[3].map((elemento)=>{
     con.push(Object.values(elemento))
   })
  console.log(ar)
   con.map((elemento)=>{
    
    const j = elemento.shift() 

    
    m.push(elemento)
  })
  ar.splice(3,0,m)
//  console.log(ar)*/
}
