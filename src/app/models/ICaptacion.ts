import { IInput } from '../botonerav1/input/input.component';

import { IChks } from '../botonerav1/chk/chks/chks.component';
import { IFiles } from '../botonerav1/btn/btnupload/files/files.component';

export interface ICaptacion {
    nombre:IInput;
    ubicacion:IInput;//utm
    aforo:IInput;
    antiguedad:IInput;
    detalle_conservacion:IInput;
    entidad_constructora:IInput;
    reutiliza:IChks;
    tipo_manante:IInput;
    diametro_tubo_ingreso:IInput;
    diametro_tubo_salida:IInput;
    cerco_perimetrico:IChks;
    fotos:IFiles



}