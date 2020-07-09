import { item, OrderingList, tablev2, tableCabeceraIzquierda, convertObjToArray } from './herramientas/funciones';
import { Ol, Item, Table } from 'pdfmake-wrapper';

const ubicacion_geografica=[
  {departamento:'',provincia:'',distrito:'',centros_poblados:[{id:'',nombre:''}]}
]
const o = {departamento:'depaetamento1',provincia:'provincia1',distrito:'disrtiot1',centros_poblados:[{id:0,nombre:'cp0'},{id:1,nombre:'cp1'}]}

export function caracteristicas_localidad() {
 console.log(convertObjToArray(o))
  return [

    item({ title: 'CARACTERISTICAS GENERALES DE LA LOCALIDAD', detail: '' }),

    new Ol([
      [
        item({
          title: `UBICACION DEL PROYECTO
          `, detail: ''
        }),
        [
          new Item({
            text: `Ubicación Geográfica Del Proyecto
            `}).bold().alignment('justify').end,
          new Item({text:`La ubicación del presente estudio es en la región Ancash, Provincia de Yungay , Distrito de Cascapara.
          `}).alignment('justify').end,
          new Item({
            text: `Ubicación Política
            `}).bold().alignment('justify').end,
          new Item({
            text: `CUADRO N° 01: UBICACIÓN GEOGRÁFICA
            `}).bold().alignment('justify').end,
          new Table(tableCabeceraIzquierda(['Departamento / Región','Provincia','Distrito','Coordenadas Utm','Localidades','Región Geográfica','Región Natural','Altitud'])).end

        ],

      ],


      [

        item({ title: 'DIAGNÓSTICO DE LA SITUACIÓN ACTUAL', detail: '' }),

        OrderingList([{ title: 'ÁREA DE ESTUDIO DEL PROYECTO', detail: '' }, { title: 'ÁREA DE INFLUENCIA', detail: '' }], ['1.5.2.', '.']).end,

      ],

      item({ title: 'ACCESO AL ÁREA DE ESTUDIO', detail: '' }),
      [

        item({ title: 'PRINCIPALES ACTIVIDADES ECONÓMICAS', detail: '' }),
        OrderingList([{ title: 'ACTIVIDAD AGRÍCOLA', detail: '' }, { title: 'ACTIVIDAD PECUARIA', detail: '' }, { title: 'ACTIVIDAD ARTESANAL', detail: '' }], ['1.5.4.', '.']).end,

      ],
      [

        item({ title: 'ASPECTOS CLIMATOLÓGICOS', detail: '' }),
        new Ol([

          item({ title: 'RECURSOS HÍDRICOS', detail: '' }),
          item({ title: 'TEMPERATURA', detail: '' }),
          item({ title: 'HUMEDAD', detail: '' }),
          item({ title: 'PRECIPITACIÓN', detail: '' }),
          item({ title: 'EVAPORACIÓN', detail: '' }),
          item({ title: 'VIENTO', detail: '' }),
          item({ title: 'TOPOGRAFÍA', detail: '' }),
          [

            item({ title: 'GEOLOGÍA', detail: '' }),
            OrderingList([{ title: 'ZONA PUNA', detail: '' }, { title: 'ZONA SUNI', detail: '' }, { title: 'ZONA QUECHUA', detail: '' }], ['1.5.5.8.', '.']).end,

          ],


        ]).separator(['1.5.5.', '.']).end

      ],


      [

        item({ title: 'CARACTERÍSTICAS DE LA POBLACIÓN BENEFICIARIA DE LOS CASERÍOS DE CASCAPARA', detail: '' }),
        new Ol([
          [

            item({ title: 'RESUMEN CASERÍOS BENEFICIADOS', detail: '' }),
            OrderingList([
              { title: 'CASERÍOS BENEFICIADOS DISTRITO DE CASCAPARA (Pucap, Pampahuasi, tinco y Huaracpampa)', detail: '' },
              { title: 'USO DE LA VIVIENDA', detail: '' },
              { title: 'MATERIAL DE CONSTRUCCIÓN', detail: '' },
              { title: 'SERVICIOS BÁSICOS', detail: '' }], ['1.5.6.1.', '.']).end,


          ],


        ]).separator(['1.5.6.', '.']).end,

      ],



      item({ title: 'OBJETIVO GENERAL', detail: '' }),

    ]).separator(['1.5.', '.']).end,
  ]

}