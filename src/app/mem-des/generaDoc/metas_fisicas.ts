import { item, OrderingList } from './herramientas/funciones';
import { Ol } from 'pdfmake-wrapper';
export function metas_fisicas(){
    return [
                 
                
        item({title:'RESUMEN DE METAS',detail:''}),
        OrderingList([{title:'METAS FÍSICAS DEL ANEXO PUCAP (REPETIR POR CADA ANEXO)',detail:''}],['1.15.','.']).end 

        ]

}