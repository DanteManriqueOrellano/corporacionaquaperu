import { item, OrderingList } from './herramientas/funciones';
import { Ol, Item, Txt, Table, Ul, PdfMakeWrapper } from 'pdfmake-wrapper';
export function parametros_disenio_calculo() {
    const pdf = new PdfMakeWrapper();
    return [

        [
            new Item({ text: `PARAMETROS DE DISEÑO Y CALCULO
            ` }).bold().end,
            [
                [
                    new Txt(`Los parámetro de diseño para el proyecto han sido calculados en concordancia a la norma “ GUÍA DE OPCIONES TECNOLÓGICAS PARA SISTEMAS DE ABASTECIMIENTO DE AGUA PARA CONSUMO HUMANO Y SANEAMIENTO EN EL ÁMBITO RURAL” y al reglamento nacional de edificaciones.
                    `).alignment('justify').end

                ],
                new Ol([
                    [
                        new Item({ text: `PARÁMETROS DE DISEÑO DE LOS ANEXOS` }).bold().end,
                        [
                            new Txt(`Número de viviendas.
                            `).alignment('justify').bold().end,
                            new Txt(`CUADRO N° 22: RESUMEN VIVIENDAS DE LOS CASERÍOS
                            `).end,
                            new Table([
                                ['Anexos','Nº Viviendas','Total Beneficiarios'],
                                ['Pucap',114,342]
                            ]).headerRows(1).dontBreakRows(true).end,
                            pdf.ln(),
                            new Txt(`Densidad Poblacional`).bold().end,
                            new Txt(`A continuación, se presentan los parámetros utilizados para calcular la demanda de agua para el proyecto:
                            `).alignment('justify').end,
                            new Txt(`Cuadro: Resumen de Parámetros de Diseño - Anexo Curanco (repetir para cada anexo)`).alignment('justify').bold().end,
                            new Table([
                                ['Detalle','Sin Proyecto','Con Proyecto'],
                                ['Población Inicial',196,169],
                                ['Población con servicio de agua potable',196,169],
                                ['N° total de Viviendas',196,169],
                                ['N° de Viviendas con conexión domiciliaria',196,169],
                                ['N° de Viviendas sin conexión domiciliaria',196,169],
                                ['N° de Habitantes con conexión domiciliaria',196,169],
                                ['N° de Habitantes sin conexión domiciliaria',196,169],
                                ['Densidad poblacional (hab/viv)',196,169],
                                ['Dotación domiciliaria (l/hab/día)',196,169],
                                ['Dotación de pob.no conectada (l/hab/d)',196,169],
                                ['Cobertura Agua Potable',196,169],
                               
                            ]).dontBreakRows(true).headerRows(1).end,
                            pdf.ln(),
                            new Txt(`Con la ejecución del proyecto se plantea generar una cobertura del 100% de la población al servicio de agua potable. se consideró un consumo medio de la población de 80L/hab./día.
                            `).alignment('justify').end,
                            new Txt(`Población actual:`).alignment('justify').bold().end,
                            new Txt(`La población de diseño es la que corresponde al anexo de Curanco, del C.P: de Pumamarca, tal como se muestra en el siguiente cuadro.
                            `).alignment('justify').end,
                            new Table([
                                [{text:'anexo',rowSpan:2},{text:'Cantidad de Usuarios',colSpan:2},{}],
                                [{},'Viviendas','Población'],
                                ['asd','asd','asd']
                            ]).dontBreakRows(true).headerRows(2).end,
                            pdf.ln(),
                            new Txt(`Tasa de Crecimiento 
                            `).bold().end,
                            new Txt(`Según los términos de referencia la tasa de crecimiento a usar es la tasa inter censal a nivel distrital, a partir de los cuales se hará un análisis para evaluar si son muy altas o muy bajas.
                            Se han calculado las diferentes tasas de crecimiento entre niveles de gobierno (local, distrital, provincial y regional) y se tomará la tasa de crecimiento de 0.50%.
                            `).alignment('justify').end,

                            new Table([
                                [{text:'Coeficiente de Crecimiento Anual',colSpan:7,alignment:'center'},{},{},{},{},{},{}],
                                ['Año','Pa(Hab)','t (años)','P Pf - Pa','Pa.t','r p/Pa.t','r.t'],
                                [1994,32654,'','','','','']
                            ]).dontBreakRows(true).headerRows(2).end,
                            new Txt(`Fuente: https://www.inei.gob.pe/estadisticas/indice-tematico/poblacion-y-vivienda/
                            `).end,
                            new Txt(`r= 0.7 (Nivel Regional)`).bold().end,

                            new Table([
                                [{text:'Coeficiente de Crecimiento Anual',colSpan:7,alignment:'center'},{},{},{},{},{},{}],
                                ['Año','Pa(Hab)','t (años)','P Pf - Pa','Pa.t','r p/Pa.t','r.t'],
                                [1981,32654,'','','','','']
                            ]).dontBreakRows(true).headerRows(2).end,
                            new Txt(`Fuente: https://www.inei.gob.pe/estadisticas/indice-tematico/poblacion-y-vivienda/
                            `).end,
                            new Txt(`r= 0.5% (Nivel Provincial)`).bold().end,
                            new Table([
                                [{text:'Coeficiente de Crecimiento Anual',colSpan:7,alignment:'center'},{},{},{},{},{},{}],
                                ['Año','Pa(Hab)','t (años)','P Pf - Pa','Pa.t','r p/Pa.t','r.t'],
                                [1981,32654,'','','','','']
                            ]).dontBreakRows(true).headerRows(2).end,
                            new Txt(`Fuente: https://www.inei.gob.pe/estadisticas/indice-tematico/poblacion-y-vivienda/
                            `).end,
                            new Txt(`r= 0.5% (Nivel Distrital)`).bold().end,

                            new Table([
                                [{text:'PERU: TASAS DE CRECIMIENTO MEDIO ANUAL SEGUN DEPARTAMENTOS,  1995 - 2015',colSpan:5,alignment:'center'},{},{},{},{}],
                                [{text:'Departamento', rowSpan:2 ,alignment:'center'},{text:'Años',colSpan:4,alignment:'center'},{},{},{}],
                                [{},'1995 - 2000','2000 - 2005','2005 -2010','2010 - 2015']
                                
                            ]).dontBreakRows(true).headerRows(2).end,
                            new Txt(`FUENTE: https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib0015/N120/anexo064.htm
                            `).alignment('justify').end,
                            new Txt(`COEFICIENTE ASUMIDO: r = 0.5 % (para el Distrito de Cascapara)`).alignment('justify').end,
                            new Txt(`PERIODO DE DISEÑO: 20 AÑOS`).end,
                            new Txt(`Dotación de agua`).end,
                            new Txt(`Para el presente estudio solo se considera la demanda de agua de uso poblacional (es el único uso del manantial).
                            `).alignment('justify') .end,
                            new Txt(`Para el análisis de la demanda del servicio de agua potable para el consumo doméstico se requerirá determinar el tipo de la Unidad Básica de saneamiento que se instalará para lo cual se debe de tener en cuenta las siguientes dotaciones (en lt/hab/día), la cual está determinada por el tipo de Unidad Básica de Saneamiento (UBS) para las tres regiones del País.
                            `).alignment('justify').end,
                            new Txt(`CUADRO N°23: DOTACIÓN SEGÚN REGIÓN Y TIPO DE UBS ÁMBITO RURAL
                            `).bold().alignment('justify').end,
                            new Table([
                                ['TIPO DISPOSICIÓN DE EXCRETAS','COSTA','SIERRA','SELVA'],
                                ['Con Arrastre Hidráulico',90,80,100]
                            ]).dontBreakRows(true).headerRows(1).end,
                            new Txt(`Fuente: Guía Opciones Tecnológicas para sistemas de abastecimiento de agua para consumo humano y saneamiento en el ámbito rural
                            `).bold().alignment('justify').end,
                            new Ul([
                                new Item({text:'Coeficiente de consumo máximo diario: K1= 1.3'}).end,
                                new Item({text:'Coeficiente de consumo máximo horario: K2= 2.0'}).end,
                                new Item({text:`Coeficiente de regulación del reservorio: 25%
                                `}).end,
                            ]).end
                        ]
                    ],
                    [
                        new Item({ text: `CÁLCULO
                        ` }).bold().end,
                        [
                            new Txt(`POBLACIÓN FUTURA
                            `).bold().end,
                            new Txt(`Para el cálculo de la población futura se adoptó con el método matemático, que estima para una población en franco crecimiento, que corresponde al método de interés simple, se calculará con la siguiente fórmula.
                            `).alignment('justify').end,
                            new Txt(`Método de interés simple:`).end,
                            new Txt(`CUADRO N°24: DOTACIÓN SEGÚN REGIÓN Y TIPO DE UBS ÁMBITO RURAL
                            `).bold().end,
                            new Table([
                                [{text:'Localidad',rowSpan:2},{text:'Cantidad de Usuarios',alignment:'center',colSpan:3},{},{},{text:'Población Futura',rowSpan:2}],
                                [{},{text:'Viviendas'},{text:'Población Actual'},{text:'Tasa de Crecimiento'},{}]
                            ]).dontBreakRows(true).headerRows(2).end,
                            pdf.ln(),
                            new Txt(`CONSUMO MEDIO DIARIO Qm`).bold().end,
                            new Txt(`Es el promedio de los gastos diarios durante un año de registros expresados en lt/seg.`).end,
                            new Txt(`CONSUMO MÁXIMO DIARIO Qmd`).bold().end,
                            new Txt(`Se define como el día de máximo consumo de una serie de registros durante los 365 días. El consumo máximo diario se puede relacionar con el caudal promedio como obteniéndose la siguiente expresión:
                            `).alignment('justify').end,
                            new Txt('Para proyecto se adoptará Kdmc  = 1.30').bold().end,
                            new Txt(`CONSUMO MÁXIMO HORARIO  Qmh`).bold() .end,
                            new Txt(`Se define como la hora máxima de consumo. El consumo máximo horario está relacionado respecto al caudal promedio, mediante el coeficiente Kmh.
                            `).alignment('justify').end,
                            new Txt(`Para el proyecto se adoptará Kmh = 2.00`).bold().end,
                            new Txt(`VOLUMEN DE ALMACENAMIENTO (V almacenamiento)
                            `).bold().end,
                            new Txt(`El volumen que garantizara el buen funcionamiento hidráulico del sistema y el mantenimiento de un servicio eficiente será para t 20 años. Representado por la siguiente expresión:
                            `).alignment('justify').end,

/**la table proyecccion de la demanda de agua esta como anexo */



    
    
                        ]
                    ]
                ]).separator(['1.7.', '.']).end

            ]
            

        ]






    ]
}