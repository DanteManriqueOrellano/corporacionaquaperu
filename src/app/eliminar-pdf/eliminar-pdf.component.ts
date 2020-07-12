import { Component, OnInit } from '@angular/core';
import { PdfMakeWrapper, Txt, Ol, Ul, Item, Table, Cell, Img, Stack, Columns } from 'pdfmake-wrapper';
import { nombre_proyecto } from '../mem-des/generaDoc/nombre_proyecto';
import { imagenes } from '../mem-des/generaDoc/imagenes';
import { cabecera_pagina } from '../mem-des/generaDoc/cabecera_pagina';
import { pie_pagina } from '../mem-des/generaDoc/pie_pagina';
import { indice_manual } from '../mem-des/generaDoc/indice';
import { item, OrderingList, table } from '../mem-des/generaDoc/herramientas/funciones';
import { generalidades_antecedetes } from '../mem-des/generaDoc/generalidades_antecedentes';
import { objetivos_proyecto } from '../mem-des/generaDoc/objetivos_proyecto';
import { caracteristicas_localidad } from '../mem-des/generaDoc/caracteristicas_localidad';
import { diagnostico_servicios_saneamiento } from '../mem-des/generaDoc/diagnostico_servicios_saneamiento';
import { parametros_disenio_calculo } from '../mem-des/generaDoc/parametros_disenio_calculo';
import { descripcion_obras_proyectadas } from '../mem-des/generaDoc/descripcion_obras_proyectadas';
import { descripcion_obras_proyectadas_hidraulico } from '../mem-des/generaDoc/descripcion_obras_proyectadas_hidraulico';
import { plan_mitigacion_ambiental } from '../mem-des/generaDoc/plan_mitigacion_ambiental';
import { plan_capacitacion } from '../mem-des/generaDoc/plan_capacitacion';
import { plan_gestion_saneamiento } from '../mem-des/generaDoc/plan_gestion_saneamiento';
import { metas_fisicas } from '../mem-des/generaDoc/metas_fisicas';
import { ejecucion_proyecto } from '../mem-des/generaDoc/ejecucion_proyecto';
import { memoria_costos } from '../mem-des/generaDoc/memoria_costos';
import { MemDesService } from '../mem-des/mem.des.service';

const cliente ='Municipalidad Distrital de Cascapara';
const localidades = ['Pucap','Pampahuasi'];
const distrito = 'Cascapara'
@Component({
  selector: 'app-eliminar-pdf',
  templateUrl: './eliminar-pdf.component.html',
  styleUrls: ['./eliminar-pdf.component.css']
})
export class EliminarPDFComponent implements OnInit {

  constructor(
    private memdesService:MemDesService
  ) { }
  

  ngOnInit(): void {
    console.log(this.memdesService.localidadesSeleccionadas)
  }

  async generarMemoriaDescriptiva() {
    const pdf = new PdfMakeWrapper()
    //  pdf.images(await imagenes())

    // pdf.header(await cabecera_pagina());
    // pdf.footer(await pie_pagina());
    pdf.add(pdf.ln(4))

    pdf.add(new Txt('PROYECTO').alignment('center').end);
    pdf.add(pdf.ln(2))
    pdf.add(new Txt(nombre_proyecto()).alignment('center').bold().end )
    pdf.add(pdf.ln(2))
    pdf.add(new Txt('MEMORIA DESCRIPTIVA').alignment('center').bold().end);
    pdf.add(pdf.ln(2))
    // pdf.add(new Columns([ await new Img('cover1', true).build(), await new Img('cover1', true).build() ]).alignment('center').columnGap(10).bold().end)
    pdf.add(new Txt('2020').alignment('center').pageBreak('after').bold().end)
    pdf.add(pdf.ln(2))
    
   
    pdf.add(indice_manual());
    pdf.add(new Txt('').alignment('right').pageBreak('after').bold().end)
    pdf.add(pdf.ln(2))



    pdf.add(
      [

        new Ol([

          item({ title: 'NOMBRE DEL PROYECTO', detail: nombre_proyecto() }),
          generalidades_antecedetes(),
          objetivos_proyecto(),
          [
            new Item({text:`PROPIETARIO DE LA OBRA
            `}).alignment('justify').end,
            [
              new Item({text:`El propietario de la Obra es la ${cliente}, que luego la transferirá a la JASS de estas comunidad localidades. El propietario final de la obra serán los caseríos de ${localidades} del distrito de ${distrito}. La población beneficiaria de la infraestructura de servicios de agua potable y saneamiento proyectados.
            `}).alignment('justify').end,
            new Item({text:`La Junta Administradora de los Servicios de Saneamiento (JASS) es la que se encuentra debidamente inscrita y reconocida por la ${cliente}, con el compromiso de asumir la responsabilidad de administrar, operar y mantener el servicio proyectado.
            `}).alignment('justify').end,
            new Item({text:`El financiamiento de los costos de administración, operación y mantenimiento, serán cubiertos con las cuotas que pagarán los usuarios por cada uno de los servicios prestados, cubriendo éstos satisfactoriamente dichos costos
            `}).alignment('justify').end,

            ]

          ],
          
          //item({ title: 'PROPIETARIO DE LA OBRA', detail: '' }),
          caracteristicas_localidad(),
          /** LOS DIAGNOSTICOS SE REALIZARAN SEGUN SE TENGA LA CANTIDAD DE LOCALIDADES BENEFICIADAS*/
          diagnostico_servicios_saneamiento(),
          parametros_disenio_calculo(),
          item({ title: 'FUENTES DE AGUA IDENTIFICADAS PARA EL PROYECTO', detail: '' }),
          descripcion_obras_proyectadas(),
          descripcion_obras_proyectadas_hidraulico(),
          plan_mitigacion_ambiental(),
          plan_capacitacion(),
          plan_gestion_saneamiento(),
          item({ title: 'CAPACIDAD OPERATIVA DEL OPERADOR', detail: '' }),
          /**LAS METAS FISICAS DEL PROYECTO SE TIENE QUE RALIZAR POR CADA LOCALIDAD */
          metas_fisicas(),
          ejecucion_proyecto(),
          memoria_costos(),
          item({ title: 'MODALIDAD DE EJECUCION', detail: '' }),
          item({ title: 'PLAZO DE EJECUCION DEL PROYECTO', detail: '' }),
        ]).separator(['1.', '.']).end

      ]

    );




    //  pdf.add( OrderingList([{title:'cuatro',detail:'detalle cuatro'},{title:'cinco',detail:'detalle cinco'}]).start(4).bold().end)


    pdf.add(
      new Table(table(data, ['nombre', 'apellido'])).end
    )

    pdf.add(
      new Table(table(dataAlumno, ['nombre', 'apellido', 'edad'])).end
    );
    //https://firebasestorage.googleapis.com/v0/b/corporacionaquaperu.appspot.com/o/test%2F1593985802870_logocascapara%20cabecera.png?alt=media&token=3a717189-e6d7-42d5-849c-ae36bc5520ae


    //pdf.add( await new Img('https://firebasestorage.googleapis.com/v0/b/corporacionaquaperu.appspot.com/o/test%2F1593991742352_logo%20carhuaz.jpg?alt=media&token=63e08acb-04a2-406a-837c-a3bc11e91729').build() );

    pdf.add(new Txt(`ANEXOS
    `).alignment('center') .end);
    pdf.add(new Txt(`ANEXO 1
    `).end)  
    pdf.add(
        new Txt( `PROYECCIÓN DE LA DEMANDA DE AGUA - ANEXO - CURANCO`).alignment('center').bold().pageOrientationAndBreak("landscape","before").end,
                   
      );
      





      pdf.add(
        new Table([
          [{text:'Per',rowSpan:2},//1
          {text:'Año',rowSpan:2},//2
          {text:'Pob.Tot',rowSpan:2},//3
          {text:'Cober.%',rowSpan:2},//4
          {text:'Pob.Serv',rowSpan:2},//5
          {text:'Nº de viv.Serv',colSpan:3},//6--divicion 3
          {},{},//se agrega un corchete menos del colspan
          {text:'Nº Conex.',rowSpan:2},//7
          {text:'Cons Total',colSpan:4},//8--divicion 4
          {},{},{},
          {text:'Cons.(L/d)',rowSpan:2},//9
          {text:'Qm(L/s)',rowSpan:2},//10
          {text:'Dem.(m3/año)',rowSpan:2},//11
          {text:'Qmd(L/s)',rowSpan:2},//12
          {text:'Qmh(L/s)',rowSpan:2},//13
          {text:'Vol.de Regu.(m3/d)',rowSpan:2},//14
          {text:'Vol.de Alma.',rowSpan:2}],//15
          //segunda fila
          [{},{},{},{},{},
          {text:'Ant.'},{text:'Nue.'},{text:'tot.'},//en la segunda fila se agregan los dos corchetes de que se agrego debido al colSpan
          {text:''},//el otro colSpan
          {text:  new Txt(['Viv.','(L/d)']).end},{text:'Tot.(L/d)'},{text:'Tot.(L/s)'},{text:'Tot.(m3/año)'},{text:''},
          {text:''},{text:''},{text:''},{text:''},{text:''},{}],
          ['1','2019','247','100%','247','60','0','60','60','19,76','19,76','229','7,212','19,76','0.23','7,212','0.30','0.46','4.94','6.18']
          


          
          
      ]).dontBreakRows(true).headerRows(1).pageOrientationAndBreak("portrait","after").end
      );
      
      pdf.add(new Txt(`Se construirá una nueva captación en el manante Pullahua casa de tipo ladera (Filtros, cámara húmeda y cámara seca), será de concreto armado F'c= 210 kg/cm2, está estructuras se tarrajeará el exterior (normal), el interior con (impermeabilizante) luego se colocara sus respectivos accesorios correspondientes en cada obra de arte. Para finalizar se pintara las obras de arte. Se construirá un cerco perimétrico con dado de concreto, poste de tubo galvanizado, malla electro soldada y tendrá una puerta de acceso que será construido de marco de tubo fierro galvanizado con malla cuadrada galvanizada.
      `).alignment('justify').end
      )
      pdf.add(new Txt(`Se construirá una nueva captación en el manante Pullahua casa de tipo ladera (Filtros, cámara húmeda y cámara seca), será de concreto armado F'c= 210 kg/cm2, está estructuras se tarrajeará el exterior (normal), el interior con (impermeabilizante) luego se colocara sus respectivos accesorios correspondientes en cada obra de arte. Para finalizar se pintara las obras de arte. Se construirá un cerco perimétrico con dado de concreto, poste de tubo galvanizado, malla electro soldada y tendrá una puerta de acceso que será construido de marco de tubo fierro galvanizado con malla cuadrada galvanizada.
      `).alignment('justify').end
      )
      

    pdf.create().open()


  }



}


export const data = [
  { nombre: 'dante', apellido: 'manrique' },
  { nombre: 'augusto', apellido: 'colonia' },
  { nombre: 'cesar', apellido: 'ramoz' },
]
export const dataAlumno = [
  { nombre: 'dante', apellido: 'manrique', edad: 10 },
  { nombre: 'colonia', apellido: 'augusto', edad: 20 },
  { nombre: 'cesar', apellido: 'ramoz', edad: 30 },
]
export function repeat(){
  
  const localidades = 2;
  const _OL = [];
  _OL.push()
  

}

//export const stilos  