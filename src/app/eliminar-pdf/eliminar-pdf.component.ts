import { Component, OnInit } from '@angular/core';
import { PdfMakeWrapper, Txt, Ol, Ul, Item, Table, Cell, Img, Stack, Columns } from 'pdfmake-wrapper';
import { titulo } from '../mem-des/generaDoc/titulo_1.1';
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


@Component({
  selector: 'app-eliminar-pdf',
  templateUrl: './eliminar-pdf.component.html',
  styleUrls: ['./eliminar-pdf.component.css']
})
export class EliminarPDFComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  async generarMemoriaDescriptiva() {
    const pdf = new PdfMakeWrapper()
    //  pdf.images(await imagenes())

    // pdf.header(await cabecera_pagina());
    // pdf.footer(await pie_pagina());
    pdf.add(pdf.ln(4))

    pdf.add(new Txt('PROYECTO').alignment('center').bold().end);
    pdf.add(pdf.ln(2))
    pdf.add(titulo())
    pdf.add(pdf.ln(2))
    pdf.add(new Txt('MEMORIA DESCRIPTIVA').alignment('center').bold().end);
    pdf.add(pdf.ln(2))
    // pdf.add(new Columns([ await new Img('cover1', true).build(), await new Img('cover1', true).build() ]).alignment('center').columnGap(10).bold().end)
    pdf.add(new Txt('2020').alignment('right').pageBreak('after').bold().end)
    pdf.add(pdf.ln(2))
    
   
    pdf.add(indice_manual());
    pdf.add(new Txt('').alignment('right').pageBreak('after').bold().end)
    pdf.add(pdf.ln(2))



    pdf.add(
      [
        
              new Ol([
                
                item({title:'NOMBRE DEL PROYECTO',detail:''}),
                generalidades_antecedetes(),
                objetivos_proyecto(),
                item({title:'PROPIETARIO DE LA OBRA',detail:''}),
                caracteristicas_localidad(),
                /** LOS DIAGNOSTICOS SE REALIZARAN SEGUN SE TENGA LA CANTIDAD DE LOCALIDADES BENEFICIADAS*/
                diagnostico_servicios_saneamiento(),
                parametros_disenio_calculo(),
                item({title:'FUENTES DE AGUA IDENTIFICADAS PARA EL PROYECTO',detail:''}),
                descripcion_obras_proyectadas(),
                descripcion_obras_proyectadas_hidraulico(),
                plan_mitigacion_ambiental(),
                plan_capacitacion(),
                plan_gestion_saneamiento(),  
                item({title:'CAPACIDAD OPERATIVA DEL OPERADOR',detail:''}),
                /**LAS METAS FISICAS DEL PROYECTO SE TIENE QUE RALIZAR POR CADA LOCALIDAD */
                metas_fisicas(),
                ejecucion_proyecto(),
                memoria_costos(),
                item({title:'MODALIDAD DE EJECUCION',detail:''}),
                item({title:'PLAZO DE EJECUCION DEL PROYECTO',detail:''}),
              ]).separator(['1.', '.']).end
     
      ]

    );




    //  pdf.add( OrderingList([{title:'cuatro',detail:'detalle cuatro'},{title:'cinco',detail:'detalle cinco'}]).start(4).bold().end)


    pdf.add(
      new Table(table(data, ['nombre', 'apellido'])).end
    )

    pdf.add(
      new Table(table(dataAlumno, ['nombre', 'apellido', 'edad'])).end
    )
    //https://firebasestorage.googleapis.com/v0/b/corporacionaquaperu.appspot.com/o/test%2F1593985802870_logocascapara%20cabecera.png?alt=media&token=3a717189-e6d7-42d5-849c-ae36bc5520ae


    //pdf.add( await new Img('https://firebasestorage.googleapis.com/v0/b/corporacionaquaperu.appspot.com/o/test%2F1593991742352_logo%20carhuaz.jpg?alt=media&token=63e08acb-04a2-406a-837c-a3bc11e91729').build() );



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