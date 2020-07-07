import { item, OrderingList } from './herramientas/funciones';
import { Ol, Item } from 'pdfmake-wrapper';

export function generalidades_antecedetes(){
    return  [
                  
      item({title:'GENERALIDADES Y ANTECEDENTES',detail:''}),
      
      OrderingList([
        { title: 'GENERALIDADES', detail: '' },
        { title: 'MARCO DE REFERENCIA', detail: '' }, 
        { title: 'ANTECEDENTES', detail: '' }], ['1.2.', '.']).end

    ]
      
        
      
}