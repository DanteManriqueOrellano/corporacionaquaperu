import { item, OrderingList } from './herramientas/funciones';
import { Ol } from 'pdfmake-wrapper';
export function plan_capacitacion(){
    return [
                  
        item({title:'PLAN DE CAPACITACION',detail:''}),
        new Ol([
          [
            
            item({title:'PLAN DE EDUCACIÓN SANITARIA AMBIENTAL',detail:''}),
            new Ol([
              [
                
                item({title:'POBLACIÓN OBJETIVO',detail:''}),
                OrderingList([
                  {title:'FAMILIAS DE LOS ANEXOS',detail:''},
                  {title:'INSTITUCIONES EDUCATIVAS INICIALES Y PRIMARIAS',detail:''},
                  {title:'CENTRO DE SALUD',detail:''}],['1.12.1.1.','.']).end
               

              ],
              
              [
               
                item({title:'OBJETIVOS',detail:''}),
                OrderingList([{title:'OBJETIVOS GENERALES',detail:''},{title:'OBJETIVOS ESPECÍFICOS',detail:''}],['1.12.1.2.','.']).end
               

              ],
              
              
              
              item({title:'CONTENIDO TEMÁTICO DEL PLAN DE EDUCACIÓN SANITARIA AMBIENTAL',detail:''}),
              
              item({title:'REQUERIMIENTO DE RECURSOS (PRESUPUESTO) PARA LA IMPLEMENTACIÓN DEL PLAN DE EDUCACIÓN SANITARIA AMBIENTAL',detail:''}),
          
              item({title:'CRONOGRAMA DE LAS ACTIVIDADES DEL PLAN EDUCACIÓN SANITARIA AMBIENTAL',detail:''}),
            ]).separator(['1.12.1.','.']).end

          ]
          
        ]).separator(['1.12.','.']).end

      ]
}