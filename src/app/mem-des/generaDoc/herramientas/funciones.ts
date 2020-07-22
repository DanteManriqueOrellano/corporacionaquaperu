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
    let cabecera =  ['Departamento / Región','Provincia','Distrito','Coordenadas Utm','Localidades','Región Geográfica','Región Natural','Altitud'];
    data.map((elemento,index)=>{
      
      tb.push([cabecera[index],elemento])


    })
    return tb;

  }

  export function convertObjToArray(obj){
   //datos a ingresar de la colleccion  generalidades
   // const obj = {departamento:'depaetamento1',provincia:'provincia1',distrito:'disrtiot1',centros_poblados:[{id:0,nombre:'cp0'},{id:1,nombre:'cp1'}]}//datos a ingresar de la bd


  const cn = obj.centros_poblados.map((val)=>{
     const tmp = Object.values(val);
      tmp.shift()
      
      return tmp[0]
   })
  
  const tb = Object.values(obj)
  tb.splice(3,3)
  return tb.concat(cn) 
}
export const paleta_color={
  partida:{fontColor:'#ffffff' ,background:'#8e8e93'},
  subpartida:{fontColor:'red',background:'pink'},
  item:{fontColor:'red',background:'pink'},
  detalle:{fontColor:'red',background:'pink'},
  cabecera_tabla:{fontColor:'#ffffff' ,background:'#8e8e93'},
}
   
/*
morado: #7C5EFD
verde:  #97D722
blanco:#dadada
rojo: #FF4848
negro: #303030
azul:#5856d6
celeste oscuro: #007aff
celeste claro:#34aadc
verde claro:#5ac8fa
verde limon:#97D722
verde oscuro:#4cd964
rojo:#ff2d55
rojoclaro:#ff3b30
melon:#ff9500
amarillo:#ffcc00
amarillo:#F7BC23
plomo:#8e8e93        
morado:#7C5EFD     
    */
export function ubicacion_geografica(){

}