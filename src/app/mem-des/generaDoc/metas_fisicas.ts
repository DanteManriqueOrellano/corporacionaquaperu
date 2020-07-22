import { item, OrderingList, paleta_color } from './herramientas/funciones';
import { Ol, Item, Txt, Table } from 'pdfmake-wrapper';
export function metas_fisicas() {
    return [
        [
            new Item({ text: `RESUMEN DE METAS` }).bold().end,
            [
                new Txt(`METAS FÍSICAS DEL ANEXO PUCAP (REPETIR POR CADA ANEXO)`).alignment('justify').end,
                new Ol([
                    [
                        new Item({
                            text: `En siguiente cuadro se presenta el cuadro de re-unen de metas:
                        `}).bold().end,
                        [
                            new Txt(`RESUMEN DE METAS`).bold().alignment('justify').end,
                            new Table([

                                [{text:'Ítem',fillColor:paleta_color.cabecera_tabla.background,color:paleta_color.cabecera_tabla.fontColor}, {text:'Descripción',fillColor:paleta_color.cabecera_tabla.background,color:paleta_color.cabecera_tabla.fontColor}, {text:'Und.',fillColor:paleta_color.cabecera_tabla.background,color:paleta_color.cabecera_tabla.fontColor}, {text:'Metrado',fillColor:paleta_color.cabecera_tabla.background,color:paleta_color.cabecera_tabla.fontColor}],
                                ['1', 'CAPTACION DE MANANTIAL DE LADERA T-1', ' Und.', '1'],
                                ['2', 'LINEAA DE CONDUCCION', ' KM', '3.28'],
                                ['3', 'CAMARA REPARTIDORA DE CAUDALES', 'Und.', '2'],
                                ['4', 'CAMARA ROMPE PRESION TIPO 6', 'Und.', '1'],
                                ['5', 'VALVULA DE PURGA EN L.C ', 'Und.', '2'],
                                ['6', 'VALVULA DE AIRE EN L.C', 'Und.', '1'],
                                ['7', 'CRUCE AEREO L=10m ', 'Und.', ' 1'],
                                ['8', 'RESERVORIO V=2m3', 'Und.', '2'],
                                ['9', 'RESERVORIO V=5m3', 'Und.', '1'],
                                ['10', ' LINEAA DE ADUCCION', 'KM', '312'],
                                ['11', 'RED DE DISTRIBUCION', 'KM', '4.14'],
                                ['12', 'CAMARA ROMPE PRESION TIPO 7', 'Und.', '1'],
                                ['13', ' VALVULA DE CONTROL Y REGULACION ', 'Und.', '11'],
                                ['14', 'VALVULA DE PURGA EN R.D', 'Und.', '11'],
                                ['15', 'CONEXIONES DOMICILIARIAS ', 'Und.', '60'],
                                ['16', 'LAVADERO TIPO DOMICILIARIO', 'Und.', '60'],
                                ['17', 'UBS CON ARRASTRE HIDRAULICO DOMICILIARIO', 'Und.', '60'],
                                ['18', 'PLAN DE MITIGACION AMBIENTAL', 'GLB', '1'],
                                ['19', 'PLAN DE CAPACITACION EN LA GESTION DEL SERVICIO Y EDUCACION SANITARIA', 'GLB', '1'],

                            ]).dontBreakRows(true).headerRows(1).end

                        ]
                    ]
                ]).separator(['1.15.', '.']).end

            ]
        ]



    ]

}



