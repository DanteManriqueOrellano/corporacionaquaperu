import { item, OrderingList } from './herramientas/funciones';
import { Ol } from 'pdfmake-wrapper';
export function descripcion_obras_proyectadas_hidraulico(){
    return [
                  
        item({title:'DESCRIPCION DE LAS OBRAS PROYECTADAS DEL SISTEMA DE ARRASTRE HIDRAULICO',detail:''}),
        new Ol([
          [
            
            item({title:'HIDRÁULICO',detail:''}),
            OrderingList([
              {title:'CONSTRUCCIÓN DE CASETAS DE UBS PARA INSTITUCIONES EDUCATIVAS',detail:''},
              {title:'INSTALACIÓN LAVADERO',detail:''},
              {title:'BIODIGESTOR',detail:''},
              {title:'POZO DE LODOS',detail:''},
              {title:'POZO PERCOLADOR',detail:''},
              {title:'SUMINISTRO DE TUBERÍA',detail:''}],['1.10.1.','.']).end
           

          ]
          
        ]).separator(['1.10.','.']).end,

      ]

}