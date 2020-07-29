import { Component  } from '@angular/core';
import { PdfMakeWrapper, Txt, Ol,  Item, Table,  } from 'pdfmake-wrapper';
import { nombre_proyecto } from '../mem-des/generaDoc/f_nombre_proyecto';
import { imagenes } from '../mem-des/generaDoc/f_imagenes';
import { cabecera_pagina } from '../mem-des/generaDoc/f_cabecera_pagina';
import { pie_pagina } from '../mem-des/generaDoc/f_pie_pagina';
import { indice_manual } from '../mem-des/generaDoc/f_indice';
import { generalidades_antecedetes } from '../mem-des/generaDoc/f_generalidades_antecedentes';
import { objetivos_proyecto } from '../mem-des/generaDoc/f_objetivos_proyecto';
import { caracteristicas_localidad } from '../mem-des/generaDoc/f_caracteristicas_localidad';
import { diagnostico_servicios_saneamiento } from '../mem-des/generaDoc/f_diagnostico_servicios_saneamiento';
import { parametros_disenio_calculo } from '../mem-des/generaDoc/f_parametros_disenio_calculo';
import { descripcion_obras_proyectadas } from '../mem-des/generaDoc/f_descripcion_obras_proyectadas';
import { descripcion_obras_proyectadas_hidraulico } from '../mem-des/generaDoc/f_descripcion_obras_proyectadas_hidraulico';
import { plan_mitigacion_ambiental } from '../mem-des/generaDoc/f_plan_mitigacion_ambiental';
import { plan_capacitacion } from '../mem-des/generaDoc/f_plan_capacitacion';
import { plan_gestion_saneamiento } from '../mem-des/generaDoc/f_plan_gestion_saneamiento';
import { metas_fisicas } from '../mem-des/generaDoc/f_metas_fisicas';
import { ejecucion_proyecto } from '../mem-des/generaDoc/f_ejecucion_proyecto';
import { memoria_costos } from '../mem-des/generaDoc/f_memoria_costos';
import { MemDesService } from '../mem-des/mem.des.service';
import { fuentes_agua } from '../mem-des/generaDoc/f_fuentes_agua';
import { capacidad_operativa_operador } from '../mem-des/generaDoc/f_capacidad_operativa_operador';
import { modalidad_plazo_ejecucion } from '../mem-des/generaDoc/f_modalidad_plazo_ejecucion';
import { HomeService } from '../home/home.service';
import { LocalidadesService } from '../ubigeo/localidades.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IFotografia } from '../estudio-fotografico/estudio-fotografico.service';

@Component({
  selector: 'app-eliminar-pdf',
  templateUrl: './eliminar-pdf.component.html',
  styleUrls: ['./eliminar-pdf.component.css']
})
export class EliminarPDFComponent  {

  fotografiaInput:IFotografia
 
  

  localidad$:Observable<any> = this.localidadService.obtenUnaLocalidad('50xVoNFBLc7QN2tGt9lw').pipe(
    map(actions => {
      const data = actions.payload.data();
      //const docIdLocalidadesSeleccionadas = actions.payload;
      return {data };})
  )

  constructor(
    private memdesService:MemDesService,
    private homeservice:HomeService,
    private localidadService:LocalidadesService,
  ) { }

  fotografiaOutput($event){
    console.log($event)

  }
  



  async generarMemoriaDescriptiva() {
    const pdf = new PdfMakeWrapper()
    //  pdf.images(await imagenes())

    // pdf.header(await cabecera_pagina());
    // pdf.footer(await pie_pagina());
    pdf.add(pdf.ln(4))

    pdf.add(new Txt('PROYECTO').alignment('center').bold().end);
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
          [
            new Item({text:`NOMBRE DEL PROYECTO
            `}).bold().end,
            [
              new Txt(`${nombre_proyecto()}
              `).alignment('justify').end

            ]
          ],
          
          generalidades_antecedetes(),
          objetivos_proyecto(),
         
          
          //item({ title: 'PROPIETARIO DE LA OBRA', detail: '' }),
          caracteristicas_localidad(),
          /** LOS DIAGNOSTICOS SE REALIZARAN SEGUN SE TENGA LA CANTIDAD DE LOCALIDADES BENEFICIADAS*/
          diagnostico_servicios_saneamiento(),
          parametros_disenio_calculo(),
          fuentes_agua(),
         // item({ title: 'FUENTES DE AGUA IDENTIFICADAS PARA EL PROYECTO', detail: '' }),
          descripcion_obras_proyectadas(),
          descripcion_obras_proyectadas_hidraulico(),
          plan_mitigacion_ambiental(),
          plan_capacitacion(),
          plan_gestion_saneamiento(),
          capacidad_operativa_operador(),
          
          /**LAS METAS FISICAS DEL PROYECTO SE TIENE QUE RALIZAR POR CADA LOCALIDAD */
          metas_fisicas(),
          ejecucion_proyecto(),
          memoria_costos(),
          modalidad_plazo_ejecucion()
        ]).separator(['1.', '.']).end
      ]
    );




    
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
          

      ]).dontBreakRows(true).headerRows(1).pageOrientationAndBreak("portrait","after").font('nilam').end
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

