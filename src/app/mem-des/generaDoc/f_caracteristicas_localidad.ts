import { item, OrderingList, tablev2, tableCabeceraIzquierda, convertObjToArray, paleta_color } from './herramientas/funciones';
import { Ol, Item, Table, Txt, Cell, Ul, PdfMakeWrapper } from 'pdfmake-wrapper'

const ubicacion_geografica =
  { departamento: '', provincia: '', distrito: 'CASCAPARA', centros_poblados: [{ id: '', nombre: '' }] }

const o = { departamento: 'depaetamento1', provincia: 'provincia1', distrito: 'disrtiot1', centros_poblados: [{ id: 0, nombre: 'cp0' }, { id: 1, nombre: 'cp1' }] }

export function caracteristicas_localidad() {
  const pdf = new PdfMakeWrapper()

  return [
    new Item({
      text: `CARACTERISTICAS GENERALES DE LA LOCALIDAD
    `}).bold().end,
    new Ol([

      [
        new Item({ text: `UBICACION DEL PROYECTO` }).bold().end,
        new Txt(`UBICACION GEOGRAFICA DEL PROYECTO
        `).bold().alignment('justify').end,
        new Txt(`La ubicación del presente estudio es en la región Ancash, Provincia de Yungay , Distrito de Cascapara.
        `).alignment('justify').end,
        new Txt(`UBICACION POLITICA DEL PROYECTO
        `).bold().alignment('justify').end,
        new Txt(`CUADRO Nº 01 UBICACION GEOGRAFICA
        `).bold().alignment('justify').end,
        new Table([
          [new Cell(new Txt('Departamento/Región').bold().end).fillColor(paleta_color.partida.background).color(paleta_color.partida.fontColor).end, 'Ancash'],
          [new Cell(new Txt('Provincia').bold().end).fillColor(paleta_color.partida.background).color(paleta_color.partida.fontColor).end, 'Yungay'],
          [new Cell(new Txt('Distrito').bold().end).fillColor(paleta_color.partida.background).color(paleta_color.partida.fontColor).end, 'Cascapara'],
          [new Cell(new Txt('Coordenadas Utm').bold().end).fillColor(paleta_color.partida.background).color(paleta_color.partida.fontColor).end, '201492 Este y 8979011 Norte'],
          [new Cell(new Txt('Localidades').bold().end).fillColor(paleta_color.partida.background).color(paleta_color.partida.fontColor).end, 'Pucap, Tinco, Huaracpampa, Pampahuasi'],
          [new Cell(new Txt('Región Geográfica').bold().end).fillColor(paleta_color.partida.background).color(paleta_color.partida.fontColor).end, 'Sierra'],
          [new Cell(new Txt('Región Natural').bold().end).fillColor(paleta_color.partida.background).color(paleta_color.partida.fontColor).end, 'Sierra'],
          [new Cell(new Txt('Altitud').bold().end).fillColor(paleta_color.partida.background).color(paleta_color.partida.fontColor).end, '2,725 Msnm'],
        ]).dontBreakRows(true).headerRows(1).end,
        pdf.ln(),
        new Txt(`CUADRO Nº 02 UBICACIÓN GEOGRÁFICA DE LOS CASERÍOS
        `).bold().alignment('justify').end,
        new Table([
          [new Cell(new Txt('Anexo').bold().end).fillColor(paleta_color.partida.background).color(paleta_color.partida.fontColor).end,
          new Cell(new Txt('Este').bold().end).fillColor(paleta_color.partida.background).color(paleta_color.partida.fontColor).end,
          new Cell(new Txt('Sur').bold().end).fillColor(paleta_color.partida.background).color(paleta_color.partida.fontColor).end,
          new Cell(new Txt('Altitud').bold().end).fillColor(paleta_color.partida.background).color(paleta_color.partida.fontColor).end],
          ['pucap', '', '', ''],
          ['pampahuasi', '', '', ''],
          ['tinco', '', '', ''],
          ['huaracpampa', '', '', ''],
        ]).dontBreakRows(true).headerRows(1).end,


        pdf.ln(),
        //colocar imagenes de la macro y micro localizacion del proyecto

      ],
      [
        new Item({
          text: `DIAGNÓSTICO DE LA SITUACIÓN ACTUAL
        ` }).bold().end,
        [
          new Txt(`Mediante el presente diagnóstico se ha identificado los componentes tanto físicos, sociales, culturales y demográficos, de los principales problemas que aqueja a los caseríos de Pucap, Pampahuasi, Huaracpampa, Tinco del distrito de Cascapara, para lo cual se ha recurrido a fuentes primarias y secundarias disponibles, aparte de ello se ha realizado trabajos de campo donde se ha podido ver la situación actual con respecto al uso, consumo del agua y el estado actual de los servicios higiénicos. Principalmente en el trabajo de campo realizado en la cual se ha constatado cómo es la situación actual con respecto al consumo de agua, asimismo se ha realizado reuniones con los grupos involucrados como son las poblaciones beneficiarias que han manifestado los problemas que aquejan a través de entrevistas, encuestas tanto a la población a sus autoridades y personas destacadas, observación directa y otros documentos pertinentes que describen la situación actual del proyecto.
            `).alignment('justify').end,
          new Ol([
            [
              new Item({
                text: `ÁREA DE ESTUDIO DEL PROYECTO
              ` }).bold().end,
              [
                new Txt(`El Área de influencia está considerado los caseríos de Pucap, Pampahuasi, Huaracpampa, Tinco del distrito de Cascapara, quienes son los directos beneficiarios del presente estudio y quienes en la actualidad están representados por un total de 233 familias con una tasa de crecimiento de 1,21, en la actualidad se tiene un total de 699 beneficiarios.
                  `).alignment('justify').end,
              ]

            ],
            [
              new Item({
                text: `ÁREA DE INFLUENCIA
              ` }).bold().end,
              [
                new Txt(`El área de influencia está considerada los caseríos de Pucap, Pampahuasi, Huaracpampa, Tinco del distrito de Cascapara. quienes son los directos beneficiarios del presente estudio.
                  `).alignment('justify').end,
                new Txt(`A continuación se muestra la ubicación del área de influencia del presente proyecto, donde se puede apreciar a todos los caseríos del distrito de Cascapara.
                  `).alignment('justify').end,
                new Txt(`IMAGEN N° 03: MICROLOCALIZACIÓN
                `).alignment('justify').end,
                new Table([
                  [new Cell(new Txt('Descripción').color(paleta_color.cabecera_tabla.fontColor).end).fillColor(paleta_color.cabecera_tabla.background).end,
                  new Cell(new Txt('Total de Viviendas').color(paleta_color.cabecera_tabla.fontColor).end).fillColor(paleta_color.cabecera_tabla.background).end,
                  new Cell(new Txt('Total Usuarios').color(paleta_color.cabecera_tabla.fontColor).end).fillColor(paleta_color.cabecera_tabla.background).end],

                  ['pucap', 114, 342],
                  ['Pampahuasi', 59, 177]
                ]).headerRows(1).dontBreakRows(true).end,
                pdf.ln(),


              ]

            ]



          ]).separator(['1.5.2.', '.']).end,

        ]


      ],


      [

        new Item({
          text: `ACCESO AL ÁREA DE ESTUDIO
        `}).bold().end,
        [
          new Txt(`Las accesibilidades de los caseríos de Huaracpampa, Pucap, Pampahuasi, Tinco del distrito de Cascapara. se encuentra en el cuadro siguiente:
        `).alignment('justify').end,
        ]
      ],
      [
        new Item({
          text: `PRINCIPALES ACTIVIDADES ECONÓMICAS
        ` }).bold().end,

        new Txt(`La principal fuente de ingresos económicos a nivel local lo representa la agricultura. A continuación, detallamos las características de esta actividad.
        `).alignment('justify').end,

        new Ol([
          [
            new Item({
              text: `ACTIVIDAD AGRÍCOLA
            ` }).bold().end,
            new Txt(`La agricultura está orientada al autoconsumo básicamente y a la comercialización en mínima proporción con algunos poblados del entorno. En el distrito de Cascapara los cultivos que predominan son el Maíz, trigo, cebada, papa.
            `).alignment('justify').end

          ],
          [
            new Item({
              text: `ACTIVIDAD PECUARIA
            `}).bold().end,
            new Txt(`En cuanto al desarrollo pecuario, tenemos que la existencia de pastos naturales permite la crianza de ganado vacuno, equino, cuy, gallina, porcino y ovino. De las cabezas de ganado vacuno el peso vivo obtenido es en promedio 380 Kg. (en 4 años)
            `).alignment('justify').end

          ],
          [
            new Item({
              text: `ACTIVIDAD ARTESANAL
            ` }).bold().end,
            new Txt(`Se registran pequeñas iniciativas y emprendimientos de trabajos de artesanía que no llega a explotarse de manera comercial, se conoce la tradición del tejido: chumpis ponchos, frazadas, lliqllas, alforjas, chullos, unkhuñas, destinándose más para autoconsumo. Se conoce también de la existencia de incipientes e informales organizaciones que desarrollan actividades de tejidos como actividad alterna. El intercambio generalmente lo hacen solo entre conocidos dentro de la comunidad, como por ejemplo un poncho es trocado por un torete pequeño. Existe potencial de recurso humano y natural que poder explotar.
            `).alignment('justify').end

          ]



        ]).separator(['1.5.4.', '.']).end
      ],



      [
        [
          new Item({
            text: `ASPECTOS CLIMATOLÓGICOS
          `}).bold().end,
          [
            new Txt(`El comportamiento climático durante el año es predominantemente templado-seco en zonas bajas y, frías en las partes alturas; sin embargo, en el período de estación húmeda que dura de enero a marzo, el clima es templado-húmedo. En el período de alta sequedad ambiental que abarca de mayo hasta septiembre el clima es relativamente frío y seco. El clima es predominantemente seco, con temperaturas que oscilan entre los 18ºC y los 2.7ºC en épocas de lluvia (Noviembre a Marzo) y 20.4 ºC y los 4 ºC en épocas de invierno durante los meses de Mayo a Setiembre.
          `).alignment('justify').end,
            new Txt(`Humedad.- Los promedios de humedad relativa presentan una fluctuación estacional, registrándose de Julio a Diciembre un promedio de 74.7% y el más alto en los meses de Enero, Febrero y Marzo con un promedio de 88.8%. Precipitaciones Pluviales.- Las precipitaciones máximas anuales, se dan en la estación de verano, comenzando en el mes de diciembre y se extiende hasta abril, decreciendo gradualmente.
          `).alignment('justify').end,
            new Txt(`La precipitación promedio anual es de 884.28mm, correspondiendo los mayores volúmenes para los meses de enero y febrero, con 181.66mm y la mínima media anual, para julio con 1.48mm.
          `).alignment('justify').end,

          ]

        ],
        new Ol([
          [
            new Item({
              text: `RECURSOS HÍDRICOS
            `}).bold().end,
            [
              new Txt(`El régimen hidrológico existentes en la zona de estudio está condicionado por las precipitaciones pluviales y las características físicas de las cuencas. En la zona no existen nevadas perpetuas u otros almacenamientos importantes de regulación superficial. Las aguas subterráneas que afloran como manantes constituyen los principales abastecedores de agua para la agricultura y dependen directamente de las condiciones anuales de las lluvias, las cuales al precipitarse se infiltran en el sub. Suelo y recargan los acuíferos.
              `).alignment('justify').end
            ]
          ],
          [
            new Item({
              text: `TEMPERATURA
            ` }).bold().end,
            [
              new Txt(`El análisis de las condiciones climáticas se hizo sobre la base de la información proveniente de las estaciones meteorológicas localizadas en el entorno del distrito de Cascapara y las más próximas al territorio, determinando así su comportamiento térmico que se ve influenciado por la altitud y su relieve, por lo que la oscilación de las temperaturas entre el día y la noche es considerable.
              `).alignment('justify').end,
              new Txt(`El clima es predominantemente seco, con temperaturas que oscilan entre los 18ºC y los 2.7ºC en épocas de lluvia (Noviembre a Marzo) y 20.4 ºC y los 4 ºC en épocas de invierno durante los meses de Mayo a Setiembre.
              `).alignment('justify').end

            ]
          ],
          [
            new Item({
              text: `HUMEDAD
            ` }).bold().end,
            [
              new Txt(`Los promedios de humedad relativa presentan una fluctuación estacional, registrándose de Julio a Diciembre un promedio de 74.7% y el más alto en los meses de Enero, Febrero y Marzo con un promedio de 88.8%.
              `).alignment('justify').end
            ]
          ],
          [
            new Item({
              text: `PRECIPITACIÓN
            ` }).bold().end,
            [
              new Txt(`Promedio anual es de 884.28mm, correspondiendo los mayores volúmenes para los meses de enero y febrero, con 181.66mm y la mínima media anual, para julio con 1.48mm.
              `).alignment('justify').end
            ]
          ],
          [
            new Item({
              text: `EVAPORACIÓN
            ` }).bold().end,
            [
              new Txt(`Según los registros, entre los meses de enero y mayo, se registran valores de evaporación máxima mayores de 137 mm, llegando a máximo de 172.75 mm en el mes de enero. Valores extremos mínimos que se registran son menores a 16.5 mm, siendo el más mínimo de 18.60 mm en el mes de abril. La evaporación promedio total anual es de 834.42 mm.mm.
              `).alignment('justify').end
            ]
          ],
          [
            new Item({
              text: `VIENTO
            `}).bold().end,
            [
              new Txt(`No se tiene información registrada en las estaciones meteorológicas instaladas en el medio; de observación directa e información verbal de las personas, se deduce que el viento dominante es de noreste, siguiendo en predominancia de sur oeste. Los vientos huracanados se presentan durante los meses de agosto y setiembre, para luego pasar a una temporada de vientos suaves durante los meses de octubre, noviembre y parte de diciembre.
              `).alignment('justify').end
            ]
          ],
          [
            new Item({
              text: `TOPOGRAFÍA
            ` }).bold().end,
            [
              new Txt(`La topografía de las localidades en estudio presenta una geología de una “composición de quebradas profundas, de composición rocosa y composición en base a minerales”. En tanto para la localidad presenta su topografía es mixta puesto que presenta partes llanas y pendientes profundas, el tipo de suelo se manifiesta con afloraciones rocosas, terreno gravoso arcilloso con presencia de rocas de tipo caliza.
              `).alignment('justify').end
            ]
          ],







          [
            new Item({
              text: `GEOLOGÍA
            `}).bold().end,
            new Ol([
              [
                new Item({
                  text: `ZONA PUNA
                `}).bold().end,
                [
                  new Txt(`Se encuentra ubicada aproximadamente entre los 4,000 a 4,800 m.s.n.m, es la zona más extensa de la provincia abarcando el 54% del territorio, las temperaturas oscilan entre 0 a 7°C., consiguientemente el clima es muy frío; esta zona se caracteriza por una secuencia de picos de montañas de pendiente moderada, intercaladas con altiplanicies medianamente onduladas, cubiertas de vegetación herbácea dominada por gramíneas principalmente ichu; que alternan de cuando en cuando con afloraciones rocosas, producto de un proceso de descubrimiento de la capa de suelo, proceso que en suma es técnicamente conocido como desertificación, a causa de erosión de origen eólico, hídrico y la sobre explotación de la escasa vegetación.
                  `).alignment('justify').end,
                  new Txt(`En esta zona podemos encontrar con más frecuencia bofe dales, muy importantes para la actividad pecuaria, además de albergar una importante diversidad biológica de flora y fauna, son las fuentes de origen de las aguas de los ríos y quebradas del micro cuencas que existen en la provincia. También mantienen la humedad del suelo durante todo el año. Sin embargo, se hace realizar evaluaciones que permita un manejo sostenible.
                  `).alignment('justify').end,
                ]
              ],
              [
                new Item({
                  text: `ZONA SUNI
                `}).bold().end,
                [
                  new Txt(`Esta zona comprende el 28.9 % de la superficie de la provincia y se ubica entre los 3500 y 4000 msnm comprende los pie de monte y praderas que se caracterizan por su geografía de ondulaciones fuertes a leves con planicies extensas, pero a veces pedregosas, aquí las temperaturas oscilan entre 3 a 14°C, el clima es frío y seco favorable para el desarrollo de diversas actividades agropecuarias tradicionales.
                  `).alignment('justify').end,
                  new Txt(`Los suelos son de mediana a baja calidad, consiguientemente la calidad de la cobertura vegetal que las protege es también pobre y está conformada por una asociación de especies gramíneas de escasa palatabilidad ganadera.
                  `).alignment('justify').end,
                  new Txt(`Esta es la zona de mayor uso para actividades agrícolas y ganaderas, consiguientemente aquí se asientan el mayor número de pobladores.
                  `).alignment('justify').end,
                ]
              ],
              [
                new Item({
                  text: `ZONA QUECHUA
                ` }).bold().end,
                [
                  new Txt(`Comprendida entre los 2150 msnm hasta los 3500 msnm, correspondiendo al 17% de la superficie provincial; se caracteriza por unas topografía de pendientes escarpadas a lo largo de los cañones que formando ríos además se complejiza un tanto con los cañones que forman otros ríos tributarios menores dejando pequeñas superficies aptas para el desarrollo de una agricultura intensiva, cuyo potencial radica en la producción forestal y de frutales, no obstante la existencia de adecuadas temperaturas (11 a 17°C), que posibilitan un clima templado seco. Esta parte del territorio presenta condiciones de clima más benignas, en contraste la oferta hídrica es menor que en las otras zonas; que sumada con las condiciones de alta pendiente y las características de suelos con escaso desarrollo edafológico limitan el éxito de una actividad agrícola intensiva.
                  `).alignment('justify').end,
                  new Txt(`CUADRO N° 05: SUPERFICIE EN H.A SEGÚN ZONAS DE VIDA
                  `).bold().end,
                  new Table([
                    [new Cell(new Txt('Pisos').color(paleta_color.cabecera_tabla.fontColor).alignment('center').end).fillColor(paleta_color.cabecera_tabla.background).end,
                    new Cell(new Txt('M.S.N.M').color(paleta_color.cabecera_tabla.fontColor).alignment('center').end).fillColor(paleta_color.cabecera_tabla.background).end,
                    new Cell(new Txt('SUPERFICIE').color(paleta_color.cabecera_tabla.fontColor).alignment('center').end).fillColor(paleta_color.cabecera_tabla.background).end,
                    new Cell(new Txt('%').color(paleta_color.cabecera_tabla.fontColor).end).alignment('center').fillColor(paleta_color.cabecera_tabla.background).end],
                    ['QUECHUA', '2000 - 3500', '44997', '17.17'],
                    ['SUNI', '3500 - 4000', '75537', '28.9'],
                    ['PUNA', '> 4000', '141491', '54.0'],
                    ['', '', '262473', '100']
                  ]).headerRows(1).dontBreakRows(true).end,
                  pdf.ln(),

                ]
              ]



            ]).separator(['1.5.5.8.', '.']).end,

          ],


        ]).separator(['1.5.5.', '.']).end

      ],


      [
        new Item({
          text: `CARACTERÍSTICAS DE LA POBLACIÓN BENEFICIARIA
        ` }).bold().end,
        [
          new Txt(`Los involucrados de los caseríos de Pucap, Pampahuasi, Huaracpampa, y Tinco del distrito de Cascapara provincia de Yungay departamento de Ancash.
          `).alignment('justify').end,
          new Txt([new Txt('Poblacion de área afectada.-').bold().end, `La población objetivo está determinada por los caseríos de Pucap, Pampahuasi, Huaracpampa, y Tinco del distrito de Cascapara, distribuidos en el área de intervención, este resultado refleja un total de 233 viviendas beneficiarios, con un total de 699 personas entre padres, madres, abuelos e hijos, presentando una concentración de 3.78 miembros por familia
          `]).alignment('justify').end,

        ],
        new Ol([
          [
            new Item({
              text: `RESUMEN CASERÍOS BENEFICIADOS
            ` }).bold().end,
            new Ol([
              [
                new Item({
                  text: `CASERÍOS BENEFICIADOS
                ` }).bold().end,
                [
                  new Txt(`En el en el distrito de Cascapara se tiene una población netamente rural la cual asciende a 966 personas, las cuales están distribuidas en los caseríos  con los que cuenta el centro poblado como son Pucap, Pampahuasi, Huaracpampa, y Tinco.
                `).alignment('justify').end,
                  new Txt(`A continuación, se presentan los parámetros utilizados para calcular la demanda de agua para el proyecto:
                `).alignment('justify').end,
                  new Txt(`CUADRO N° 06: USUARIOS BENEFICIADOS
                `).bold().alignment('justify').end,
                  new Table([
                    [new Cell(new Txt('Descripción').color(paleta_color.cabecera_tabla.fontColor).end).alignment('center').fillColor(paleta_color.cabecera_tabla.background).end,
                    new Cell(new Txt('Total de Viviendas').color(paleta_color.cabecera_tabla.fontColor).end).alignment('center').fillColor(paleta_color.cabecera_tabla.background).end,
                    new Cell(new Txt('Total de Usuarios').color(paleta_color.cabecera_tabla.fontColor).end).alignment('center').fillColor(paleta_color.cabecera_tabla.background).end
                    ],
                    ['Pucap', '114', '354'],
                    ['Pucap', '114', '354'],
                    ['Pucap', '114', '354'],
                    [new Cell(new Txt('Total').bold().end).end, new Cell(new Txt('Total').bold().end).end, new Cell(new Txt('Total').bold().end).end]
                  ]).headerRows(1).dontBreakRows(true).end,
                  pdf.ln(),


                ]
              ],
              [

                new Item({
                  text: `USO DE LA VIVIENDA
                ` }).bold().end,
                [
                  new Txt(`Como se puede apreciar en el cuadro, los caseríos de Pucap, Pampahuasi, Huaracpampa, y Tinco del distrito de Cascapara el 100% de la población lo utilizan como vivienda.
              `).alignment('justify').end

                ]

              ],

              [
                new Item({
                  text: `MATERIAL DE CONSTRUCCIÓN
                `}).bold().end,

                [
                  new Txt(`Las condiciones de la vivienda están dadas por las características de los materiales constructivos referidos a paredes, techos, piso en las que viven las familias. En ese sentido el material predominante de las viviendas es el adobe 100.00%, en el siguiente cuadro se presenta la distribución del material predominante en la construcción de las viviendas de la zona.
                `).alignment('justify').end,
                  new Table([
                    [new Cell(new Txt('categorias').color(paleta_color.cabecera_tabla.fontColor).end).alignment('center').fillColor(paleta_color.cabecera_tabla.background).end,
                    new Cell(new Txt('Caso').color(paleta_color.cabecera_tabla.fontColor).end).alignment('center').fillColor(paleta_color.cabecera_tabla.background).end,
                    new Cell(new Txt('%').color(paleta_color.cabecera_tabla.fontColor).end).alignment('center').fillColor(paleta_color.cabecera_tabla.background).end
                    ],
                    ['Solo Vivienda', '233', '100.00%']
                  ]).headerRows(1).dontBreakRows(true).end,
                  new Txt(`CUADRO N° 07: MATERIAL PREDOMINANTE EN LA VIVIENDA
                  `).bold().end,
                  new Table([
                    [
                      new Cell(new Txt('Localidad').color(paleta_color.cabecera_tabla.fontColor).end).alignment('center').fillColor(paleta_color.cabecera_tabla.background).end,
                      new Cell(new Txt('Material de Adobe').color(paleta_color.cabecera_tabla.fontColor).end).alignment('center').fillColor(paleta_color.cabecera_tabla.background).end,
                      new Cell(new Txt('Material Noble').color(paleta_color.cabecera_tabla.fontColor).end).alignment('center').fillColor(paleta_color.cabecera_tabla.background).end,
                      new Cell(new Txt('Total de Viviendas').color(paleta_color.cabecera_tabla.fontColor).end).alignment('center').fillColor(paleta_color.cabecera_tabla.background).end,
                      new Cell(new Txt('%').color(paleta_color.cabecera_tabla.fontColor).end).alignment('center').fillColor(paleta_color.cabecera_tabla.background).end
                    ],
                    ['Pucap', '114', '0', '114', '48.13'],
                    ['Pucap', '114', '0', '114', '48.13'],
                    ['Pucap', '114', '0', '114', '48.13'],

                  ]).headerRows(1).dontBreakRows(true).end,
                  pdf.ln(),

                ],


              ],
              [
                new Item({
                  text: `SERVICIOS BÁSICOS
                ` }).bold().end,
                [
                  new Txt([new Txt('Servicios de Agua.-').bold().end, new Txt(`A continuación se presenta el diagnóstico de las restricciones que se presentan en el servicio de agua para los caseríos Pucap, Huaracpampa, Tinco y Pampahuasi del distrito de Cascapara.
                  `).alignment('justify').end]).end,
                  new Txt(`CUADRO N° 8: COBERTURA DE CONEXIÓN DOMICILIARIAS`).bold().end,
                  new Table([
                    [new Cell(new Txt('Localidad').color(paleta_color.cabecera_tabla.fontColor).end).alignment('center').fillColor(paleta_color.cabecera_tabla.background).end,
                    new Cell(new Txt('Nº Viviendas').color(paleta_color.cabecera_tabla.fontColor).end).alignment('center').fillColor(paleta_color.cabecera_tabla.background).end,
                    new Cell(new Txt('Conex.Dom.Agua').color(paleta_color.cabecera_tabla.fontColor).end).alignment('center').fillColor(paleta_color.cabecera_tabla.background).end,
                    new Cell(new Txt('% Beneficiados').color(paleta_color.cabecera_tabla.fontColor).end).alignment('center').fillColor(paleta_color.cabecera_tabla.background).end],

                    ['Pucap', 114, 114, '%'],
                    ['Pampahuasi', 114, 114, '%'],


                  ]).headerRows(1).dontBreakRows(true).end,
                  pdf.ln(),

                  new Txt(`Fuente: Elaboración Propia
                  `).alignment('justify').end,


                  new Txt(`En el cuadro líneas abajo se puede apreciar según las encuestas que el 87% dice que el agua que recibe es insuficiente y tan solo un 13% es suficiente. Estos datos se pueden apreciar de mejor manera en el siguiente cuadro.
                  `).alignment('justify').end,
                  new Txt(`CUADRO N° 9: COBERTURA DE CONEXIÓN DOMICILIARIAS
                  `).bold().end,
                  new Table([
                    [{ text: new Cell(new Txt('La cantidad de Agua que Recibe').alignment('center').color(paleta_color.cabecera_tabla.fontColor).end).fillColor(paleta_color.cabecera_tabla.background).end, colSpan: 4 }, {}, {}, {}],
                    ['',
                      new Cell(new Txt('Frecuencia').color(paleta_color.cabecera_tabla.fontColor).end).alignment('center').fillColor(paleta_color.cabecera_tabla.background).end,
                      new Cell(new Txt('Porcentaje').color(paleta_color.cabecera_tabla.fontColor).end).alignment('center').fillColor(paleta_color.cabecera_tabla.background).end,
                      new Cell(new Txt('Porcentaje Acumulado').color(paleta_color.cabecera_tabla.fontColor).end).alignment('center').fillColor(paleta_color.cabecera_tabla.background).end],


                    ['Suficiente', 30, '13%', '13%'],
                    ['Insuficiente', 30, '13%', '13%'],
                    ['Total', 30, '13%', ''],

                  ]).headerRows(1).dontBreakRows(true).end,
                  pdf.ln(),
                  new Txt([new Txt('Saneamiento Básico').end, new Txt('La prestación de los servicios para la disposición sanitaria tiene las siguientes características en sus variables específicas.').end]).alignment('justify').end,
                  new Txt([new Txt('Conexión sanitaria').end, new Txt('La encuesta indica que el 100% de los caseríos Pucap, Huaracpampa, Tinco y Pampahuasi del distrito de Cascapara, no cuenta con servicio por conexión sanitaria.').end]).alignment('justify').end,
                  new Txt([new Txt('Viviendas que no cuentan con letrinas').end, new Txt(`En el cuadro se muestra que el 100 % de los caseríos Pucap, Huaracpampa, Tinco y Pampahuasi del distrito de Cascapara, no cuentan con ningún tipos de sistema de eliminación de excretas.
                  `).end]).alignment('justify').end,
                  new Txt(`CUADRO N° 10: VIVIENDAS CON LETRINAS`).bold().end,
                  new Table([
                    [new Cell(new Txt('Localidades').color(paleta_color.cabecera_tabla.fontColor).end).alignment('center').fillColor(paleta_color.cabecera_tabla.background).end,
                    new Cell(new Txt('Conectadas a la Red').color(paleta_color.cabecera_tabla.fontColor).end).alignment('center').fillColor(paleta_color.cabecera_tabla.background).end,
                    new Cell(new Txt('Viviendas con Letrinas').color(paleta_color.cabecera_tabla.fontColor).end).alignment('center').fillColor(paleta_color.cabecera_tabla.background).end,
                    new Cell(new Txt('No cuentan con ningun sistema de eliminacion de excretas').color(paleta_color.cabecera_tabla.fontColor).end).alignment('center').fillColor(paleta_color.cabecera_tabla.background).end],
                    ['Pucap', '0', '0', '0'],
                    ['Pucap', '0', '0', '0'],
                    ['Pucap', '0', '0', '0'],
                    ['Pucap', '0', '0', '0']

                  ]).headerRows(1).dontBreakRows(true).end,
                  pdf.ln(),
                  new Txt(`Servicio de Energía Eléctrica`).end,
                  new Txt(`Las viviendas cuentan con el servicio de energía eléctrica al 100%, y el 0% no cuenta con el servicio eléctrico; sin embargo, los aledaños de la parte alta no cuentan en su mayoría con energía eléctrica, por lo que la población tiende a utilizar velas y otro medio de alumbrado dentro de sus viviendas.
                  `).alignment('justify').end,
                  new Txt(`CUADRO N° 11: SERVICIO DE ENERGÍA ELÉCTRICA`).bold().end,
                  new Table([
                    [new Cell(new Txt('Localidades').color(paleta_color.cabecera_tabla.fontColor).end).alignment('center').fillColor(paleta_color.cabecera_tabla.background).end,
                    new Cell(new Txt('Si tienen Conexión de luz').color(paleta_color.cabecera_tabla.fontColor).end).alignment('center').fillColor(paleta_color.cabecera_tabla.background).end,
                    new Cell(new Txt('no tienen conexión de luz').color(paleta_color.cabecera_tabla.fontColor).end).alignment('center').fillColor(paleta_color.cabecera_tabla.background).end,
                    new Cell(new Txt('% Beneficiarios de Luz').color(paleta_color.cabecera_tabla.fontColor).end).alignment('center').fillColor(paleta_color.cabecera_tabla.background).end],
                    ['Pucap', '0', '0', '0'],
                    ['Pucap', '0', '0', '0'],
                    ['Pucap', '0', '0', '0'],
                    ['Pucap', '0', '0', '0']

                  ]).headerRows(1).dontBreakRows(true).end,
                  pdf.ln(),
                  new Txt(`Servicio Educativo`).bold().end,
                  new Txt(`En cuanto al servicio educativo en el cuadro líneas más abajo se muestra las instituciones educativas de cada localidad objeto de este estudio. Asimismo, el equipamiento y mobiliario de los centros educativos es deficiente, las pocas carpetas se encuentran deterioradas por el prolongado uso y por falta de reparación y mantenimiento. Otra característica de la problemática educativa es la deserción y ausentismo escolar, la cual se presenta principalmente en alumnos provenientes de familias de escasos recursos económicos, obligando al alumno a abandonar el centro educativo y buscar recursos para su subsistencia; en otros casos el abandono se produce por atender las labores agrícolas y pecuarias de mayor demanda de mano de obra familiar (siembra, cosecha, pastoreo, etc.).
                  `).alignment('justify').end,
                  new Txt(`Se concluye que el nivel educativo en todo el ámbito del distrito es bajo, debido principalmente a que los niños en edad escolar no disponen de condiciones adecuadas de estudio en sus hogares, como son la falta de materiales educativos; no cuentan con bibliotecas, laboratorios y mobiliario escolar adecuado, poco apoyo de los padres y descuido de los docentes y autoridades educativas, así mismo dicha realidad se encuentra íntimamente ligada a otros problemas sociales que sufre el distrito:
                  `).alignment('justify').end,
                  new Ul([
                    new Item({ text: `Desnutrición crónica que sufren o han sufrido.` }).end,
                    new Item({ text: `Mala calidad de la alimentación diaria.` }).end,
                    new Item({ text: `Problemas de violencia familiar y alcoholismo en los hogares.` }).end,
                    new Item({
                      text: `Hogares descompuestos.
                    `}).end,



                  ]).end,
                  [
                    new Item({ text: `CUADRO N° 12: INSTITUCIÓN EDUCATIVA DEL DISTRITO DE ${ubicacion_geografica.distrito}` }).bold().end,
                    new Table([
                      [
                        new Cell(new Txt('Localidad').color(paleta_color.cabecera_tabla.fontColor).end).alignment('center').fillColor(paleta_color.cabecera_tabla.background).end,
                        new Cell(new Txt('Nombre I.E.').color(paleta_color.cabecera_tabla.fontColor).end).alignment('center').fillColor(paleta_color.cabecera_tabla.background).end,
                        new Cell(new Txt('Nivel/Modalidad').color(paleta_color.cabecera_tabla.fontColor).end).alignment('center').fillColor(paleta_color.cabecera_tabla.background).end,
                        new Cell(new Txt('Gestion/Dependencia').color(paleta_color.cabecera_tabla.fontColor).end).alignment('center').fillColor(paleta_color.cabecera_tabla.background).end,
                        new Cell(new Txt('Alumnos').color(paleta_color.cabecera_tabla.fontColor).end).alignment('center').fillColor(paleta_color.cabecera_tabla.background).end
                      ],

                      ['Pucap', 'Los Claveles.', 'Secundario Mixto', 'sector Publico', 123],

                    ]).headerRows(1).dontBreakRows(true).end,
                    pdf.ln(),

                  ],
                  [
                    [
                      new Item({ text: 'Servicio de salud' }).bold().end,
                      new Item({
                        text: `De las encuestas realizadas se tiene que un 68% menciona que las enfermedades que más afectan a los niños son la diarrea y parasitosis, un 14% menciona que solo es diarrea, un 16% menciona que es gripe y un 3% indica que solo es parasitosis.
                  `}).alignment('justify').end,
                      new Item({ text: 'Principales Indicadores de Salud.' }).end,
                      new Item({
                        text: `La información histórica del Puesto de Salud que atiende al distrito de Cascapara indica lo siguiente:
                  `}).alignment('justify').end,
                      new Ul([

                      ]).end,

                      new Ul([
                        new Item({
                          text: `Tasa de mortalidad infantil es de 19 x 1000 n.v., es decir, aproximadamente 1.9 infantes mueren de cada 100 menores de 1 año.
                    `}).alignment('justify').end,
                        new Item({
                          text: `Tasa de nacimientos sin producirse ningún fallecimiento 17
                    `}).alignment('justify').end,
                        new Item({
                          text: `El 77 % de niños de 1 año de primaria se encuentra con desnutrición crónica.
                    `}).alignment('justify').end,
                        new Item({
                          text: `Las enfermedades más frecuentes en los niños menores de un año son enfermedades diarreicas agudas e infecciones respiratorias agudas primordialmente, seguidos de parasitosis, enfermedades de la piel, traumatismos de la cabeza y desnutrición.
                    `}).alignment('justify').end,
                        new Item({
                          text: `En el caso de personas mayores generalmente son las Infecciones intestinales (Enfermedades Diarreicas Agudas–EDA), infecciones de las vías respiratorias, enfermedades del sistema urinario, enfermedades del esófago y él estómago, dorsopatias, enfermedades de la cavidad bucal y traumatismos de la cabeza.
                    `}).alignment('justify').end,
                        new Item({
                          text: `Según las campañas de desparasitación realizadas por el CLAS, puestos de salud de Vicos, existe un 54 % de personas con parásitos y anemia en el distrito, mientras que el porcentaje de habitantes con anemia representa el 20.6 % aproximadamente.
                    `}).alignment('justify').end,


                      ]).end,

                    ]
                  ],


                  new Item({
                    text: `Cuadro de resultados de la encuesta a la pregunta enfermedades más comunes hogar
                  `}).end,
                  new Table([
                    [new Cell(new Txt('Resultados/Respuestas').color(paleta_color.cabecera_tabla.fontColor).end).alignment('center').fillColor(paleta_color.cabecera_tabla.background).end,
                    new Cell(new Txt('Frecuencia').color(paleta_color.cabecera_tabla.fontColor).end).alignment('center').fillColor(paleta_color.cabecera_tabla.background).end,
                    new Cell(new Txt('Responde que Existen estas Enfermedades').color(paleta_color.cabecera_tabla.fontColor).end).alignment('center').fillColor(paleta_color.cabecera_tabla.background).end,
                    new Cell(new Txt('Responde que no existen estas enfermedades').color(paleta_color.cabecera_tabla.fontColor).end).alignment('center').fillColor(paleta_color.cabecera_tabla.background).end,
                    new Cell(new Txt('Porcentaje Ajustado al 100%').color(paleta_color.cabecera_tabla.fontColor).end).alignment('center').fillColor(paleta_color.cabecera_tabla.background).end],

                    ['TOS', '39', '73.00%', 27, '42.00%'],
                    ['ESTOMACAL', '21', '29.70%', 70.3, '17.10%'],
                    ['OTROS', '16', '27.00%', 73, '15.50%'],
                    ['DIARREA', '12', '17.10%', 82.9, '9.80%'],
                    ['RESPIRATORIA', '9', '13.30%', 86.7, '7.70%'],
                    ['PARASITOSIS', '8', '5.30%', 94.7, '3.10%'],
                    ['A LA PIEL', 3, '3.80%', 96.2, '2.20%'],
                    ['COLERA', 1, '3.00%', 97, '1.80%'],
                    ['TIFOIDEA', 1, '1.50%', 98.5, '0.90%']
                  ]).headerRows(1).dontBreakRows(true).end,
                  pdf.ln(),

                  new Item({
                    text: `De estos resultados podemos deducir que en la actualidad la enfermedad predominante en la zona es la tos generada principalmente por la estación que se está viviendo; seguida de las enfermedades estomacales, diarrea, parasitosis, cólera, tifoidea que en conjunto representan el 32.6 %.
                  `}).alignment('justify').end,
                  new Item({
                    text: `Mientras que a la pregunta ¿Cuál considera que fue la causa de la enfermedad?, el 29.7 % señala como causante a la mala calidad del agua de consumo actual; también señalan como generadores de las enfermedades al polvo, clima, alimentos, alergia y otros; el cuadro siguiente nos muestra a detalle los resultados de la encuesta:
                  `}).alignment('justify').end,
                  new Item({
                    text: `Cuadro resultados de la encuesta a la pregunta: ¿cuál considera que fue la causa de la enfermedad?
                  `}).alignment('justify').end,
                  new Table([
                    [
                    new Cell(new Txt('Resultados/Respuestas').color(paleta_color.cabecera_tabla.fontColor).end).alignment('center').fillColor(paleta_color.cabecera_tabla.background).end,
                    new Cell(new Txt('Frecuencia').color(paleta_color.cabecera_tabla.fontColor).end).alignment('center').fillColor(paleta_color.cabecera_tabla.background).end,
                    new Cell(new Txt('Responde Que Existe Estas Causas').color(paleta_color.cabecera_tabla.fontColor).end).alignment('center').fillColor(paleta_color.cabecera_tabla.background).end,
                    new Cell(new Txt('Responde Que No Existe Estas Causas').color(paleta_color.cabecera_tabla.fontColor).end).alignment('center').fillColor(paleta_color.cabecera_tabla.background).end,
                    new Cell(new Txt('Porcentaje Ajustado Al 100%').color(paleta_color.cabecera_tabla.fontColor).end).alignment('center').fillColor(paleta_color.cabecera_tabla.background).end],

                    ['POLVO', 35, '51.30%', '48.70%', '29.50%'],
                    ['AGUA', 65, '48.70%', '71.30%', '54.90%'],
                    ['CLIMA', 11, '39.20%', '60.80%', '22.50%'],
                    ['ALIMENTOS', 8, '22.10%', '77.90%', '12.70%'],
                    ['ALERGIA', 65, '48.70%', '71.30%', '54.90%'],
                    ['OTRO', 1, '3.00%', '97.00%', '1.70%']
                  ]).headerRows(1).dontBreakRows(true).end,
                  pdf.ln(),
                  new Item({
                    text: `Fuente Encuesta Socioeconómica Distrito y Anexos - realizado por el consultor de proyectos.
                  `}).alignment('justify').end,
                  new Item({ text: `Programas sociales` }).bold().end,
                  new Item({
                    text: `El Estado Peruano con el fin de reducir brechas sociales en el ámbito del país viene implementando diferentes programas sociales, tales como: juntos, pensión 65, qali warma, entre otros.
                  `}).alignment('justify').end,

                ]
              ]
            ]).separator(['1.5.6.1.', '.']).end,

          ],


        ]).separator(['1.5.6.', '.']).end,

      ],

    ]).separator(['1.5.', '.']).end,
  ]

}



