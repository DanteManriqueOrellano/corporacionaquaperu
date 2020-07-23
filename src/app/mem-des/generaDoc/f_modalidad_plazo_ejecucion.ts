import { Ol, Item, Table, Txt, Cell, Ul, PdfMakeWrapper } from 'pdfmake-wrapper'
export function modalidad_plazo_ejecucion(){
    return [
        new Item({text:`MODALIDAD DE EJECUCION
        `}).bold().end,
        [
          new Txt(`El Proyecto “MEJORAMIENTO Y AMPLIACION DEL SISTEMA DE AGUA POTABLE Y SANEAMIENTO EN LOS ANEXOS COTANERAE, CHACACANTA, HUAYLLAHUIRQUI, ÑUÑOPATA, CONCHAPALLANA, CURANCO, TTASTAYOC, HUINCHO, VENTANA, PUMAMARCA Y ÑUÑOHUAYOC DEL C.P. PUMAMARCA DEL, DISTRITO DE TAMBOBAMBA, PROVINCIA DE COTABAMBAS – APURIMAC”, código SNIP: 372947 la ejecución de la obra será por la modalidad por contrata.
          `).alignment('justify').end
        ],
        [
          new Item({text:`PLAZO DE EJECUCION DEL PROYECTO
          `}).alignment('justify').bold().end,
          [
            new Txt(`Sistema de contratación del Proyecto: “MEJORAMIENTO Y AMPLIACION DEL SISTEMA DE AGUA POTABLE Y SANEAMIENTO EN LOS ANEXOS COTANERAE, CHACACANTA, HUAYLLAHUIRQUI, ÑUÑOPATA, CONCHAPALLANA, CURANCO, TTASTAYOC, HUINCHO, VENTANA, PUMAMARCA Y ÑUÑOHUAYOC DEL C.P. PUMAMARCA DEL, DISTRITO DE TAMBOBAMBA, PROVINCIA DE COTABAMBAS – APURIMAC”, código SNIP: 372947 , presentará un plazo de ejecución de 240 días calendarios (8 meses).
            `).alignment('justify').end
          ]
        ]
      ]
}

