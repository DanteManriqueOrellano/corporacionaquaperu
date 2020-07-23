import { item, OrderingList, paleta_color } from './herramientas/funciones';
import { Ol, Item, Txt, Table } from 'pdfmake-wrapper';
export function descripcion_obras_proyectadas_hidraulico(){
    return [

        new Item({text:`DESCRIPCION DE LAS OBRAS PROYECTADAS DEL SISTEMA DE ARRASTRE HIDRAULICO`}).bold().end,
        new Ol([
          [
            [
              new Item({text:`HIDRÁULICO
              `}).bold().end,
              [
                new Txt(`Se hace en mención la norma “ GUIA DE OPCIONES TECNICAS PARA SISTEMAS DE ABASTECIMIENTO DE AGUA PARA CONSUMO HUMANO Y SANEAMIENTO EN EL AMBITO RURAL” Se construirá 1073 UBS con sistema de arrastre hidráulico tipo domiciliario.
                `).alignment('justify').end,
                new Txt(` La UBS están conformados por:`).alignment('justify').end

              ]
            ],
            new Ol([
              [
                new Item({text:`CONSTRUCCIÓN DE CASETAS DE UBS`}).bold().end,
                [
                  new Txt(`Consta de 03 ambiente (01 baño para docente que tiene 01 ducha, 01 inodoro y 01 lavatorio; 02 baños para alumnos que consta de 01 inodoro cada uno), que será construido con muro de bloquetas de concreto tarrajeado interiormente y caravista exterior, el piso de concreto f'c 140 kg/cm2 x 4 cm.+ pulido 1:2 x 1cm, cobertura de con planchas de fibra vegetal, con puerta y ventana metálica que incluye vidrio, además dispondrá con la colocación de aparatos sanitarios como se muestra en los planos.
                  `).alignment('justify').end
                ],
                
              ],
              [
                new Item({text:`INSTALACIÓN LAVADERO`}).bold().end,
                [
                  new Txt(`Se construirán lavaderos domiciliario con estructura de concreto f'c= 175 kg/cm2 con cimientos corridos mezcla 1:10 cemento hormigón 30% piedra que será tarrajeada en interiores y exteriores con mezcla 1:5 cemento: arena/pulido, además se suministrara e instalara accesorios en lavadero domiciliaria y de instituciones educativas
                  `).alignment('justify').end

                ]
              ],
              [
                new Item({text:`BIODIGESTOR`}).bold().end,
                [
                  new Txt(`Contenedor cerrado, hermético e impermeable dentro del cual se deposita el material orgánico a fermentarse, para transformar el excremento humano en biogás y fertilizante su capacidad será de 600 lts para viviendas y para UBS educativos el biodigestor será de 1,300 lt.
                  `).alignment('justify').end

                ]
              ],
              [
                new Item({text:`POZO DE LODOS`}).bold().end,
                [
                  new Txt(`Se construirá un pozo de lodos que servirá para la separación de sólidos que acondiciona las aguas residuales para su buena infiltración y estabilización su estructura será de concreto f'c= 175 kg/cm2, sus medidas son de 0.60x0.60m.
                  `).alignment('justify').end

                ]
              ],
              [
                new Item({text:`POZO PERCOLADOR`}).bold().end,
                [
                  new Txt(`Hoyo de diámetro 1.00 y altura 1.00m realizado en la tierra para infiltrar el agua residual sedimentada en el biodigestor, rellenado grava Ø 1 ½, 2” y 2 1/2" además se suministrara e instalara de accesorios.
                  `).alignment('justify').end

                ]
              ],
              [
                new Item({text:`SUMINISTRO DE TUBERÍA`}).bold().end,
                [
                  new Txt(`El suministro de tubería para las instalaciones condominiales será de PVC ISO 4435 Ø 4" S-25.
                  `).alignment('justify').end,
                  new Table([
                    [{text:'Conexiones con Ubs',fillColor:paleta_color.cabecera_tabla.background,color:paleta_color.cabecera_tabla.fontColor},{text:'Total',fillColor:paleta_color.cabecera_tabla.background,color:paleta_color.cabecera_tabla.fontColor}],
                    ['Conexiones Domiciliarias','1075'],
                    
                  ]).dontBreakRows(true).headerRows(1).end,

                ]
              ]
              

            ]).separator(['1.10.1.','.']).end            
            
            
            
           

          ]
          
        ]).separator(['1.10.','.']).end,

      ]

}