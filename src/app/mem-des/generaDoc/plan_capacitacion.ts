import { item, OrderingList, paleta_color } from './herramientas/funciones';
import { Ol, Item, Txt, Table, PdfMakeWrapper } from 'pdfmake-wrapper';

export function plan_capacitacion() {
 const pdf = new PdfMakeWrapper()
  return [
    [
      new Item({ text: `PLAN DE CAPACITACION
      ` }).bold().end,
      [
        new Ol([
          [

            [
              new Item({ text: `PLAN DE EDUCACIÓN SANITARIA AMBIENTAL
              ` }).bold().end,
              [
                new Txt(`La educación sanitaria; es concebida como el proceso que contribuye a que las personas tomen conciencia de las interrelaciones sociales y ambientales de las que forman parte, con el fin de acentuar el espíritu de responsabilidad y solidaridad orientado a la solución de problemas basándose en información objetiva, valores, actitudes y aptitudes.
                  `).alignment('justify').end,
                new Txt(`La educación sanitaria; como un proceso bien realizado (planificado y reflexivo) cala en la estructura mental y cognoscitiva de las personas sin importar su edad, ni su status social habilitándolo a la movilización de la acción práctica.
                  `).alignment('justify').end,
                new Txt(`La educación sanitaria está estrechamente ligada con la provisión de servicios elementales como son el agua y un saneamiento seguro. En efecto y en el marco de la intervención del PNSR, se espera que la educación sanitaria ambiental como proceso conduzca a que los socios usuarios comprendan:
                  `).alignment('justify').end,
                new Txt(`Los aspectos relativos al agua como recurso y como agente de vida, salud y desarrollo, su rol ciudadano en la sostenibilidad de los servicios y en la conservación de su salud, materializando el pago de la cuota familiar y la práctica de hábitos de higiene.
                  `).alignment('justify').end,
                new Txt(`Que el agua que es llevada con una tecnología atípica, una vez tratada, no debe ser desperdiciada o hacer mal uso de ella;
                  `).alignment('justify').end,
                new Txt(`Que hay que cuidar el impacto del saneamiento en los ecosistemas.
                  `).alignment('justify').end,
                new Txt(`Los efectos benéficos para la salud y el desarrollo de la prestación de servicios sólo pueden durar en el tiempo si los usuarios lo sostienen compartiendo la responsabilidad de un buen servicio.
                  `).alignment('justify').end,
                new Txt(`La participación y la acción son elementos claves en la educación sanitaria ambiental porque sus retos trascienden la construcción de infraestructura de agua y saneamiento; enfocándose en un tipo de gestión de los servicios basado en un ejercicio ciudadano responsable de derechos y deberes guiado por una nueva Cultura del Agua.
                  `).alignment('justify').end,

                new Ol([
                  [
                    [
                      new Item({ text: `POBLACIÓN OBJETIVO
                      ` }).bold().end,
                      [
                        new Txt(`El presente plan de Educación Sanitaria Ambiental, está dirigido a la siguiente población objetivo:
                          `).alignment('justify').end,
                        new Ol([
                          [
                            new Item({ text: `FAMILIAS DE LOS ANEXOS
                            ` }).end,
                            [
                              new Txt(`Las 284 familias identificadas de los ANEXOS COTANERAE, CHACACANTA, HUAYLLAHUIRQUI, ÑUÑOPATA, CONCHAPALLANA, CURANCO, TTASTAYOC, HUINCHO, VENTANA, PUMAMARCA Y ÑUÑOHUAYOC DEL C.P. PUMAMARCA - TAMBOBAMBA - COTABAMBAS – APURÍMAC, se constituyen como la principal población objetivo del presente Plan de Educación Sanitaria Ambiental, puesto que serán los usuarios directos de los sistemas de agua y saneamiento planteados. Ante este escenario, es importante lograr su participación.
                                `).alignment('justify').end,
                              new Txt(`CUADRO N°26: VIVIENDAS BENEFICIARIAS
                                `).bold().alignment('justify').end,
                              new Table([
                                [{ text: 'Cantidad de Usuarios', colSpan: 3,fillColor:paleta_color.cabecera_tabla.background,color:paleta_color.cabecera_tabla.fontColor }, {}, {}],
                                ['Localidades', 'Viviendas', 'Total'],
                                ['Pucap', 0, 0]
                              ]).dontBreakRows(true).headerRows(2).end
                            ]
                          ],
                          pdf.ln()





                        ]).separator(['1.12.1.1.', '.']).end

                      ]
                    ],



                  ],

                  [
                    new Item({ text: `OBJETIVOS
                    ` }).bold().end,
                    new Ol([
                      [
                        new Item({ text: `OBJETIVOS GENERALES
                        ` }).bold().end,
                        [
                          new Txt(`Fortalecer las capacidades de las familias de los ANEXOS COTANERAE, CHACACANTA, HUAYLLAHUIRQUI, ÑUÑOPATA, CONCHAPALLANA, CURANCO, TTASTAYOC, HUINCHO, VENTANA, PUMAMARCA Y ÑUÑOHUAYOC DEL C.P. PUMAMARCA - TAMBOBAMBA - COTABAMBAS – APURÍMAC, para la adopción de adecuadas prácticas saludables, la valoración y buen uso de los servicios de saneamiento
                            `).alignment('justify').end

                        ]
                      ],
                      [
                        new Item({ text: `OBJETIVOS ESPECÍFICOS
                        ` }).bold().end,
                        [
                          new Txt(`Desarrollar la adopción de prácticas y hábitos de higiene, para el mejoramiento de la salud y calidad vida de las familias de la comunidad. 
                            `).alignment('justify').end,
                          new Txt(`Desarrollar las capacidades de las familias para la comprensión y adecuado uso de la alternativa técnica propuesta para los servicios de saneamiento. 
                            Promover la valoración del pago oportuno de la cuota familiar para apoyar la sostenibilidad económica de los sistemas. 
                            
                            `).alignment('justify').end,
                          new Txt(`Promover la organización comunal, de manera que la población asuma un papel más activo en el cuidado de su salud, en la gestión de su desarrollo y en la protección del medio ambiente.
                            `).alignment('justify').end,

                        ]
                      ]
                    ]).separator(['1.12.1.2.', '.']).end





                  ],
                  [
                    new Item({ text: `CONTENIDO TEMÁTICO DEL PLAN DE EDUCACIÓN SANITARIA AMBIENTAL` }).bold().end,
                    [
                      new Txt(`El Presente Plan se llevará a cabo contemplando el siguiente contenido temático:
                        `).alignment('justify').end,
                      new Table([

                        [{text:'PARTIDA',fillColor:paleta_color.cabecera_tabla.background,color:paleta_color.cabecera_tabla.fontColor}, {text:'DETALLE',fillColor:paleta_color.cabecera_tabla.background,color:paleta_color.cabecera_tabla.fontColor}, {text:'UND.',fillColor:paleta_color.cabecera_tabla.background,color:paleta_color.cabecera_tabla.fontColor}, {text:'CANT.',fillColor:paleta_color.cabecera_tabla.background,color:paleta_color.cabecera_tabla.fontColor}],
                        ['01','PLAN DE EDUCACIÓN SANITARIA AMBIENTAL','','306.00'],
                        ['01.01', 'ACTIVIDADES PREVIAS', '','44.00'],
                        ['01.01.01', 'ASAMBLEA : ELABORACIÓN Y PRESENTACIÓN DEL PLAN DE TRABAJO DEL GESTOR SOCIAL EN LA FASE DE EJECUCIÓN CON LAS FAMILIAS', 'GLB', '11.00'],
                        ['01.01.02', 'ASAMBLEA GENERAL DE USUARIOS PARA ACEPTACIÓN DEL PROYECTO', 'GLB', '11.00'],
                        ['01.01.03', 'VISITA DOMICLIARIA: PRIMERA VALIDACIÓN DEL PADRON DE USUARIOS(VISITA CASA X CASA)', 'GLB', '11.00'],
                        ['01.01.04', 'LINEA DE BASE A NIVEL DE LEVANTAMIENTO DE INFORMACIÓN DE LA POBLACIÓN BENEFICIARIA(REALIZADA POR EL ESPECIALISTA SOCIAL)', 'GLB', '11.00'],
                        ['01.02', 'ACTIVIDADES DURANTE LA EJECUCION DE OBRAS','','262.00'],
                        ['01.02.01', 'ACTIVIDADES DE COMUNICACIÓN INTERPERSONAL Y GRUPAL','',''],
                        ['01.02.01.01', 'ASAMBLEA DE SOCIALIZACIÓN DE LOS RESULTADOS DE LA LINEA DE BASE Y ALTERNATIVAS DE SOLUCIÓN', 'GLB', '11.00'],
                        ['01.02.01.02', 'ASAMBLEA: VALIDACIÓN DEL PADRÓN DE USUARIOS Y FIRMA DE LA DECLARACIÓN "UNILATERAL PARA AUTORIZAR LA INSTALACIÓN DOMICILIARIA DEL SISTEMA DE AGUA Y UNILATERAL PARA AUTORIZAR LA INSTALACIÓN DOMICILIARIA DEL SISTEMA DE AGUA Y UBS"' ,'GLB', '11.00'],
                        ['01.02.01.03', 'TALLER : ACTUALIZACIÓN DEL MAPA DE ACTORES','GLB', '11.00'],
                        ['01.02.01.04', 'SESIÓN EDUCATIVA N° 001: DERECHOS Y RESPONSABILIDADES DE LOS USUARIOS, CUIDADO Y VIGILANCIA DE LOS SAS - VIGILANCIA CIUDADANA Y TRANSPARENCIA', 'UND', '11.00'],
                        ['01.02.01.05', 'SESIÓN EDUCATIVA N° 002: EL CICLO DEL AGUA, CUIDADO Y CONSERVACIÓN DE LAS FUENTES DE AGUA','UND','11.00'],
                        ['01.02.01.06', 'SESIÓN EDUCATIVA N° 003: CONOCIMIENTO DE LOS MOMENTOS CRITICOS Y TÉCNICA DEL FUENTES DE AGUA', 'UND', '11.00'],
                        ['01.02.01.07', 'SESIÓN EDUCATIVA N° 004: CULTURA DE PAGO, CUOTA DE RESERVA Y CUOTA FAMILIAR PARA LA SOSTENIBILIDAD DE LOS SERVICIOS','UND','11.00'],
                        ['01.02.01.08', 'SESIÓN EDUCATIVA N° 005: ALMACENAMIENTO, MANIPULACIÓN Y TRATAMIENTO DEL AGUA EN EL HOGAR, CUIDADO Y USO RACIONAL' ,'UND','11.00'],
                        ['01.02.01.09', 'ASAMBLEA PARA LA APROBACIÓN DEL POA, PRESUPUESTO ANUAL Y LA CUOTA FAMILIAR', 'GLB' ,'11.00'],
                        ['01.02.01.10', 'VISITAS DOMICILIARIAS PARA REFORZAMIENTO DE LAS SESIONES EDUCATIVAS N° 003, 004 Y 005', 'GLB',' 11.00'],
                        ['01.02.01.11', 'SESIÓN EDUCATIVA N° 006: BUEN USO, OPERACIÓN Y MANTENIMIENTO DE UBS', 'UND', '11.00'],
                        ['01.02.01.12', 'SESIÓN EDUCATIVA N° 007: HIGIENE PERSONAL, DE LOS ALIMENTOS Y DE LA VIVIENDA' ,'UND', '11.00'],
                        ['01.02.01.13', 'VISITAS DOMICILIARIAS PARA REFORZAMIENTO DE LAS SESIONES EDUCATIVAS N° 006 Y 007', 'GLB', '11.00'],
                        ['01.02.01.14', 'VISITA GUIADA: CONOCIENDO EL SISTEMA DE AGUA POTABLE EN MI COMUNIDAD', 'GLB', '11.00'],
                        ['01.02.01.15', 'ACOMPAÑAMIENTO: REUNIÓN DE EVALUACIÓN Y CIERRE DE LA EJECUCIÓN DE OBRAS CON LA VEEDURIA CIUDADANA Y LA JASS','GLB','11.00'],
                        ['01.02.01.16', 'ASAMBLEA INFORMATIVA: TERMINO DE LA EJECUCIÓN DE OBRA Y PUESTA EN MARCHA DEL SISTEMA DE AGUA Y SANEAMIENTO EN MI COMUNIDAD' ,'GLB ','11.00'],
                        ['02.02.02', 'ACTIVIDADES DE COMUNICACIÓN COMUNITARIA','',''],
                        ['01.02.02.01', 'CONCURSO: DIRIGIDO A LAS FAMILIAS SOBRE "LAVADO DE MANOS-CONOCIMIENTO DE LOS MOMENTOS Y PRÁCTICA DE LA TÉCNICA CORRECTA DEL LAVADO DE MANOS"','GLB','11.00'],
                        ['01.02.02.02', 'CAMPAÑA: " EL CONSUMO DE AGUA SEGURA, EN COORDINACIÓN CON LAS INSTITUCIONES INVOLUCRADAS (SALUD Y EDUCACIÓN)"', 'GLB', '11.00'],
                        ['01.02.02.03', 'DIFUSIÓN POR PERIFONEO: EL VALOR DE LA CUOTA FAMILIAR Y PAGO OPORTUNO' ,'UND', '44.00'],
                        ['01.02.03', 'EVALUACIÓN DE INDICADORES(GESTOR SOCIAL)','',''],
                        ['01.02.03.01', 'AUTOEVALUACIÓN: MEDICIÓN DE INDICADORES', 'GLB', '11.00'],
                        ['01.02.04', 'REMUNERACIONES','',''],
                        ['01.02.04.01', 'PAGO DEL GESTOR SOCIAL',' MES',' 8.00'],

                      ]).dontBreakRows(true).headerRows(1).end,
                      pdf.ln(),
                      new Txt(`El proyecto tiene una duración de 8 meses, el especialista social se considera para los 8 meses, ya que se ejecutan obras en tres anexos en paralelo durante los 8 meses, haciendo un porcentaje de participación de 33.33% por sector.
                      `).alignment('justify').end
                    ]
                  ],
                  [
                    new Item({ text: `REQUERIMIENTO DE RECURSOS (PRESUPUESTO) PARA LA IMPLEMENTACIÓN DEL PLAN DE EDUCACIÓN SANITARIA AMBIENTAL` }).end,
                    [
                      new Txt(`IMPLEMENTACIÓN DEL PLAN DE EDUCACIÓN SANITARIA AMBIENTAL.
                      `).alignment('justify').bold().end,
                      new Txt(`IMPLEMENTACIÓN DEL PLAN DE EDUCACIÓN SANITARIA AMBIENTAL
                      `).alignment('justify').end,
                      new Txt(`El costo de inversión para la ejecución del Plan de Educación Sanitaria asciende la suma de S/. 52,777.50 soles, sin IGV. (Ver Detalle en Presupuesto del Plan de Educación Sanitaria Ambiental).
                      `).alignment('justify').end,

                    ]
                  ],
                  [
                    new Item({ text: `CRONOGRAMA DE LAS ACTIVIDADES DEL PLAN EDUCACIÓN SANITARIA AMBIENTAL
                    ` }).bold().end,
                    [
                      new Txt(`El Plan de Educación Sanitaria Ambiental, contempla la realización de talleres y sesiones educativas entre otras actividades sociales, tomando en cuenta las siguientes etapas:
                      `).alignment('justify').end,
                      
                      new Table([
                        [{text:'Etapas del Proyecto',fillColor:paleta_color.cabecera_tabla.background,color:paleta_color.cabecera_tabla.fontColor},{text:'Tiempo/Meses',fillColor:paleta_color.cabecera_tabla.background,color:paleta_color.cabecera_tabla.fontColor}],
                        ['Ejecución','8']
                      ]).dontBreakRows(true).headerRows(1).end

                    ],
                    pdf.ln()

                  ],

                ]).separator(['1.12.1.', '.']).end
              ]
            ]
          ]
        ]).separator(['1.12.', '.']).end
      ]
    ]
  ]
}


