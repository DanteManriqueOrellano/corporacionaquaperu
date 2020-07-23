import { Ol, Item, Table, Txt, Cell, Ul, PdfMakeWrapper } from 'pdfmake-wrapper'
const cliente ='Municipalidad Distrital de Cascapara';
const localidades = ['Pucap','Pampahuasi'];
const distrito = 'Cascapara'
export function propietario_obra(){
    return  [
        new Item({text:`PROPIETARIO DE LA OBRA
        `}).alignment('justify').bold().end,
        [
          new Item({text:`El propietario de la Obra es la ${cliente}, que luego la transferirá a la JASS de estas comunidad localidades. El propietario final de la obra serán los caseríos de ${localidades} del distrito de ${distrito}. La población beneficiaria de la infraestructura de servicios de agua potable y saneamiento proyectados.
        `}).alignment('justify').end,
        new Item({text:`La Junta Administradora de los Servicios de Saneamiento (JASS) es la que se encuentra debidamente inscrita y reconocida por la ${cliente}, con el compromiso de asumir la responsabilidad de administrar, operar y mantener el servicio proyectado.
        `}).alignment('justify').end,
        new Item({text:`El financiamiento de los costos de administración, operación y mantenimiento, serán cubiertos con las cuotas que pagarán los usuarios por cada uno de los servicios prestados, cubriendo éstos satisfactoriamente dichos costos
        `}).alignment('justify').end,

        ]

      ]
}