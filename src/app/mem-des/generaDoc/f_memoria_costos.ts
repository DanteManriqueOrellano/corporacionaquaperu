import { item, OrderingList, paleta_color } from './herramientas/funciones';
import { Ol, Item, Txt, Table, PdfMakeWrapper } from 'pdfmake-wrapper';
export function memoria_costos() {
  const pdf = new PdfMakeWrapper()
  return [
    [
      new Item({ text: `MEMORIA DE COSTOS
      ` }).bold().end,
      [
        new Txt(`El Objetivo del Expediente Técnico “MEJORAMIENTO Y AMPLIACION DEL SISTEMA DE AGUA POTABLE Y SANEAMIENTO EN LOS ANEXOS COTANERAE, CHACACANTA, HUAYLLAHUIRQUI, ÑUÑOPATA, CONCHAPALLANA, CURANCO, TTASTAYOC, HUINCHO, VENTANA, PUMAMARCA Y ÑUÑOHUAYOC DEL C.P. PUMAMARCA DEL, DISTRITO DE TAMBOBAMBA, PROVINCIA DE COTABAMBAS – APURIMAC”. CODIGO SNIP: 372947, ha sido elaborado para ser ejecutado por Modalidad de Contrata a precios unitarios; el presupuesto de obra está basado en criterios técnicos específicos los cuales fueron elegidos para calcular el costo total de la obra, el cual está en función del análisis del costo de la mano de obra, precio de flete terrestre y flete rural, el precio de los materiales, equipo y maquinaria necesaria para llevar a cabo esta construcción, el cálculo de los metrados correspondientes a las actividades que formarán parte del proceso constructivo, la confección de los análisis de Costos Unitarios que evaluarán el costo de cada actividad, la formulación de los Gastos Generales o Costo Indirecto de la Obra; Utilidad e Impuestos y las Especificaciones Técnicas del Proyecto que definen los parámetros del proceso constructivo de la obra y de los materiales a ser usados en ella.
          `).alignment('justify').end,
        new Ol([
          [
            new Item({ text: `CONCEPTOS PRINCIPALES DEL ESTUDIOS DE COSTOS JORNALES
            ` }).bold().end,
            [
              new Txt(`Los costos de mano de obra que se utilizara para la ejecución de cada una de las partidas se encuentra vigente en la zona de proyecto, para lo cual se ha tomado costos establecidos a nivel del gobierno Región de Apurímac según RESOLUCION EJECUTIVA REGIONAL N° 172-2016-GR.APURIMAC/GR; lo cual se encuentra vigente y en la actualidad se viene pagando.
                `).alignment('justify').end,
              new Txt(`Los costos unitarios por concepto de mano de obra han sido referidos a la siguiente categorización:
                `).alignment('justify').end,
              new Txt([new Txt('Operario: ').bold().end, new Txt('19.00 H.H.').bold().end]).alignment('justify').end,
              new Txt([new Txt('Oficial: ').bold().end, new Txt('15.76 H.H.').bold().end]).alignment('justify').end,
              new Txt([new Txt('Peón: ').bold().end, new Txt(`14.17 H.H.
                `).bold().end]).alignment('justify').end,
              new Txt(`Materiales
                `).alignment('justify').bold().end,
              new Txt(`Los costos de los materiales que serán utilizados en cada una de las partidas, han sido determinados teniendo en cuenta los gastos que requieran hacerse para la obra, por ello; el costo incluye el impuesto General de las Ventas (IGV-18%), Los precios que han sido tomados por cotizaciones en la Ciudad de Abancay de fecha Febrero del 2018, lo cual se adjunta en el expediente tecnico.
                `).alignment('justify').end,
              new Txt(`EQUIPOS
              `).alignment('justify').bold().end,
              new Txt(`Los costos utilizados para los equipos corresponden a las tarifas de alquiler horas maquina, estos equipos son cotizados puestos en la Ciudad de Abancay, por lo que se requiere llevar a la obra, se adjunta cotizacion de quipos de fecha Febrero del 2018.
                `).alignment('justify').end,
              new Txt(`FLETE TERRESTRE
                `).alignment('justify').bold().end,
              new Txt(`Costo de flete terrestre de los materiales, para e flete de materiales se considera desde su lugar expendio que es la ciudad de Abancay para luego ser transportados hasta el almacenes de obra, para lo cual se adjunta el calculo de flete terrestre. Costo de flete terrestre de agregados, para el flete de agregados se considera desde la cantera de Challhuahuacho hasta los puntos adecuados de distribucion del anexo de Pumamarca, se adjunta el calculo de flete terrestre de agregados y plano ubicación de canteras.
                `).alignment('justify').end,
              new Txt(`Costo de flete rural, para el flete rural se considera desde almacen ubicado en la plaza del anexo de Pumamarca, hasta las obras proyectadas, asi como tambien para los agregados que es desde los puntos de distribucion hasta las obras proyectadas, se adjunta el calculo de flete rural.
                `).alignment('justify').end,
              new Txt(`PRECIOS UNITARIOS
                `).alignment('justify').bold().end,
              new Txt(`Los análisis de precios unitarios están elaborados en función al requerimiento real de la obra, conforme a lo estipulado para la ejecución de obras de Saneamiento Basico, como corresponde al cálculo real del costo directo. En general, los requerimientos de materiales, mano de obra, equipos y herramientas, están basados de acuerdo a los rendimientos según la actividad y zona de ubicación.
                `).alignment('justify').end,
              new Txt(`METRADOS
              `).alignment('justify').bold().end,
              new Txt(`Los metrados del expediente técnico corresponden a los obtenidos según la memoria de cálculo definitiva; se adjunta la justificación de metrados del proyecto, los cuales están desarrollados en función de los planos de diseño.
                `).end,
            ]
          ],
          [
            new Item({ text: `VALOR REFERENCIAL DEL PROYECTO` }).bold().end,
            [
              new Txt(`El valor referencial presupuestado del proyecto asciende a la suma de S/. 7, 986,254.31 (siete millones novecientos ochenta y seis mil Doscientos Cincuenta y cuatro con 31/100 soles). Incluido los Gastos Generales, utilidad, Impuesto General a las Ventas I.G.V., Gastos de Supervisión y expediente técnico. El valor referencial corresponde al mes de Febrero del 2018.
                `).alignment('justify').end,
              new Table([
                [{text:'Detalle',fillColor:paleta_color.cabecera_tabla.background,color:paleta_color.cabecera_tabla.fontColor,bold:true}, {text:'Precio',fillColor:paleta_color.cabecera_tabla.background,color:paleta_color.cabecera_tabla.fontColor}],
                ['SISTEMA DE AGUA POTABLE CURANCO - TTASTAYOC', '516,041.87'],
                ['SISTEMA DE SANEAMIENTO CURANCO - TTASTAYOC', '564,935.39'],
                ['MITIGACION AMBIENTAL', '77,913.89'],
                ['CAPACITACION, GESTION DE SERVICIO Y EDUCACION SANITARIA', '78,930.00'],
                ['COSTO DIRECTO', '5,285,022.99'],
                ['GASTOS GENERALES (11.40026%)', '602,506.43'],
                ['UTILIDAD (5%)', '264,251.15'],
                ['SUB TOTAL', '6,151,780.57'],
                ['IMPUESTO IGV (18%)', '1,107,320.50'],
                ['PRESUPUESTO DE OBRAS', '7,259,101.07'],
                ['EXPEDIENTE TECNICO', '373,840.00'],
                ['SUPERVISION DE OBRA', '353,313.24'],
                ['PRESUPUESTO DE INVERSION', '7,986,254.31'],
              ]).dontBreakRows(true).headerRows(1).end
            ],
            pdf.ln()
          ]
        ]).separator(['1.17.', '.']).end
      ]
    ]
  ]
}
