import { item, OrderingList } from './herramientas/funciones';
import { Ol } from 'pdfmake-wrapper';
export function plan_mitigacion_ambiental(){
    return [
                  
        item({title:'PLAN DE MITIGACION AMBIENTAL',detail:''}),
        new Ol([
          
          item({title:'OBJETIVOS',detail:''}),
          
          item({title:'ALCANCES',detail:''}),
          [
            
            item({title:'PROGRAMAS',detail:''}),

            OrderingList([
              {title:'PROGRAMA DE MITIGACIÓN AMBIENTAL',detail:''},
              {title:'PROGRAMA DE PARTICIPACIÓN Y CONSULTA CIUDADANA',detail:''},
              {title:'PROGRAMA DE SEGURIDAD Y SALUD',detail:''},
              {title:'PROGRAMA DE SEGURIDAD Y CONTROL',detail:''},
              {title:'RESUMEN DE PRESUPUESTO MITIGACIÓN AMBIENTAL',detail:''}],['1.11.3.','.']).end
           
          ]
          

        ]).separator(['1.11.','.']).end

      ]
}