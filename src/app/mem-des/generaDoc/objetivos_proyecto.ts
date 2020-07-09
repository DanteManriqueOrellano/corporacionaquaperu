import { item, OrderingList } from './herramientas/funciones';
import { Ol, Item, Ul, Txt } from 'pdfmake-wrapper';

export function objetivos_proyecto() {
  const localidades =['huaracpampa','tinco']
  return [

    new Item({
      text: `OBJETIVOS
         `}).end,

    new Ol([

      [
        new Item({
          text: `OBJETIVOS DEL PROYECTO
            `}).alignment('justify').end,
        [
          new Item({
            text: `El objetivo central del presente proyecto es dotar de un adecuado servicio de tratamiento y eliminación de excretas, Asegurar las condiciones para un acceso universal a la salud en forma gratuita, continua, oportuna y de calidad, con prioridad en las zonas de concentración de pobreza y en las poblaciones más vulnerables.
              `}).alignment('justify').end,
          new Item({
            text: `Promover la participación ciudadana en la gestión y a evaluar los servicios públicos de salud.
              `}).alignment('justify').end,
          new Item({
            text: `Con este objetivo, el Estado:
              `}).alignment('justify').end,
          [
            new Ul([
              new Item({ text: `potenciará la promoción de la salud, la prevención y control de enfermedades transmisibles y crónicas degenerativas.` }).alignment('justify').end,
              new Item({ text: `promoverá la prevención y el control de enfermedades mentales y los problemas de drogadicción.` }).alignment('justify').end,
              new Item({ text: `implementará el acceso al saneamiento básico y controlará los principales contaminantes ambientales.` }).alignment('justify').end,
              new Item({ text: `desarrollará un plan integral de control de las principales enfermedades emergentes y re-emergentes, de acuerdo a las necesidades de cada localidad.` }).alignment('justify').end,
              new Item({ text: `promoverá hábitos de vida saludables.` }).alignment('justify').end,
              new Item({ text: `Contribuirá al desarrollo socio – económico.` }).alignment('justify').end,
              new Item({ text: `Logrará mejorar condiciones sociales de la población.` }).alignment('justify').end,
              new Item({
                text: `Se entiende como el estado de bienestar del que gozará la población promoviendo fuentes de trabajo durante la ejecución del proyecto.
                  `}).alignment('justify').end,
            ]).end
          ]
        ],
        new Item({
          text: `Estos objetivos se concretizarán realizando las siguientes acciones:
            `}).end,


        new Ol([

          [
            new Item({ text: `ACCESO UNIVERSAL A LOS SERVICIOS DE SALUD Y SEGURIDAD SOCIAL
            ` }).end,
            [
              new Txt(`Asegurar las condiciones para un acceso universal a la salud en forma gratuita, continua, oportuna y de calidad, con prioridad en las zonas de concentración de pobreza y en las poblaciones más vulnerables.
              `).alignment('justify').end,
              new Txt(`Promover la participación ciudadana en la gestión y a evaluar los servicios públicos de salud.
              `).alignment('justify').end,
              new Txt(`Con este objetivo, el Estado:
              `).alignment('justify').end,
              new Ul([
                new Item({text:`potenciará la promoción de la salud, la prevención y control de enfermedades transmisibles y crónicas degenerativas.`}).alignment('justify').end,
                new Item({text:`promoverá la prevención y el control de enfermedades mentales y los problemas de drogadicción.`}).alignment('justify').end,
                new Item({text:`ampliará el acceso al agua potable y al saneamiento básico y controlará los principales contaminantes ambientales.
                `}).alignment('justify').end,

              ]).alignment('justify').end,


            ],

          ],
          [
            new Item({ text: `EJES ESTRATÉGICOS Nº 2 - PLAN BICENTENARIO 2021
            ` }).end,
            [
              new Txt(`El crecimiento con democratización que el Perú se compromete a lograr para el 2021 incluye el acceso equitativo a servicios fundamentales de calidad (educación, salud, agua y saneamiento, electricidad, telecomunicaciones, vivienda y seguridad ciudadana). Para alcanzarlo, se requieren estrategias políticas que convoquen por igual al Estado y la iniciativa privada. Entre los desafíos más urgentes destaca lograr una educación de calidad y vencer el flagelo de la desnutrición.
              `).alignment('justify').end,
              new Txt(`En cuanto a la salud, el Plan Bicentenario considera fundamental que la cobertura del seguro de salud, que hoy beneficia al 35% de la población, esté al alcance del 100% el año 2021. También debemos reducir a cero el número de defunciones de niños menores de un año, que en la actualidad es de 20 por cada 1000 niños nacidos vivos. En materia de seguridad alimentaria, debemos solucionar el déficit calórico de la población, que es del orden del 30,1% en la población general y del 42,5% en la población rural; y asimismo erradicar la desnutrición crónica. El Plan Bicentenario considera lograr para el año 2021 una nutrición adecuada de infantes y madres gestantes y reducir al mínimo la tasa de desnutrición crónica infantil y la tasa de anemia de las mujeres en edad fértil.
              `).alignment('justify').end

            ]

          ],
          [
            new Item({ text: `OBJETIVO NACIONAL
            ` }).end,
            [
              new Txt(`En este caso, el objetivo es lograr que todas las personas tengan igualdad de oportunidades para desarrollarse, lo que implica tener acceso a servicios básicos de calidad, en particular educación, salud, agua y desagüe, electricidad, telecomunicaciones, vivienda y seguridad ciudadana. El acceso universal a servicios de calidad y la seguridad alimentaria son esenciales para superar la pobreza y garantizar la igualdad de oportunidades para todos.
              `).alignment('justify').end,

            ]

          ]
          ,
          [
            new Item({ text: `LINEAMIENTO DE POLÍTICA
            ` }).end,
            [
              new Txt(`Descentralizar los servicios de salud y garantizar el acceso universal a la atención de salud, la seguridad social, los servicios de agua potable y saneamiento básico, priorizando a la población en situación de pobreza y vulnerabilidad y adoptando un enfoque de interculturalidad.
              `).alignment('justify').end,
              new Txt(`Revertir los desequilibrios mencionados y alcanzar un desarrollo descentralizado armónico con ocupación equilibrada del territorio, que contribuya al desarrollo productivo, mejore la competitividad regional y corrija los procesos de exclusión y pobreza. Se requiere de la inversión pública y privada en infraestructura para la generación de electricidad y uso de agua con fines agrícolas, transporte, saneamiento básico, telecomunicaciones, educación y seguridad alimentaria.
              `).alignment('justify').end,
            ]

          ]
          ,
          [
            new Item({ text: `PRIORIDADES
            ` }).end,
            [
              new Txt(`Reducir la Mortalidad Infantil y materna y erradicar la desnutrición infantil de las madres gestantes.
              `).alignment('justify').end,

            ]

          ],
          [
            new Item({ text: `PROGRAMA ESTRATÉGICO
            ` }).end,
            [
              new Txt(`Disposición sanitaria de excretas para poblaciones rurales.
              `).alignment('justify').end,

            ]

          ]

        ]).separator(['1.3.1.', '.']).end,

      ],
      [
        new Item({ text: `OBJETIVO GENERAL
      `}).end,
      [
        new Item({text:`El objetivo central del presente proyecto es dotar de un adecuado servicio de eliminación de excretas con  la construcción de UBS con arrastre hidráulico, a través de un conjunto de actividades, con el fin de garantizar el bienestar de los pobladores y de esta manera terminar con la elevada incidencia de enfermedades Digestivas, Infecciosas y parasitarias en las localidades beneficiadas.
        `}).alignment('justify').end,
      ],

      ],
      [
        new Item({ text: `OBJETIVO ESPECIFICO
      `}).end,
      [
        new Item({text:`Desde el punto de vista del presente documento que forma parte del Expediente Técnico del Proyecto, se trata de presentar la información técnica, en descripción, especificaciones, gráficos y planos para una buena ejecución de obra.
      `}).alignment('justify').end

      ]
      
      
    ]




    ]).separator(['1.3.', '.']).end,
  ]
}