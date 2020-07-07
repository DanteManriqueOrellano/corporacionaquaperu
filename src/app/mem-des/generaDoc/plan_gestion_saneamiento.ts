import { item, OrderingList } from './herramientas/funciones';
import { Ol } from 'pdfmake-wrapper';
export function plan_gestion_saneamiento(){
    return [
                  
        item({title:'PLAN DE CAPACITACION DE GESTION DE SANEAMIENTO BASICO',detail:''}),
        new Ol([
          [
           
            item({title:'ENFOQUES DE LA ESTRATEGIA',detail:''}),
            OrderingList([{title:'FORTALECIMIENTO COMUNAL',detail:''},{title:'PARTICIPACIÓN INCLUSIVA',detail:''}],['1.13.1.','.']).end
            

          ],
          
          [
            
            item({title:'OBJETIVOS',detail:''}),
            OrderingList([{title:'OBJETIVOS GENERALES',detail:''},{title:'OBJETIVOS ESPECÍFICOS',detail:''}],['1.13.2.','.']).end
            
          ],
          [
            
            item({title:'MODALIDAD DE CAPACITACIÓN',detail:''}),
            OrderingList([
              {title:'SECCIONES EDUCATIVAS',detail:''},
              {title:'TALLERES',detail:''},
              {title:'CAPACITACIÓN EN SERVICIOS',detail:''},
              {title:'PASANTÍAS',detail:''},
              {title:'GRUPOS DE INTER APRENDIZAJE',detail:''}],['1.13.3.','.']).end
            

          ],
         
         
         
          item({title:'CONTENIDO Y METAS A DESARROLLAR CON LA JAZZ Y ATM',detail:''}),
          
          item({title:'REQUERIMIENTO DE RECURSOS DE (PRESUPUESTO) PARA LA IMPLEMENTACIÓN DEL PLAN DE GESTIÓN PARA LA PRESENTACIÓN DE LOS SERVICIOS',detail:''}),
          
          item({title:'CRONOGRAMA',detail:''}),

        ]).separator(['1.13.','.']).end

      ]
}