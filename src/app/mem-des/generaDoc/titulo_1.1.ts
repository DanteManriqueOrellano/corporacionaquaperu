import {Txt, Ol, Ul, Item, Table, Cell, Img, Stack } from 'pdfmake-wrapper';
export function titulo(){

    return new Txt('"CREACIÓN Y MEJORAMIENTO DEL SISTEMA DE SANEAMIENTO BÁSICO Y DEL SISTEMA DE AGUA POTABLE DE LAS LOCALIDADES, PUCAP, PAMPAHUASI, TINCO, HUARACPAMPA – DISTRITO DE CASCAPARA - YUNGAY – ANCASH”')
            .alignment('center')
            .bold().end;
}