import { item, OrderingList } from './herramientas/funciones';
import { Ol, Item, Txt, Table, PdfMakeWrapper } from 'pdfmake-wrapper';
export function diagnostico_servicios_saneamiento(){
  const pdf=new PdfMakeWrapper();
    return [
                  
        [
          new Item({text:`DIAGNOSTICO DE LOS SERVICIOS DE SANEAMIENTO BASICO EXISTENTE DE LAS LOCALIDADES BENEFICIADAS
          `}).bold().end,
          [
            new Item({text:`A continuación se describe la situación actual del caserío de Pucap por componente:
            `}).end

          ]
        ],
        
        new Ol([
          [
            new Item({text:`SISTEMA DE AGUA POTABLE CASERIO PUCAP
            `}).bold().end,
            
            new Ol([
              [
                new Item({text:`CAPTACIÓN
                `}).bold().end,
                [
                  new Txt(`Cuenta con una captación es de tipo ladera cuyo nombre es Allcco soyttoyoc Ubicada entre las coordenadas UTM 795119.1125 E: 8446565.723 N, a una altitud de 3965.80msnm.
                  `).alignment('justify').end,
                  new Txt(`Fue construida en el año 1995 por el programa social FONCODES, con el apoyo de la municipalidad provincial de Cotabambas, la captación no presenta cerco perimétrico, presenta tapas oxidadas, el tarrajeo y concreto está en mal estado y no satisface la demanda de la población, por lo que se proyecta la construcción de una nueva captación en otro manante.
                  `).alignment('justify').end,
                  new Txt(`La nueva fuente asegura la cantidad y continuidad de agua para poder abastecer a la población actual y futura, debido a que cuenta con la cantidad suficiente de agua.
                  `).alignment('justify').end,
                  new Txt(`CUADRO N° 15: UBICACIÓN DE LA CAPTACIÓN EXISTENTE`).alignment('justify').bold().end,
                  new Table([
                    [{text:'Descripción',rowSpan:2},{text:'Coordenadas',colSpan:2,alignment:'center'},{},{text:'Altitud', rowSpan:2}],
                    [{},{text:'Este'},{text:'Norte'},'Altitud'],
                    ['Manantial de Ruscrupunta','','','']

                  ]).headerRows(2).dontBreakRows(true).end,
                  pdf.ln()

                ]
              ],
              [
                new Item({text:`LINEA DE CONDUCCION
                `}).bold().end,
                [
                  new Txt(`El sistema de agua potable cuenta con una línea de conducción de 685.60 ml aproximadamente, con tubería de diámetro variable PVC C-10 de 1”, que conduce el agua desde la captación hasta el reservorio de almacenamiento, cabe indicar que en todo el trayecto se encuentra en condiciones deterioradas y descuidas, evidenciándose su precaria instalación por lo que en algunos tramos se encuentra a la visible, siendo expuesto a los rayos solares, además se observa que esta red no cuenta con obras de arte como cámara rompe presión T-6, cuenta con pase aéreo.
                  `).alignment('justify').end

                ]
              ],
              [new Item({text:`RESERVORIO
              `}).bold().end,
                [
                  new Txt(`Cuenta con un reservorio construido por FONCODES en el año 1995, se encuentra ubicada en la cabecera de la población en el sector Curanco Nuevo  con coordenadas UTM: 8446725.58 N y 795414.52 E a una altitud de 3962.23 msnm. La forma de la infraestructura del reservorio es rectangular con capacidad de almacenamiento de 4.0 m3, no cuenta con una caseta de cloración y no cuenta con un cerco de protección.
                  `).alignment('justify').end
                ]
              ],
              [
                new Item({text:`LÍNEA DE ADUCCIÓN Y RED DE DISTRIBUCIÓN
                `}).bold().end,
                [
                  new Txt(`Cuenta con una línea de aducción y distribución de 1607.74 ml aproximadamente con tubería PVC C-10 de ¾” de diámetro, se observa que esta red no cuenta con válvula reductora de presión, por lo que es necesario el cambio ya que se observa rotura de tubería por sufrir presiones elevadas. Las redes de agua existentes en la localidad son de material de PVC-SAP de ¾” de diámetro con una longitud promedio aproximadamente instaladas en un 61% de la comunidad. Estas redes están instaladas superficialmente provocando las roturas frecuentes debido al paso de los animales y vehículos que frecuentan por estas zonas o por descuido de los mismos pobladores al momento de excavar, las muestras de filtración debido a fisuras o roturas en las tuberías son frecuentes, además no se observa válvulas de control, de purga y de aire, por último no se observa válvulas de control que sectorizan el agua.
                  `).alignment('justify').end
                ]
              ],
              [
                new Item({text:`CONEXIONES DOMICILIARIAS
                `}).bold().end,
                [
                  new Txt(`De las 114 viviendas usuarias, el 100.00% cuenta con conexiones domiciliarias, mientras él 0.00% no cuentan con este servicio, este caserío cuenta con 342 habitantes, en vista que la población ha venido aumentando en la capital del distrito estas viviendas se encuentran fuera del casco urbano que a la fecha abastecen de piletas de los vecinos, acequias y manantes, el principal problema del sistema de agua potable es el estado de los grifos y piletas domiciliarias los cuales en muchos casos se encuentran refaccionados de manera provisional y artesanal sin tener criterios técnicos, se observan fisuras envueltos con jebes por lo que las fugas son constantes.
                  `).alignment('justify').end
                ]
              ],
              [
                new Item({text:`CONEXIÓN DE AGUA POTABLE EN INSTITUCIÓN EDUCATIVA
                `}).bold().end,
                [
                  new Txt(`En el presente diagnóstico no se contemplan Instituciones Educativas
                  `).alignment('justify').end
                ]
              ],
              [
                new Item({text:`CONEXIÓN DE AGUA POTABLE EN EL CENTRO DE SALUD
                `}).bold().end,
                [
                  new Txt(`En el presente diagnóstico no se contemplan Centros de Salud
                  `).end
                ]
              ],
              [
                new Item({text:`CONEXIÓN DE AGUA POTABLE EN INSTITUCIONS SOCIAL
                `}).bold().end,
                [
                  new Txt(`En el presente diagnóstico no se contemplan Instituciones Sociales
                  `).end
                ]
              ],
              [
                new Item({text:`SISTEMA DE DISPOSICIÓN SANITARIA
                `}).bold().end,
                [
                  new Txt(`En este anexo de Curanco el 100% no cuenta con un sistema de eliminación de excretas (letrinas, alcantarillado y UBS sistema de arrastre hidráulico, etc.).
                  `).end

                ]
              ]  
            ]).separator(['1.6.1.','.']).end
               
          ]

        ]).separator(['1.6.', '.']).end
      ]
}
