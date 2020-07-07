import { item, OrderingList } from './herramientas/funciones';
import { Ol } from 'pdfmake-wrapper';
export function diagnostico_servicios_saneamiento(){
    return [
                  
        item({title:'DIAGNOSTICO DE LOS SERVICIOS DE SANEAMIENTO BASICO EXISTENTE DE LAS LOCALIDADES BENEFICIADAS DEL DISTRITO DE CASCAPARA',detail:''}),
        new Ol([
          [
            
            item({title:'SISTEMA DE AGUA POTABLE CASERIO PUCAP',detail:''}),
            OrderingList([
              {title:'CAPTACIÓN',detail:''},
              {title:'LINEA DE CONDUCCION',detail:''},
              {title:'RESERVORIO',detail:''},
              {title:'LÍNEA DE ADUCCIÓN Y RED DE DISTRIBUCIÓN',detail:''},
              {title:'CONEXIONES DOMICILIARIAS',detail:''},
              {title:'CONEXIÓN DE AGUA POTABLE EN INSTITUCIÓN EDUCATIVA',detail:''},
              {title:'CONEXIÓN DE AGUA POTABLE EN EL CENTRO DE SALUD',detail:''},
              {title:'CONEXIÓN DE AGUA POTABLE EN INSTITUCIONS SOCIAL',detail:''},
              {title:'SISTEMA DE DISPOSICIÓN SANITARIA',detail:''}, 
            ],['1.6.1.', '.']).end
           
          ]

        ]).separator(['1.6.', '.']).end
      ]

}