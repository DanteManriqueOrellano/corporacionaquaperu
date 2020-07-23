import { Img } from 'pdfmake-wrapper';


export async function pie_pagina(){

    return await new Img('pie_pagina', true).width(590).height(50).alignment('center').build()
}