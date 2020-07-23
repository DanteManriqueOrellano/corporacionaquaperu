import { Ol, Item, Table, Txt, Cell, Ul, PdfMakeWrapper } from 'pdfmake-wrapper'
const cliente = 'Municipalidad Provincial de Cotabamba'
export function capacidad_operativa_operador(){
  

    return  [
        new Item({text:`CAPACIDAD OPERATIVA DEL OPERADOR
        `}).bold().end,
        [
          new Txt(`En la fase de post ejecución, la entidad encargada de la administración, operación y mantenimiento del servicio de Agua potable y Saneamiento será la Junta Administradora de Servicios de Saneamiento de las localidades intervenidas, La estrategia de intervención en el Ámbito rural a nivel de Gobiernos locales, son planteadas conforme a la política y al marco legal vigente; por lo tanto la Municipalidad responsable del proyecto y los especialistas sociales, aseguran la sostenibilidad de los proyectos mediante la capacitación que se imparte a los usuarios del sistema.
          `).alignment('justify').end,
          new Txt(`Las responsabilidades y atribuciones de las JASS se regirán mediante Estatutos y Reglamentos, bajo la supervisión y asesoramiento del Responsable de Saneamiento de la Municipalidad responsable del proyecto, es necesario precisar que en la etapa de pre inversión las JASS han quedado constituidas y reconocidas mediante Resolución del Consejo Municipal. La Municipalidad Provincial de Cotabambas - Tambobamba, será el encargado de monitorear y mantener la calidad del agua en el sistema.
          `).alignment('justify').end,
          new Txt(`Para cubrir los costos de Administración, Operación y Mantenimiento del Sistema de Agua, la JASS de los anexos de Cotanerae, Chacacanta, Huayllahuirqui, Ñuñopata, Conchapallana, Curanco, Ttastayoc, Huincho, Ventana, Pumamarca y Ñuñohuayoc del C.P. de Pumamarca del, distrito de Tambobamba, provincia de Cotabambas – Apurímac” en asamblea general de usuarios, determinarán una cuota familiar o tarifa mensual en función a la realidad socio-económica de la población.
          `).alignment('justify').end,
          new Txt(`El cumplimiento de la Administración, Operación y Mantenimiento del Servicio de Agua Potable, será de acuerdo al Plan de Trabajo Anual de la JASS, aprobado en la Asamblea General de usuarios con participación de los especialistas sociales.
          `).alignment('justify').end,
          new Txt(`El anexo cuenta con un JASS, cuenta con un operador además de contar con recursos económicos necesarios para poder pagar al operador especializado para este tipo de trabajo, por lo tanto la JASS realiza los trabajos de mantenimiento 2 veces al año.
          `).alignment('justify').end,
          new Txt(`Los beneficiarios para este nuevo proyecto se comprometen mediante un acta del aporte económico de forma puntual por familia beneficiada, que cubra los gastos de operación y mantenimiento del proyecto durante su vida útil, que estará a cargo de la JASS, el aporte económico para la operación y mantenimiento se determinara según lo establezca la JASS, esto en función a los costos de operación y funcionamiento.
          `).alignment('justify').end,
          new Txt(`En esta fase del proyecto los beneficiarios se comprometen mediante acta de la operación y mantenimiento una vez hecha la entrega de la obra.
          `).alignment('justify').end,
          new Txt(`Operación y mantenimiento de la JASS de CURANCO. (REPETIR POR CADA ANEXO)
          `).alignment('justify').bold().end,
          new Txt(`actualmente los usuarios vienes haciendo su operación y mantenimiento de sus instalaciones de agua, ellos mismos están comprometidos bajo responsabilidad. Mediante una reunión que se llevó acabo en el anexo de Curanco se nombró a un grupo de personas que formaran parte de la junta Administradora de Servicios de Saneamiento que están comprometidos firmando un acta de compromiso operación y mantenimiento de la JASS y usuarios que se adjunta en el anexo, harán los mantenimientos cada 6 meses en caso de rupturas será inmediato. La capacidad operativa de la JASS del anexo cuenta con recursos humanos, materiales y herramientas de su propiedad, la misma que se encuentra operativa y en funcionamiento, con la cual se viene trabajando, contamos con los siguientes materiales y herramientas:
          `).alignment('justify').end,
          new Ul([
            new Item({text:`Tubos PVC de diferentes diámetros y pegamento, Alicate, Baldes, Carretilla, Pico, Pala o lampa, Alambre, Lejía, Hoja y sierra, Pegamento.
            `}).alignment('justify').end
          ]).end


        ]
      ]
}