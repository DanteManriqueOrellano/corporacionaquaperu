import { item, OrderingList } from './herramientas/funciones';
import { Ol, Item, Txt, Ul, Table, Cell, PdfMakeWrapper } from 'pdfmake-wrapper';
const colores={
  partida:{textColor:'red',background:'pink'},
  subpartida:{textColor:'red',background:'pink'},
  item:{textColor:'red',background:'pink'},
  detalle:{textColor:'red',background:'pink'},
  fondo:{textColor:'red',background:'pink'},
}


export function plan_mitigacion_ambiental() {
  const pdf = new PdfMakeWrapper()
  return [

    new Item({
      text: `PLAN DE MITIGACION AMBIENTAL
        `}).bold().end,
    new Ol([
      [
        new Item({
          text: `OBJETIVOS
            `}).bold().end,
        [
          new Txt(`Formular un conjunto de medidas de prevención y mitigación de los impactos ambientales significativos, de manera que sus efectos en el ambiente sean neutralizados o reducidos hasta cumplir con la normativa ambiental vigente y las buenas prácticas ambientales, durante la construcción y operación del proyecto mejoramiento y ampliación de los servicios de saneamiento básico en las localidades beneficiadas.
              `).alignment('justify').end,
        ]
      ],
      [
        new Item({
          text: `ALCANCES
            `}).bold().end,
        [
          new Txt(`El alcance del presente plan se indica a continuación:`).alignment('justify').end,
          new Ul([
            new Item({ text: `Etapa de construcción del proyecto mejoramiento y ampliación de los servicios de saneamiento básico, en el área de influencia ambiental del proyecto.` }).alignment('justify').end,
            new Item({ text: `Etapa de operación del proyecto mejoramiento y ampliación de los servicios de saneamiento básico, durante su vida útil.` }).alignment('justify').end,
          ]).end
        ]
      ],
      [
        new Item({
          text: `PROGRAMAS
            `}).bold().end,
        new Ol([
          [
            new Item({ text: `PROGRAMA DE MITIGACIÓN AMBIENTAL` }).bold().end,
            [
              new Txt(`Se realizará un conjunto de actividades que se organizara con el propósito de mantener el equilibrio ambiental, mediante la implementación de acciones de prevención y acciones de mitigación, que conlleva a l uso y manejo eficiente de recursos naturales. Así mismo sirven para prevenir mitigar e incluso compensar los impactos ambientales ocasionados durante la construcción del proyecto.
                  `).alignment('justify').end,

            ]
          ],
          [
            new Item({
              text: `PROGRAMA DE PARTICIPACIÓN Y CONSULTA CIUDADANA
                `}).bold().end,
            [
              new Txt(`La Consulta Ciudadana es un mecanismo de participación ciudadana que opera como un espacio para invitar a las personas a participar e incorporar sus opiniones. Se configura como una herramienta que busca recabar las opiniones que los ciudadanos tengan sobre la mitigación ambiental, mediante la difusión de talleres ambientales y talleres de capacitación ciudadana Este proceso de consulta pretende generar una respuesta de la autoridad que incluya las respuestas y compromisos derivados de los planteamientos surgidos durante la consulta.
                  `).alignment('justify').end,

            ]
          ],
          [
            new Item({
              text: `PROGRAMA DE SEGURIDAD Y SALUD
                `}).bold().end,
            [
              new Txt(`Este debe ser elaborado para que sea una guía en lo que se refiere a la gestión de Seguridad de la empresa, es decir, los pasos que deben ser dados por la empresa para mantener la Seguridad y la Salud Laboral. 
                  `).alignment('justify').end,
              new Txt(`De acuerdo a lo antes expuesto la empresa ejecutora declara como prioridad de la Organización, la ejecución y seguimiento de las políticas de seguridad, emanadas del Órgano de Salud y seguridad laboral, como forma de garantizar:
                  `).alignment('justify').end,
              new Ul([
                new Item({ text: `El cumplimiento a la normativa que rige la materia.` }).alignment('justify').end,
                new Item({ text: `La integridad física y moral de sus trabajadores. La protección de los bienes de la empresa.` }).alignment('justify').end,
                new Item({ text: `La protección al ambiente.` }).alignment('justify').end,
              ]).end

            ]
          ],
          [
            new Item({
              text: `PROGRAMA DE SEGURIDAD Y CONTROL
                `}).bold().end,
            [
              new Txt(`Tal y como establece el documento de referencia, debe establecerse un plan de seguimiento y control ambiental que permita disponer de información continua sobre la incidencia y evolución ambiental durante el proyecto. Dicho información debe recopilar, de forma periódica, información acerca de los siguientes puntos:
                  `).alignment('justify').end,
              new Ul([
                new Item({ text: `Monitoreo de calidad de aire Monitoreo de calidad de agua.` }).end,
                new Item({ text: `Monitoreo de calidad de ruido ambiental` }).end
              ]).end

            ]
          ],
          [
            new Item({
              text: `RESUMEN DE PRESUPUESTO MITIGACIÓN AMBIENTAL
                `}).bold().end,
            [
              new Table([
                [
                  new Cell(new Txt(`Item`).color(colores.partida.textColor).end).fillColor(colores.partida.background).end ,
                  new Cell(new Txt(`Descripción`).color(colores.partida.textColor).end).fillColor(colores.partida.background).end, 
                  new Cell(new Txt(`Und.`).color(colores.partida.textColor).end).fillColor(colores.partida.background).end, 
                  new Cell(new Txt(`Metrado`).color(colores.partida.textColor).end).fillColor(colores.partida.background).end,
                  new Cell(new Txt(`Precio S/.`).color(colores.partida.textColor).end).fillColor(colores.partida.background).end,
                  new Cell(new Txt(`Parcial`).color(colores.partida.textColor).end).fillColor(colores.partida.background).end],
                ['01', 'PLAN DE MITIGACION AMBIENTAL', '', '','', '77,913.89'],
                ['01.01', 'PROGRAMA DE MITIGACION AMBIENTAL', '','', '', '16,964.33'],
                ['01.01.01', 'ACCIONES DE PREVENCION', '','','','2,350.00'],
                ['01.01.01.01', 'CAPACITACION AMBIENTAL PARA TRABAJADORES DE OBRA', 'glb', '10.00', '235.00', '2,350.00'],
                ['01.01.02', 'ACCIONES DE MITIGACION','','','', '11,727.64'],
                ['01.01.02.01', 'SUMINISTRO E INSTALACION DE BAÑOS PORTATILES', 'und', '3.00', '1,133.71', '3,401.13'],
                ['01.01.02.02', 'SUMINISTRO E INTALACION DE CONTENEDORES', ' und', '6.00', '450.65', '2,703.90'],
                ['01.01.02.03', 'CONTROL DE POLVO Y EMISORES EN AREAS DE TRABAJO', 'm2', '11,963.00', '0.47', '5,622.61'],
                ['01.01.03', 'MICRORELLENO SANITARIO','','','', '2,886.69'],
                ['01.01.03.01', 'EXCAVACION MANUAL EN TERRENO NORMAL', 'm3', '32.95', '33.36', '1,099.21'],
                ['01.01.03.02', 'SUMINISTRO E INSTALACION DE GEOMEMBRANA HDPE E=1.5mm', 'm2', '80.30', '22.26', '1,787.48'],
                ['01.02', 'PROGRAMA DE CAPACITACION Y CONSULTA CIUDADANA','','','','8,756.50'],
                ['01.02.01', 'RECURSOS PARA RESPUESTAS ANTE EMERGENCIAS EN SEGURIDAD Y SALUD', 'glb', '1.00', '2,875.41', '2,875.41'],
                ['01.02.02', 'CAPACITACIÓN EN SEGURIDAD Y SALUD', 'glb', '1.00', '262.50', '262.50'],
                ['01.02.03', 'SEÑALIZACIÓN TEMPORAL DE SEGURIDAD', 'glb', '1.00', '1,118.59', '1,118.59'],
                ['01.02.04', 'PLAN DE SEGURIDAD Y SALUD EN EL TRABAJO', 'glb', '1.00', '4,500.00', '4,500.00'],
                ['01.03', 'PROGRAMA DE SEGURIDAD Y SALUD OCUPACIONAL','','','', '17,625.00'],
                ['01.03.02', 'TALLER DE PARTICIPACION Y CONSULTA CIUDADANA EN ASUNTOS AMBIENTALES CON MIEMBROS DEL JASS', 'evto', '11.00', '425.00', '4,675.00'],
                ['01.03.03', 'TALLER DE PARTICIPACION Y CONSULTA CIUDADANA EN ASUNTOS AMBIENTALES CON LOS POBLADORES', 'evto', '11.00', '425.00', '4,675.00'],
                ['01.03.04', ' DIFUSION DE TALLERES AMBIENTALES EN MEDIOS DE COMUNICACION', 'glb', '1.00', '3,600.00', '3,600.00'],
                ['01.04', 'PROGRAMA DE SEGUIMIENTO Y CONTROL','','','', '14,182.20'],
                ['01.04.01', 'MONITOREO DE CALIDAD DE RUIDO AMBIENTAL', 'glb', '1.00', '3,262.71', '3,262.71'],
                ['01.04.02', 'MONITOREO DE CALIDAD DEL AGUA', 'glb', '1.00', '8,250.00', '8,250.00'],
                ['01.04.03', 'MONITOREO DE CALIDAD DEL AIRE', 'glb', '1.00', '2,669.49', '2,669.49'],
                ['01.05', 'PLAN DE CIERRE DE OBRA','','','', '20,385.86'],
                ['01.05.01', 'ESTABILIZACION DE TALUDES','','','', '10,044.00'],
                ['01.05.01.01', 'REPOSICION DE SUELO ORGANICO H=0.30m', 'm2', '1,800.00', '2.38', '4,284.00'],
                ['01.05.01.02', 'REVEGETACION CON ESPECIES NATIVAS', 'm2', '1,800.00', '3.20', '5,760.00'],
                ['01.05.02', 'CIERRE DE ALMACEN Y PATIO DE MAQUINAS','','','', '3,348.00'],
                ['01.05.02.01', 'REPOSICION DE SUELO ORGANICO H=0.30m', 'm2', '600.00', '2.38', '1,428.00'],
                ['01.05.02.02', 'REVEGETACION CON ESPECIES NATIVAS', 'm2', '600.00', '3.20', '1,920.00'],
                ['01.05.03', 'CIERRE DE CANTERAS','','','','6,993.86'],
                ['01.05.03.01', 'REVEGETACION CON ESPECIES NATIVAS', 'm2', '800.00', '3.20', '2,560.00'],
                ['01.05.03.02', 'REPOSICION DE SUELO ORGANICO H=0.30m','m2', '800.00', '2.38', '1,904.00'],
                ['01.05.03.03', 'TRATAMIENTO DE SUELO CONTAMINADO CON HIDROCARBUROS', 'glb', '1.00', '2,529.86', '2,529.86'],
                



              ]).dontBreakRows(true).headerRows(1).end,
              pdf.ln()


            ]
          ]

        ]).separator(['1.11.3.', '.']).end,


      ]


    ]).separator(['1.11.', '.']).end

  ]
}


