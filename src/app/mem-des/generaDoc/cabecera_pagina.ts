import { Img } from 'pdfmake-wrapper';


export async function cabecera_pagina(){

    return await new Img('cabecera_pagina', true).width(590).height(80).alignment('center').build()
}