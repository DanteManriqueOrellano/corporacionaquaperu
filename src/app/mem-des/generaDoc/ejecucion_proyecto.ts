import { item, OrderingList } from './herramientas/funciones';
import { Ol } from 'pdfmake-wrapper';
export function ejecucion_proyecto(){
    return [
                  
        item({title:'EJECUCION DEL PROYECTO',detail:''}),
        OrderingList([{title:'ÉPOCAS RECOMENDADAS PARA LA EJECUCIÓN DEL PROYECTO',detail:''},{title:'ELIMINACIÓN DEL DESMONTE',detail:''}],['1.16.','.']).end
       
      ]
}