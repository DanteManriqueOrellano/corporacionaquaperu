import { item, OrderingList } from './herramientas/funciones';
import { Ol, Item, Txt } from 'pdfmake-wrapper';
export function ejecucion_proyecto(){
    return [
        [
          new Item({text:`EJECUCION DEL PROYECTO
          `}).bold().end,
          [
            new Ol([
              [
                new Item({text:`ÉPOCAS RECOMENDADAS PARA LA EJECUCIÓN DEL PROYECTO
                `}).bold().end,
                [
                  new Txt(`La época más recomendable para ejecutar el proyecto se sitúa entre los meses de abril a octubre, es en estos meses en donde se presentan ausencia de lluvias, lo cual permite que los caudales de los ríos disminuyan y que las vías de acceso hacia la localidad sean fácilmente transitables.
                  `).alignment('justify').end
                ],
                new Item({text:`ELIMINACIÓN DEL DESMONTE`}).bold().end,
                [
                  new Txt(`Se ha previsto diferentes zonas donde podrían ubicarse el desmonte generado durante la ejecución de la obra los cuales no afecten el medio ambiente ni cambie el mismo, por lo que estos lugares se determinarán durante la ejecución de la obra conjuntamente con los beneficiarios.
                  `).alignment('justify').end

                ]
              ]
            ]).separator(['1.16.','.']).end
            



          ]
        ]
                  
        
      ]
}
