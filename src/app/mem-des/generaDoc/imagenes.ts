import { PdfMakeWrapper, Txt, Ol, Ul, Item, Table, Cell, Img, Stack } from 'pdfmake-wrapper';


export async function imagenes(){
   return {
        'cover1':await new Img('https://firebasestorage.googleapis.com/v0/b/corporacionaquaperu.appspot.com/o/test%2F1593991742352_logo%20carhuaz.jpg?alt=media&token=63e08acb-04a2-406a-837c-a3bc11e91729').build(),
        'cover2':await new Img('https://firebasestorage.googleapis.com/v0/b/corporacionaquaperu.appspot.com/o/test%2F1593991742352_logo%20carhuaz.jpg?alt=media&token=63e08acb-04a2-406a-837c-a3bc11e91729').build(),
        'cabecera_pagina':await new Img('https://firebasestorage.googleapis.com/v0/b/corporacionaquaperu.appspot.com/o/test%2F1593992463328_logocascapara%20cabecera.png?alt=media&token=7da56fc4-7c16-4eb6-a893-279362c83781').build(),
        'pie_pagina':await new Img('https://firebasestorage.googleapis.com/v0/b/corporacionaquaperu.appspot.com/o/test%2F1593992194087_logocascapara%20pie.png?alt=media&token=27e014a0-8c90-48bd-a815-7ae0925f02c5').build(),   
    }
}

