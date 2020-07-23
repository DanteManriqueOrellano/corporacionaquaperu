import { item, OrderingList, paleta_color } from './herramientas/funciones';
import { Ol, Item, Txt, Table, PdfMakeWrapper } from 'pdfmake-wrapper';
export function descripcion_obras_proyectadas(){
  const pdf = new PdfMakeWrapper()
    return [
        /**la descripcion de las obras proyectadas se hacen por localidad */
        new Item({text:`DESCRIPCION DE LAS OBRAS PROYECTADAS`}).bold().end,
        new Ol([
          [
            new Item({text:`DESCRIPCIÓN DE OBRAS PROYECTADAS DEL SISTEMA DE AGUA POTABLE - CASERIO PUCAP (REPETIR LO MISMO PARA CADA ANEXO)
            `}).bold().end,
            new Ol([
              [
                new Item({text:`CAPTACION`}).bold().end,
                [
                  new Txt(`Se construirá una nueva captación en el manante Pullahua casa de tipo ladera (Filtros, cámara húmeda y cámara seca), será de concreto armado F'c= 210 kg/cm2, está estructuras se tarrajeará el exterior (normal), el interior con (impermeabilizante) luego se colocara sus respectivos accesorios correspondientes en cada obra de arte. Para finalizar se pintara las obras de arte. Se construirá un cerco perimétrico con dado de concreto, poste de tubo galvanizado, malla electro soldada y tendrá una puerta de acceso que será construido de marco de tubo fierro galvanizado con malla cuadrada galvanizada.
                  `).alignment('justify').end,
                  new Table([
                    [{text:'Captación de Manantial de Ladera',colSpan:4,alignment:'center',fillColor:paleta_color.cabecera_tabla.background,color:paleta_color.cabecera_tabla.fontColor},{},{},{}],
                    [{text:'Nombre',rowSpan:2},{text:'Coordenadas',colSpan:3},{},{}],
                    [{},{text:`Este`},{text:`Norte`},{text:`Cota`}],
                    [{text:'llecllish'},{text:10},{text:20},{text:30}]
                    
                  ]).dontBreakRows(true).headerRows(1).end
                  
                ]
              ],
              [
                new Item({text:`CÁMARAS DERIVADORES DE CAUDAL`}).bold().end,
                [
                  new Txt(`Se construirá, que serán de concreto armado F'c= 210 kg/cm2, está estructuras se tarrajeará el exterior (normal), el interior con (impermeabilizante) luego se colocara sus respectivos accesorios correspondientes en cada obra de arte. Para finalizar se pintara las obras de arte.
                  `).alignment('justify').end

                ]
              ],
              [
                new Item({text:`CAMARA ROMPE PRESION T-06`}).bold().end,
                [
                  new Txt(`Se construirá que serán de concreto armado F'c= 210 kg/cm2, esta estructuras se tarrajeará el exterior (normal), el interior con (impermeabilizante) luego se colocara sus respectivos accesorios correspondientes en cada obra de arte. Para finalizar se pintara las obras de arte.
                  `).alignment('justify').end,

                ]
              ],
              [
                new Item({text:`CAMARA ROMPE PRESION T-07`}).bold().end,
                [
                  new Txt(`Se construirá que serán de concreto armado F'c= 210 kg/cm2, esta estructuras se tarrajeará el exterior (normal), el interior con (impermeabilizante) luego se colocara sus respectivos accesorios correspondientes en cada obra de arte. Para finalizar se pintara las obras de arte.
                  `).alignment('justify').end

                ]
              ],
              [
                new Item({text:`RED DE TUBERÍAS`}).bold().end,
                [
                  new Txt(`Se instalaran una nueva Red de tubería de material PVC–SAP, clase C-10, según los cálculos hidráulicos, en el siguiente cuadro se muestra los siguientes diámetros.
                  `).alignment('justify').end,
                  new Table([
                    [{text:'Red de Tuberias',colSpan:2,alignment:'center',fillColor:paleta_color.cabecera_tabla.background,color:paleta_color.cabecera_tabla.fontColor},{}],
                    [{text:'Descripción',fillColor:paleta_color.cabecera_tabla.background,color:paleta_color.cabecera_tabla.fontColor},{text:'Cantidad en metros',fillColor:paleta_color.cabecera_tabla.background,color:paleta_color.cabecera_tabla.fontColor}],
                    [{text:'Linea de Conduccion'},{text:321.31}],
                    [{text:'Linea de Aducción'},{text:31.31}],
                    [{text:'Red de Distribución'},{text:654.32}]
                  ]).dontBreakRows(true).headerRows(2).end,
                  pdf.ln(),
                  

                ]
              ],
              [
                new Item({text:`PASE AEREO`}).bold().end,
                [
                  new Txt(`Teniendo información del relieve del terreno se construirá pases aéreos que servirán para cruzar la tubería de la línea de conducción por el aire de la quebrada. L=<10 Con estructura metálica y dados de concreto F'c= 175 kg/cm2 sobre el cual ira apoyado de acuerdo a los detalles de los planos.
                  `).alignment('justify').end
                ]
              ],
              [
                new Item({text:`RESERVORIO NUEVO`}).bold().end,
                [
                  new Txt(`Se construirá tres nuevos reservorio con su respectiva caja de válvulas será de concreto armado F'c= 210 kg/cm2, esta estructuras se tarrajeará con mezcla C:A + impermeabilizante en muros interiores el exterior (normal), luego se colocara sus respectivos accesorios válvulas tal como los planos correspondientes en cada obra de arte, Para finalizar se pintara las obras de arte. Se construirá 01 cerco perimétrico con dado de concreto, poste de tubo galvanizado, malla electrosoldaday tendrá una puerta de acceso que será construido de marco de tubo fierro galvanizado con malla cuadrada galvanizada.
                  `).alignment('justify').end
                ]
              ],
              [
                new Item({text:`VÁLVULA DE CONTROL Y REGULACIÓN
                `}).bold().end,
                [
                  new Txt(`Se construirán válvulas de control y regulación con dimensiones interiores de 0.60m x 0.60mx 0.80m. La estructura será concreto armado F'c= 175 kg/cm2, los muros interiores será revestidos con mezcla C:A + impermeabilizante, los muros exteriores serán tarrajeadas con mezcla C:A, se colocara su respectiva tapa metálica y se colocarán los accesorios válvulas tal como indica los planos.
                  `).alignment('justify').end
                ]
              ],
              [
                new Item({text:`VÁLVULA DE PURGA
                `}).bold().end,
                [
                  new Txt(`Se construirán válvulas de purga con dimensiones interiores de 0.60m x 0.60mx 0.80m. La estructura será concreto armado F'c= 175 kg/cm2, los muros interiores será revestidos con mezcla C:A + impermeabilizante, los muros exteriores serán tarrajeadas con mezcla C:A, se colocara su respectiva tapa metálica y se colocaran los accesorios válvulas tal como indica los planos.
                  `).alignment('justify').end
                ]
              ],
              [
                new Item({text:`VÁLVULA DE AIRE
                `}).bold().end,
                [
                  new Txt(`Se construirá una válvula de aire con dimensiones interiores de 0.60m x 0.60mx 0.80m. La estructura será concreto armado F'c= 175 kg/cm2, los muros interiores será revestidos con mezcla C:A + impermeabilizante, los muros exteriores serán tarrajeadas con mezcla C:A, se colocara su respectiva tapa metálica y se colocaran los accesorios válvulas tal como indica los planos.
                  `).alignment('justify').end
                ]
              ],
              [
                new Item( new Txt(`CONEXIONES DOMICILIARIAS
                `).bold().end).bold(). end ,
                [
                  new Txt(`Se instalaran 60 conexiones de agua potable en todos los lotes de vivienda, además se instalaran cajas de control de concreto con tapa termo plástica y válvulas de paso.
                  `).alignment('justify').end
                ]
              ]

            ]).separator([ '1.9.1.' ,'.']).end    
          ]
        ]).separator(['1.9.','.']).end
      ]
}
