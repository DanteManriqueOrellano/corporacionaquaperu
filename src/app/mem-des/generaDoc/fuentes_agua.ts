import { item, OrderingList, table, tablev2 } from './herramientas/funciones';
import { Ol, Item, Txt, Ul, Table, PdfMakeWrapper } from 'pdfmake-wrapper';
import { data } from 'src/app/eliminar-pdf/eliminar-pdf.component';
import { nombre_proyecto } from './nombre_proyecto';

export function fuentes_agua(){
    return new Item({text:`FUENTES DE AGUA IDENTIFICADAS PARA EL PROYECTO`}).end
}