import { Ol, Item } from 'pdfmake-wrapper';
import { OrderingList } from './herramientas/funciones';

export function indice_manual(){
    return [
        new Ol([//lista ordenada principal

          [
            new Item({ text: 'INDICE' }).end,//primer item
            [
              new Ol([
                new Item({ text: 'NOMBRE DEL PROYECTO' }).end,

                [
                  new Item({ text: 'GENERALIDADES Y ANTECEDENTES' }).end,
                  
                  OrderingList([{ title: 'GENERALIDADES', detail: '' }, { title: 'MARCO DE REFERENCIA', detail: '' }, { title: 'ANTECEDENTES', detail: '' }], ['1.2.', '.']).end

                ],
                [
                  new Item({ text: 'OBJETIVOS' }).end,

                  new Ol([

                    [
                      new Item({ text: 'OBJETIVOS DEL PROYECTO' }).end,


                      new Ol([
                        new Item({ text: 'ACCESO UNIVERSAL A LOS SERVICIOS DE SALUD Y SEGURIDAD SOCIAL' }).end,
                        new Item({ text: 'EJES ESTRATÉGICOS Nº 2 - PLAN BICENTENARIO 2021' }).end,
                        new Item({ text: 'OBJETIVO NACIONAL' }).end,
                        new Item({ text: 'LINEAMIENTO DE POLÍTICA' }).end,
                        new Item({ text: 'PRIORIDADES' }).end,
                        new Item({ text: 'PROGRAMA ESTRATÉGICO' }).end,

                      ]).separator(['1.3.1.', '.']).end,

                    ],

                    new Item({ text: 'OBJETIVO GENERAL' }).end,
                    new Item({ text: 'OBJETIVO ESPECIFICO' }).end,


                  ]).separator(['1.3.', '.']).end,
                ],

                new Item({ text: 'PROPIETARIO DE LA OBRA' }).end,

                [
                  new Item({ text: 'CARACTERISTICAS GENERALES DE LA LOCALIDAD' }).end,
                  new Ol([
                    new Item({ text: 'UBICACION DEL PROYECTO' }).end,
                    [
                      new Item({ text: 'DIAGNÓSTICO DE LA SITUACIÓN ACTUAL' }).end,
                      new Ol([
                        new Item({ text: 'ÁREA DE ESTUDIO DEL PROYECTO' }).end,
                        new Item({ text: 'ÁREA DE INFLUENCIA' }).end,
                      ]).separator(['1.5.2.', '.']).end

                    ],


                    new Item({ text: 'ACCESO AL ÁREA DE ESTUDIO' }).end,
                    [
                      new Item({ text: 'PRINCIPALES ACTIVIDADES ECONÓMICAS' }).end,
                      new Ol([
                        new Item({ text: 'ACTIVIDAD AGRÍCOLA' }).end,
                        new Item({ text: 'ACTIVIDAD PECUARIA' }).end,
                        new Item({ text: 'ACTIVIDAD ARTESANAL' }).end,
                      ]).separator(['1.5.4.', '.']).end
                    ],
                    [
                      new Item({ text: 'ASPECTOS CLIMATOLÓGICOS' }).end,
                      new Ol([
                        new Item({ text: 'RECURSOS HÍDRICOS' }).end,
                        new Item({ text: 'TEMPERATURA' }).end,
                        new Item({ text: 'HUMEDAD' }).end,
                        new Item({ text: 'PRECIPITACIÓN' }).end,
                        new Item({ text: 'EVAPORACIÓN' }).end,
                        new Item({ text: 'VIENTO' }).end,
                        new Item({ text: 'TOPOGRAFÍA' }).end,
                        [
                          new Item({ text: 'GEOLOGÍA' }).end,
                          new Ol([
                            new Item({ text: 'ZONA PUNA' }).end,
                            new Item({ text: 'ZONA SUNI' }).end,
                            new Item({ text: 'ZONA QUECHUA' }).end,
                          ]).separator(['1.5.5.8.', '.']).end,

                        ],


                      ]).separator(['1.5.5.', '.']).end

                    ],


                    [
                      new Item({ text: 'CARACTERÍSTICAS DE LA POBLACIÓN BENEFICIARIA DE LOS CASERÍOS DE CASCAPARA' }).end,
                      new Ol([
                        [
                          new Item({ text: 'RESUMEN CASERÍOS BENEFICIADOS' }).end,
                          new Ol([
                            new Item({ text: 'CASERÍOS BENEFICIADOS DISTRITO DE CASCAPARA (Pucap, Pampahuasi, tinco y Huaracpampa)' }).end,
                            new Item({ text: 'USO DE LA VIVIENDA' }).end,
                            new Item({ text: 'MATERIAL DE CONSTRUCCIÓN' }).end,
                            new Item({ text: 'SERVICIOS BÁSICOS' }).end,
                          ]).separator(['1.5.6.1.', '.']).end,

                        ],


                      ]).separator(['1.5.6.', '.']).end,

                    ],


                    new Item({ text: 'OBJETIVO GENERAL' }).end,

                  ]).separator(['1.5.', '.']).end,
                ],
                /** LOS DIAGNOSTICOS SE REALIZARAN SEGUN SE TENGA LA CANTIDAD DE LOCALIDADES BENEFICIADAS*/

                [
                  new Item({ text: 'DIAGNOSTICO DE LOS SERVICIOS DE SANEAMIENTO BASICO EXISTENTE DE LAS LOCALIDADES BENEFICIADAS DEL DISTRITO DE CASCAPARA' }).end,
                  
                  new Ol([
                    [
                      new Item({ text: 'SISTEMA DE AGUA POTABLE CASERIO PUCAP' }).end,
                      new Ol([
                        new Item({ text: 'CAPTACIÓN'}).end,
                        new Item({ text: 'LINEA DE CONDUCCION'}).end,
                        new Item({ text: 'RESERVORIO'}).end,
                        new Item({ text: 'LÍNEA DE ADUCCIÓN Y RED DE DISTRIBUCIÓN'}).end,
                        new Item({ text: 'CONEXIONES DOMICILIARIAS'}).end,
                        new Item({ text: 'CONEXIÓN DE AGUA POTABLE EN INSTITUCIÓN EDUCATIVA'}).end,
                        new Item({ text: 'CONEXIÓN DE AGUA POTABLE EN EL CENTRO DE SALUD'}).end,
                        new Item({ text: 'CONEXIÓN DE AGUA POTABLE EN INSTITUCIONS SOCIAL'}).end,
                        new Item({ text: 'SISTEMA DE DISPOSICIÓN SANITARIA' }).end,
                      ]).separator(['1.6.1.', '.']).end,
                    ]

                  ]).separator(['1.6.', '.']).end
                ],




                [
                  new Item({ text: 'PARAMETROS DE DISEÑO Y CALCULO' }).end,
                  new Ol([
                    new Item({text:'PARÁMETROS DE DISEÑO DE LOS ANEXOS'}).end,
                    new Item({text:'CÁLCULO'}).end,
                  ]).separator(['1.7.','.']).end

                ],
                

                new Item({ text: 'FUENTES DE AGUA IDENTIFICADAS PARA EL PROYECTO' }).end,
                [
                  /**la descripcion de las obras proyectadas se hacen por localidad */
                  new Item({ text: 'DESCRIPCION DE LAS OBRAS PROYECTADAS' }).end,
                  new Ol([
                    [
                      new Item({text:'DESCRIPCIÓN DE OBRAS PROYECTADAS DEL SISTEMA DE AGUA POTABLE - CASERIO PUCAP (REPETIR LO MISMO PARA CADA ANEXO)'}).end,
                      new Ol([
                        new Item({text:'CAPTACION'}).end,
                        new Item({text:'CÁMARAS DERIVADORES DE CAUDAL'}).end,
                        new Item({text:'CAMARA ROMPE PRESION T-06 '}).end,
                        new Item({text:'CAMARA ROMPE PRESION T-07 '}).end,
                        new Item({text:'RED DE TUBERÍAS'}).end,
                        new Item({text:'PASE AEREO'}).end,
                        new Item({text:'RESERVORIO NUEVO'}).end,
                        new Item({text:'VÁLVULA DE CONTROL Y REGULACIÓN'}).end,
                        new Item({text:'VÁLVULA DE PURGA'}).end,
                        new Item({text:'VÁLVULA DE AIRE '}).end,
                        new Item({text:'CONEXIONES DOMICILIARIAS'}).end,
                        
                      ]).separator(['1.9.1.','.']).end

                    ]
                    

                  ]).separator(['1.9.','.']).end

                ],
                
                [
                  new Item({ text: 'DESCRIPCION DE LAS OBRAS PROYECTADAS DEL SISTEMA DE ARRASTRE HIDRAULICO' }).end,
                  new Ol([
                    [
                      new Item({text:'HIDRÁULICO'}).end,
                      new Ol([
                        new Item({text:'CONSTRUCCIÓN DE CASETAS DE UBS PARA INSTITUCIONES EDUCATIVAS'}).end,
                        new Item({text:'INSTALACIÓN LAVADERO'}).end,
                        new Item({text:'BIODIGESTOR'}).end,
                        new Item({text:'POZO DE LODOS'}).end,
                        new Item({text:'POZO PERCOLADOR'}).end,
                        new Item({text:'SUMINISTRO DE TUBERÍA'}).end,
                      ]).separator(['1.10.1.','.']).end

                    ]
                    
                  ]).separator(['1.10.','.']).end,

                ],
                
               
                [
                  new Item({ text: 'PLAN DE MITIGACION AMBIENTAL' }).end,
                  new Ol([
                    new Item({text:'OBJETIVOS'}).end,
                    new Item({text:'ALCANCES'}).end,
                    [
                      new Item({text:'PROGRAMAS'}).end,
                      new Ol([
                        new Item({text:'PROGRAMA DE MITIGACIÓN AMBIENTAL'}).end,
                        new Item({text:'PROGRAMA DE PARTICIPACIÓN Y CONSULTA CIUDADANA'}).end,
                        new Item({text:'PROGRAMA DE SEGURIDAD Y SALUD'}).end,
                        new Item({text:'PROGRAMA DE SEGURIDAD Y CONTROL'}).end,
                        new Item({text:'RESUMEN DE PRESUPUESTO MITIGACIÓN AMBIENTAL'}).end,

                      ]).separator(['1.11.3.','.']).end

                    ]
                    

                  ]).separator(['1.11.','.']).end

                ],
                
                [
                  new Item({ text: 'PLAN DE CAPACITACION' }).end,
                  new Ol([
                    [
                      new Item({text:'PLAN DE EDUCACIÓN SANITARIA AMBIENTAL'}).end,
                      new Ol([
                        [
                          new Item({text:'POBLACIÓN OBJETIVO'}).end,
                          new Ol([
                            new Item({text:'FAMILIAS DE LOS ANEXOS'}).end,
                            new Item({text:'INSTITUCIONES EDUCATIVAS INICIALES Y PRIMARIAS'}).end,
                            new Item({text:'CENTRO DE SALUD'}).end,
                          ]).separator(['1.12.1.1.','.']).end

                        ],
                        
                        [
                          new Item({text:'OBJETIVOS'}).end,
                          new Ol([
                            new Item({text:'OBJETIVOS GENERALES'}).end,
                            new Item({text:'OBJETIVOS ESPECÍFICOS'}).end,
                          ]).separator(['1.12.1.2.','.']).end

                        ],
                        
                        
                        new Item({text:'CONTENIDO TEMÁTICO DEL PLAN DE EDUCACIÓN SANITARIA AMBIENTAL'}).end,
                        new Item({text:'REQUERIMIENTO DE RECURSOS (PRESUPUESTO) PARA LA IMPLEMENTACIÓN DEL PLAN DE EDUCACIÓN SANITARIA AMBIENTAL'}).end,
                        new Item({text:'CRONOGRAMA DE LAS ACTIVIDADES DEL PLAN EDUCACIÓN SANITARIA AMBIENTAL'}).end,
                      ]).separator(['1.12.1.','.']).end

                    ]
                    
                  ]).separator(['1.12.','.']).end

                ],
                
                [
                  new Item({ text: 'PLAN DE CAPACITACION DE GESTION DE SANEAMIENTO BASICO' }).end,
                  new Ol([
                    [
                      new Item({text:'ENFOQUES DE LA ESTRATEGIA'}).end,
                      new Ol([
                        new Item({text:'FORTALECIMIENTO COMUNAL'}).end,
                        new Item({text:'PARTICIPACIÓN INCLUSIVA'}).end,
                        
                      ]).separator(['1.13.1.','.']).end

                    ],
                    
                    [
                      new Item({text:'OBJETIVOS'}).end,
                      new Ol([
                        new Item({text:'OBJETIVOS GENERALES'}).end,
                        new Item({text:'OBJETIVOS ESPECÍFICOS'}).end,
                      ]).separator(['1.13.2.','.']).end
                    ],
                    [
                      new Item({text:'MODALIDAD DE CAPACITACIÓN'}).end,
                      new Ol([
                        new Item({text:'SECCIONES EDUCATIVAS'}).end,
                        new Item({text:'TALLERES'}).end,
                        new Item({text:'CAPACITACIÓN EN SERVICIOS'}).end,
                        new Item({text:'PASANTÍAS'}).end,
                        new Item({text:'GRUPOS DE INTER APRENDIZAJE'}).end,
                      ]).separator(['1.13.3.','.']).end

                    ],
                   
                   
                    new Item({text:'CONTENIDO Y METAS A DESARROLLAR CON LA JAZZ Y ATM'}).end,
                    new Item({text:'REQUERIMIENTO DE RECURSOS DE (PRESUPUESTO) PARA LA IMPLEMENTACIÓN DEL PLAN DE GESTIÓN PARA LA PRESENTACIÓN DE LOS SERVICIOS'}).end,
                    new Item({text:'CRONOGRAMA'}).end,

                  ]).separator(['1.13.','.']).end

                ],
                
                new Item({ text: 'CAPACIDAD OPERATIVA DEL OPERADOR' }).end,
               [
                 /**LAS METAS FISICAS DEL PROYECTO SE TIENE QUE RALIZAR POR CADA LOCALIDAD */
                new Item({ text: 'RESUMEN DE METAS ' }).end,
                new Ol([
                  new Item({text:'METAS FÍSICAS DEL ANEXO PUCAP (REPETIR POR CADA ANEXO)'}).end

                ]).separator(['1.15.','.']).end
                

               ],
                [
                  new Item({ text: 'EJECUCION DEL PROYECTO' }).end,
                  new Ol([
                    new Item({text:'ÉPOCAS RECOMENDADAS PARA LA EJECUCIÓN DEL PROYECTO'}).end,
                    new Item({text:'ELIMINACIÓN DEL DESMONTE'}).end,
                  ]).separator(['1.16.','.']).end

                ],
                
                [
                  new Item({ text: 'MEMORIA DE COSTOS' }).end,
                  new Ol([
                    new Item({text:'CONCEPTOS PRINCIPALES DEL ESTUDIOS DE COSTOS JORNALES'}).end,
                    new Item({text:'VALOR REFERENCIAL DEL PROYECTO'}).end,
                  ]).separator(['1.17.','.']).end

                ],
                

                new Item({ text: 'MODALIDAD DE EJECUCION ' }).end,
                new Item({ text: 'PLAZO DE EJECUCION DEL PROYECTO ' }).end
              ]).separator(['1.', '.']).end
            ]
          ],

        ]).end
      ]

    

}