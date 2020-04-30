import { IInput } from '../botonerav1/input/input.component';
import { ISist_agua } from './ISist_agua';

export interface ILocalidad{
    nombre:IInput;
    categoria:string;//es en cacerio, centro poblado, anexo, barrio
    tasa_cresimiento:IInput;
    nro_captaciones_abastesen:IInput;
    densidad_poblacional:IInput;
    sis_agua:ISist_agua[]

}