import { item, OrderingList, table, tablev2, paleta_color } from './herramientas/funciones';
import { Ol, Item, Txt, Ul, Table, PdfMakeWrapper, Cell } from 'pdfmake-wrapper';
import { nombre_proyecto } from './f_nombre_proyecto';

export function fuentes_agua() {
    return [
        new Item({ text: `FUENTES DE AGUA IDENTIFICADAS PARA EL PROYECTO` }).bold().end,
        [
            new Txt(`1.- “LOS MANANTES DE LOS ANEXOS DEL CENTRO POBLADO DE PUMAMARCA ”`).bold().end,
            new Txt(`EL CENTRO POBLADO de Pumamarca cuenta con una captación cuya ubicación se encuentra en las coordenadas 79796404.03 E, 8447277.45 N y a una altitud de 3,904 m.s.n.m. En el siguiente cuadro se describe el aforo de cada localidad.
            `).end,
            new Table([

                [new Cell(new Txt('RECURSO HÍDRICO DISPONIBLE').color(paleta_color.cabecera_tabla.fontColor).end).fillColor(paleta_color.cabecera_tabla.background).end,
                {text:'COORDENADAS UTM (E.N)',colSpan:2, fillColor:paleta_color.cabecera_tabla.background,color:paleta_color.cabecera_tabla.fontColor},{},
                {text:'COTA (M.S.N.M)',fillColor:paleta_color.cabecera_tabla.background,color:paleta_color.cabecera_tabla.fontColor,rowSpan:2},{text:'Q.aforo (l/s)',fillColor:paleta_color.cabecera_tabla.background,color:paleta_color.cabecera_tabla.fontColor,rowSpan:2},{text:'Q.acreditado por el A.L.A  (l/s)',fillColor:paleta_color.cabecera_tabla.background,color:paleta_color.cabecera_tabla.fontColor,rowSpan:2}],
                [{text:'Localidad-Manante',fillColor:paleta_color.cabecera_tabla.background,color:paleta_color.cabecera_tabla.fontColor},{text:'E',fillColor:paleta_color.cabecera_tabla.background,color:paleta_color.cabecera_tabla.fontColor},{text:'N',fillColor:paleta_color.cabecera_tabla.background,color:paleta_color.cabecera_tabla.fontColor},{},{},{}],
                ['pucap-lluctu','10','20','100','200','plop'],
                ['pucap-llacta','10','20','100','200','plop'],
                
            ]).dontBreakRows(true).headerRows(2).alignment('center').end,
            


        ]
    ]
}