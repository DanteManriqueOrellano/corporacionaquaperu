import { item, OrderingList } from './herramientas/funciones';
import { Ol, Item } from 'pdfmake-wrapper';

export function objetivos_proyecto(){
    return [
                  
        item({title:'OBJETIVOS',detail:''}),

        new Ol([

          [
            
            item({title:'OBJETIVOS DEL PROYECTO',detail:''}),

            OrderingList([
              {title:'ACCESO UNIVERSAL A LOS SERVICIOS DE SALUD Y SEGURIDAD SOCIAL',detail:''},
              {title:'EJES ESTRATÉGICOS Nº 2 - PLAN BICENTENARIO 2021',detail:''},
              {title:'OBJETIVO NACIONAL',detail:''},
              {title:'LINEAMIENTO DE POLÍTICA',detail:''},
              {title:'PRIORIDADES',detail:''},
              {title:'PROGRAMA ESTRATÉGICO',detail:''}],['1.3.1.', '.']).end  
           

          ],
          item({title:'OBJETIVO GENERAL',detail:''}),
          item({title:'OBJETIVO ESPECIFICO',detail:''}),

         


        ]).separator(['1.3.', '.']).end,
      ]
}