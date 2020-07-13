import { item, OrderingList, table, tablev2 } from './herramientas/funciones';
import { Ol, Item, Txt, Ul, Table, PdfMakeWrapper } from 'pdfmake-wrapper';
import { data } from 'src/app/eliminar-pdf/eliminar-pdf.component';
import { nombre_proyecto } from './nombre_proyecto';

export function generalidades_antecedetes(){
  const pdf = new PdfMakeWrapper()
  
  const dataAlumno = [
    { sistema: 'Agua Potable', construccion: '1993', ejecutora: 'FONCODES',localidad:'pucap' },
    { sistema: 'Agua Potable', construccion: '1993', ejecutora: 'FONCODES',localidad:'pampahuasi' },
    { sistema: 'Agua Potable', construccion: '1994', ejecutora: 'FONCODES',localidad:'huaracpampa' },
  ]
  const inf_tecnico = '002–2017–MDO-IE/LAEM de fecha ' 
  const fecha_aprobacion = '14/11/2017'
  const cuadrov2 = new Table(tablev2(dataAlumno,{nombres:['sistema', 'año construccion','unidad ejecutora','localidad'],headerStyle:{background:'red',fontColor:'green'}})).headerRows(1).color('purple')
 
  
    return  [
      new Item({text:`GENERALIDADES Y ANTECEDENTES
      `}).bold().end,            
      
      
        new Ol([
        [
          new Item({text:`GENERALIDADES`}).bold().end,
          [
            new Txt(`RESPONSABILIDAD FUNCIONAL DEL PROYECTO DE INVERSIÓN PÚBLICA (SEGÚN ANEXO SNIP - 03)
            `).alignment('justify').end
          ]
        ],
        [
          new Item({text:`MARCO DE REFERENCIA
          `}).bold().end,
          [
            new Txt(`El presente estudio se realizó en las localidades Pucap, Pampahuasi,Tinco, Huaracpampa del distrito de Cascapara - Yungay - Ancash donde en la actualidad ninguna de ellas cuenta con un sistema de eliminación o disposición de excretas lo cual genera proliferación de enfermedades infecciosas ya que la población realiza sus necesidades a campo abierto provocando la contaminación ambiental y generándose enfermedades que aquejan a sus pobladores.
            `).alignment('justify').end,
          ],
          
        ],
        [
          new Item({text:`ANTECEDENTES
          `}).bold().end,
          [
            new Txt( `Los antecedentes del presente estudio se basan en las localidades de Pucap, Pampahuasi, Tinco, Huaracpampa, del distrito de cascapara, donde los pobladores han venido exigiendo la realización del presente estudio a través de las diferentes autoridades locales y provinciales, esto debido a que en la actualidad ninguna vivienda cuenta con un sistema de eliminación de excretas. Según el trabajo de campo realizado, los pobladores indican que se han ejecutado algunas intervenciones en el área para mejorar su sistema de agua potable como se indica en el siguiente cuadro :
            `).alignment('justify') .end,
            cuadrov2.end,
            new Txt(`Fuente: Elaboracion Propia
            `).end,
            new Txt(`Lo cual ha generado que en la población se presenten enfermedades infecciosas, gastrointestinales, parasitarias, etc. que perjudican en el día a día a toda la población, esto se puede apreciar más aún en los niños y las personas adultas que viven en las caserios de Pucap, Pampahuasi, Tinco, Huaracpampa.
            `).alignment('justify').end,
            new Txt(`Las autoridades han indicado que ya se está gestionando la realización de un estudio de pre inversión a través de las autoridades provinciales, las cuales han escuchado el problema que representa y la gran necesidad que se tiene por parte de la población, y por ende se ha visto por conveniente la elaboración de un estudio definitivo a la fecha se tiene reportes de enfermedades infecto contagiosas que el centro de salud reporta, es por ello el centro de Salud de Cascapara, recomienda el tratamiento y eliminación de las excretas de la población.
            `).alignment('justify').end,
            new Txt(`Revisando el Plan de Desarrollo Concertado aprobado por la Municipalidad Distrital de Cascapara en el año 2015, se está considerando los proyectos de saneamiento básico como prioridad así mismo los proyectos de salud. En ese contexto, la Municipalidad Distrital de Cascapara ha elaborado el Perfil de proyecto ${nombre_proyecto() } el cual ha sido declarado viable con INFORME TÉCNICO Nº ${inf_tecnico} de fecha ${fecha_aprobacion}.
            `).alignment('justify').end,
            new Txt(`Para la continuación del financiamiento, la Municipalidad Distrital de Cascapara, mediante la presente Consultoría, requiere contar con el Expediente Técnico, de modo que se logre el mejoramiento y ampliación de los servicios de saneamiento básico integral a nivel de ejecución de la obra establecida en el Estudio de Pre inversión.
            `).alignment('justify').end,

          ]
        ]
        
        
      
        

      ]).separator(['1.2.', '.']).end
         
    ]
      
        
      
}