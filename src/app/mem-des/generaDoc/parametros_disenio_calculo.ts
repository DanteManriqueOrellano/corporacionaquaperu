import { item, OrderingList } from './herramientas/funciones';
import { Ol } from 'pdfmake-wrapper';
export function parametros_disenio_calculo(){
    return [
                  
        item({title:'PARAMETROS DE DISEÑO Y CALCULO',detail:''}),
        OrderingList([
          {title:'PARÁMETROS DE DISEÑO DE LOS ANEXOS',detail:''},
          {title:'CÁLCULO',detail:''}],['1.7.','.']).end
        

      ]
}