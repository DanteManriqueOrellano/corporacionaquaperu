import { item, OrderingList } from './herramientas/funciones';
import { Ol } from 'pdfmake-wrapper';
export function descripcion_obras_proyectadas(){
    return [
        /**la descripcion de las obras proyectadas se hacen por localidad */
        
        item({title:'DESCRIPCION DE LAS OBRAS PROYECTADAS',detail:''}),
        new Ol([
          [
            
            item({title:'DESCRIPCIÓN DE OBRAS PROYECTADAS DEL SISTEMA DE AGUA POTABLE - CASERIO PUCAP (REPETIR LO MISMO PARA CADA ANEXO)',detail:''}),
            OrderingList([
              {title:'CAPTACION',detail:''},
              {title:'CÁMARAS DERIVADORES DE CAUDAL',detail:''},
              {title:'CAMARA ROMPE PRESION T-06',detail:''},
              {title:'CAMARA ROMPE PRESION T-07',detail:''},
              {title:'RED DE TUBERÍAS',detail:''},
              {title:'PASE AEREO',detail:''},
              {title:'RESERVORIO NUEVO',detail:''},
              {title:'VÁLVULA DE CONTROL Y REGULACIÓN',detail:''},
              {title:'VÁLVULA DE PURGA',detail:''},
              {title:'VÁLVULA DE AIRE',detail:''},
              {title:'CONEXIONES DOMICILIARIAS',detail:''}],['1.9.1.','.']).end
    
          ]
          

        ]).separator(['1.9.','.']).end

      ]
}