import { item, OrderingList, paleta_color } from './herramientas/funciones';
import { Ol, Item, Txt, Table, PdfMakeWrapper } from 'pdfmake-wrapper';

export function plan_gestion_saneamiento(){
  const pdf = new PdfMakeWrapper()
    return [
      [
        new Item({text:`PLAN DE CAPACITACION DE GESTION DE SANEAMIENTO BASICO
        `}).bold().end,
        [
          new Txt(`Siendo el ámbito rural el eje central de la intervención del PNSR, es necesario fortalecer las capacidades de las autoridades de la población a cargo de la gestión de los servicios, según el modelo de estatuto y Reglamento aprobado mediante Resolución Ministerial No. 205,-2010-VIVIENDA del 27 de diciembre del 2010, para una mejor Administración, Operación y Mantenimiento (AOM) del sistema de agua y saneamiento de los Centros Poblados intervenidos; así como las correspondientes enseñanzas a las Áreas Técnicas Municipales (ATM) en agua y saneamiento correspondiente, generando nuevas capacidades de gestión acordes con la nueva infraestructura generada. La acción en ambos actores (JASS y ATM), deberá contribuir a la sostenibilidad e impacto del proyecto.
          `).alignment('justify').end,
          new Txt(`El presente plan tiene como objetivo: Contribuir a la sostenibilidad de los servicios de saneamiento mediante el fortalecimiento de conocimientos y prácticas adecuadas en higiene y uso del agua que conlleve al cambio de actitudes y comportamientos saludables a fin de mejorar los estilos de vida en las familias del anexo de Añoccalla, considerando la articulación con las instituciones locales como el sector salud (responsable de la vigilancia de la calidad del agua), el sector educación (responsable de desarrollar aspectos de educación sanitaria y promoción de la salud) y gobierno local (responsable de la promoción, asistencia técnica, supervisión y fiscalización de las JASS), los mismos que aportarán a la sostenibilidad de los servicios de saneamiento.
          `).alignment('justify').end,
        ]
      ],

        new Ol([
          [

            new Item({text:`ENFOQUES DE LA ESTRATEGIA`}).bold().end,
            [
              new Txt(`Entendemos como enfoques, aquellas perspectivas, valores, principios, teorías, métodos o estrategias que privilegiamos para comprender la realidad social y orientar las intervenciones en fortalecimiento.
              `).alignment('justify').end,
              new Ol([
                [
                  new Item({text:`FORTALECIMIENTO COMUNAL`}).bold().end,
                  [
                    new Txt(`Comprende acciones de capacitación en el marco de una intervención integral en agua y saneamiento, desarrolladas por un promotor de campo o facilitador social con el acompañamiento del Área Técnica Municipal; a través de las cuales se busca el desarrollo de capacidades de la población beneficiaria, a fin de asegurar la sostenibilidad de los proyectos de saneamiento; espacio que resulta propicio para integrar el enfoque del recurso hídrico en sus tres momentos: antes, durante y después de la obra de infraestructura.
                    `).alignment('justify').end,
  
                  ]
                ],
                [
                  new Item({text:`PARTICIPACIÓN INCLUSIVA`}).bold().end,
                  [
                    new Txt(`Las brechas de inclusión de las poblaciones que viven en condiciones de pobreza en relación al agua y saneamiento, implican retos en términos geográficos, de infraestructura, educación sanitaria, compromisos y cambios en hábitos y prácticas en agua y saneamiento. Entendiendo por inclusión la condición que asegura a las ciudadanas y ciudadanos sin excepción el ejercicio de sus derechos, acceso a servicios públicos de calidad, y participación social en condiciones de igualdad; resulta indispensable instalar procesos participativos para posibilitar el involucramiento, compromiso y adecuado uso de los servicios de agua y saneamiento que el estado a través del PNSR pone a su disposición. En el campo del agua y saneamiento, el enfoque participativo ha logrado creciente reconocimiento, e incluso ha generado modelos de gestión liderados por las propias comunidades. El empoderamiento de las comunidades, organizaciones de usuarios, gobiernos locales, y grupos
                    `).alignment('justify').end,
                    new Txt(`minoritarios consiste en generar las condiciones y mecanismos para participar en los procesos de toma de decisiones. (Foro Mundial del Agua, México 2006).
                    `).alignment('justify').end,
  
                  ]
                ]
              ]).separator(['1.13.1.','.']).end
             

            ]
            
            
            
            

          ],
          
          [
            new Item({text:`OBJETIVOS
            `}).bold().end,

            [
              new Ol([
                [
                  new Item({text:`OBJETIVOS GENERALES
                  `}).bold().end,
                  [
                    new Txt(`Fortalecer las capacidades de JASS, encargada de la Administración, Operación y Mantenimiento de los servicios, para asegurar la sostenibilidad de los sistemas propuestos.
                    `).alignment('justify').end

                  ]
                ],
                [
                  new Item({text:`OBJETIVOS ESPECÍFICOS
                  `}).bold().end,
                  [
                    new Txt(`Fortalecer a la JASS de base relacionadas con la gestión sostenible de los servicios de agua y saneamiento. Fortalecer las capacidades, habilidades y destrezas de los usuarios en administración, operación y mantenimiento. 
                    `).alignment('justify').end,
                    new Txt(`Promover conductas saludables y adecuadas prácticas de higiene de la población a través de procesos educativos.
                    `).alignment('justify').end

                  ]
                ]
                
              ]).separator(['1.13.2.','.']).end
            ],
            
            
            
            
          ],
          [
            new Item({text:`MODALIDAD DE CAPACITACIÓN
            `}).bold().end,
            [
              new Txt(``).alignment('justify').end,
              new Ol([
                [
                  new Item({text:`SECCIONES EDUCATIVAS
                  `}).bold().end,
                  [
                    new Txt(`Son espacios de aproximadamente dos horas en las que se aborda un tema, tomando en cuenta momentos básicos del aprendizaje: motivación (recuperación de saberes previos), incorporación de la nueva información y la evaluación. Es importante que las sesiones educativas se realicen a partir de los enfoques arriba mencionados.
                    `).alignment('justify').end

                  ]
                ],
                [
                  new Item({text:`TALLERES`}).bold().end,
                  [
                    new Txt(`Son espacios de un mínimo de 4 horas de duración y puede llegar hasta varios días de trabajo, en los que se abordan varios temas que son integrados en un tema mayor. Al abordaje de cada tema se le llama bloque temático y este a su vez tiene el formato de una sesión educativa.
                    `).alignment('justify').end,
                    new Txt(`El taller se caracteriza por desarrollarse en un clima de confianza y utilizar una metodología participativa en la que prevalece el diálogo, el trabajo de grupo, la colaboración y el uso de técnicas y herramientas que facilitan la construcción individual y colectiva de aprendizajes. La articulación de la teoría y la práctica promueve la estimulación de la reflexión, el análisis de problemas y la propuesta de alternativas de solución de la problemática que afecta la calidad individual y colectiva de las y los participantes, buscando, inclusive, la toma de decisiones y el compromiso.
                    `).alignment('justify').end
                  ]
                ],
                [
                  new Item({text:`CAPACITACIÓN EN SERVICIOS`}).bold().end,
                  [
                    new Txt(`Se implementa con el propósito de profundizar la articulación entre la teoría y la práctica directamente en campo, permitiendo a los aprendices a mejorar el desempeño en el corto plazo. Se sustenta en la idea según la cual los aprendizajes relevantes para el trabajo específico se adquieren en el propio ámbito de desempeño de las competencias logradas con y para la comunidad.
                    `).alignment('justify').end,
                    new Txt(`En el caso de la capacitación en servicio el facilitador o tutor acompaña al participante en la labor en su propia comunidad o ámbito de intervención, observa el desempeño, evalúa y da reforzamiento permanente. Para llevar a cabo la capacitación en servicio es necesario contar con herramientas de seguimiento y evaluación.
                    `).alignment('justify').end
                  ]
                ],
                [
                  new Item({text:`PASANTÍAS`}).bold().end,
                  [
                    new Txt(`Con estas actividades se busca que el participante observe a profundidad algún procedimiento que aborde diversas competencias sobre un tema en específico. Es necesario recordar que el pasante es el aprendiz que lleva adelante esta práctica con la intención de obtener experiencia de campo, mientras que el encargado de guiarlo debe de tener previo conocimiento de los temas a observar.
                    `).alignment('justify').end,
                    new Txt(`El objetivo de la pasantía es brindar experiencia al pasante y prepararlo para que pueda implementar en campo todas las competencias desarrolladas en el proceso de fortalecimiento de capacidades. Para llevar a cabo la pasantía es necesario contar con herramientas de seguimiento y evaluación.
                    `).alignment('justify').end
                  ]
                ],
                [
                  new Item({text:`GRUPOS DE INTER APRENDIZAJE`}).bold().end,
                  [
                    new Txt(`Son grupos pequeños de aproximadamente 4 a 6 personas en los que se afronta algún caso específico, ya sea para reforzar conocimientos o abordar algún tema en especial. Tiene como objetivo, el análisis, reflexión y resolución de los mismos.
                    `).alignment('justify').end
                  ]
                ]
                
                
                
                
               

              ]).separator(['1.13.3.','.']).end
            ]
            
            
          
            

          ],
         [
           new Item({text:`CONTENIDO Y METAS A DESARROLLAR CON LA JAZZ Y ATM`}).bold().end,
           [
             new Table([
              [{text:'PARTIDA',fillColor:paleta_color.cabecera_tabla.background,color:paleta_color.cabecera_tabla.fontColor}, {text:'DETALLE',fillColor:paleta_color.cabecera_tabla.background,color:paleta_color.cabecera_tabla.fontColor}, {text:'MEDIDA',fillColor:paleta_color.cabecera_tabla.background,color:paleta_color.cabecera_tabla.fontColor},{text:'CANT.',fillColor:paleta_color.cabecera_tabla.background,color:paleta_color.cabecera_tabla.fontColor} ],
              ['','PLAN DE CAPACITACIÓN PARA LA GESTIÓN DEL SERVICIO','',''],
              ['2','GESTIÓN DEL SERVICIO: JASS - ASISTENCIA TECNICA','',''],
              ['02.01', 'ACTIVIDADES PREPARATORIAS','','33.00'],
              ['02.01.01','ACTIVIDADES DE COMUNICACIÓN INTERPERSONAL Y GRUPAL','',''],
              ['02.01.01.01', 'ASAMBLEA DE APROBACIÓN DEL FONDO DE IMPLEMENTACIÓN Y CUOTA FAMILIAR',' GLB','11.00'],
              ['02.01.01.02', 'ASAMBLEA: ELECCIÓN, RATIFICACIÓN Y/O REACTIVACIÓN DEL CONCEJO DIRECTIVO DE LA JASS','GLB','11.00'],
              ['02.01.01.03','ASISTENCIA TÉCNICA: REGISTRO Y RECONOCIMIENTO DE LAS JASS EN LA MUNICIPALIDAD','GLB','11.00'],
              ['','ACTIVIDADES DURANTE LA EJECUCIÓN DE OBRAS','','198.00'],
              ['02.02.01','ACTIVIDADES DE COMUNICACIÓN INTERPERSONAL Y GRUPAL','',''],
              ['02.02.01.01','TALLER: USO Y HERAMIENTAS DE GESTIÓN DE LOS DIRECTIVOS DE LA JASS (LIBRO DE INVENTARIOS, CUADERNO DE SUPERVISIÓN, CITACIONES, NOTIFICACIONES , LIBRO PADRÓN DE USUARIOS Y LIBRO DE ACTAS)','GLB','11.00'],
              ['02.02.01.02','TALLER: I PARTE (LIDERAZGO) Y II PARTE (ADECUACIÓN DE ESTATUTOS, ROLES Y FUNCIONES DE LA JASS)','GLB','11.00'],
              ['02.02.01.03','TALLER: I PARTE (COMUNICACIÓN ASERTIVA Y GESTIÓN DE CONFLICTOS) Y II PARTE (REGLAMENTO INTERNO DE PRESTACIÓN DE SERVICIOS DE SANEAMIENTO)','GLB','11.00'],
              ['02.02.01.04','TALLER: ELABORACIÓN DEL PLAN DE TRABAJO DE LA JASS DEL PRESENTE AÑO.','GLB','11.00'],
              ['02.02.01.05','ASAMBLEA GENERAL DE USUARIOS: APROBACIÓN DEL ESTATUTO Y REGLAMENTO DE LA JASS','GLB','11.00'],
              ['02.02.01.06','TALLER: USO Y MANEJO DE RECIBOS, LIBRO DE CONTROL DE RECAUDOS PARA QUE LA JASS COBRE EL FONDO DE IMPLEMENTACIÓN.','GLB','11.00'],
              ['02.02.01.07','ASISTENCIA TÉCNICA: PROMOVER LA IMPLEMENTACIÓN DEL LOCAL DE LA JASS (A NIVEL DE ASESORAMIENTO Y SEGUIMIENTO)','GLB','11.00'],
              ['02.02.01.08','TALLER: AUTOESTIMA PARA LA GESTIÓN','GLB','11.00'],
              ['02.02.01.09','SESIÓN EDUCATIVA N° 001: PRIMERA PARTE USO Y HERAMIENTAS DE GESTIÓN DE LOS DIRECTIVOS DE LA JASS (RECIBOS, CUADERNO DE CONTROL DE LA CUOTA FAMILIAR Y DE RESERVA, Y LIBRO DE CAJA)','GLB','11.00'],
              ['02.02.01.10','SESIÓN EDUCATIVA N° 002: EL SISTEMA DE AGUA-IDENTIFICANDO LOS COMPONENTES (PARTES Y SUS FUNCIONES) EN COORDINACIÓN CON EL INGENIERO RESIDENTE','GLB','11.00'],
              ['02.02.01.11','SESIÓN EDUCATIVA N° 003: IMPORTANCIA DE LA DESINFECCIÓN DEL SAP','GLB', '11.00'],
              ['02.02.01.12','VISITA GUIADA: CONOCIMIENTO DEL AVANCE DE OBRA DE SU PROYECTO (JASS EN COORDINACIÓN CON EL ATM, AUTORIDADES COMUNALES E INGENIERO RESIDENTE)','UND','22.00'],
              ['02.02.01.13','TALLER: RENDICIÓN DE CUENTAS DE LA JASS, EVALUACIÓN MENSUAL Y ANUAL','GLB','11.00'],
              ['02.02.01.14','ASITENCIA TÉCNICA: ELABORACIÓN DEL PLAN OPERATIVO ANUAL (DEL SIGUIENTE AÑO) Y PRESUPUESTO DE LA JASS','GLB','11.00'],
              ['02.03.01.15','ASISTENCIA TÉCNICA AL CD DE LA JASS PARA LA RECEPCIÓN DE OBRA','GLB','11.00'],
              ['02.02.02','ACTIVIDADES DE MONITOREO Y EVALUACIÓN (ELABORADO POR EL SUPERVISOR SOCIAL)','',''],
              ['02.02.02.01','MEDICIÓN DE INDICADORES Y CUMPLIMIENTO DE METAS','GLB','11.00'],
              ['02.02.03','REMUNERACIONES','',''],
              ['02.02.03.01','PASANTIA DE LA JASS','GLB','11.00']
             ]).dontBreakRows(true).headerRows(1).end
           ],
           pdf.ln()
         ],
         [
           new Item({text:`REQUERIMIENTO DE RECURSOS DE (PRESUPUESTO) PARA LA IMPLEMENTACIÓN DEL PLAN DE GESTIÓN PARA LA PRESENTACIÓN DE LOS SERVICIOS
           `}).bold().end,
           [
             new Txt(`El costo de inversión para la ejecución del Plan de Gestión para la Prestación de los Servicios asciende la suma de S/. 26,152.50 Soles, sin IGV. (Ver Detalle en Presupuesto del Plan de Gestión para la Prestación de los Servicios)
             `).alignment('justify').end


           ]
         ],
         [
           new Item({text:`CRONOGRAMA
           `}).bold().end,
           [
             new Txt(`El Plan de Gestión para la Prestación de los Servicios, contempla la realización de talleres y sesiones educativas entre otras actividades sociales, tomando en cuenta las siguientes etapas:
             `).alignment('justify').end,
             new Table([
               [{text:'Etapas del Proyecto',fillColor:paleta_color.cabecera_tabla.background,color:paleta_color.cabecera_tabla.fontColor},{text:'Tiempo/Mes',fillColor:paleta_color.cabecera_tabla.background,color:paleta_color.cabecera_tabla.fontColor}],
               ['Ejecucion','8'],
               ['total','8']
             ]).dontBreakRows(true).headerRows(1).end,
             pdf.ln()

           ]
         ]
         
        ]).separator(['1.13.','.']).end

      ]
}















