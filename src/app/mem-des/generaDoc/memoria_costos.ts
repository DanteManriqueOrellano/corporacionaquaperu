import { item, OrderingList } from './herramientas/funciones';
import { Ol } from 'pdfmake-wrapper';
export function memoria_costos(){
    return [
                 
        item({title:'MEMORIA DE COSTOS',detail:''}),
        OrderingList([{title:'CONCEPTOS PRINCIPALES DEL ESTUDIOS DE COSTOS JORNALES',detail:''},{title:'VALOR REFERENCIAL DEL PROYECTO',detail:''}],['1.17.','.']).end
      

      ]
}