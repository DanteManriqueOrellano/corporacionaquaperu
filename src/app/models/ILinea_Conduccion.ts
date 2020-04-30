import { IInput } from '../botonerav1/input/input.component';
import { IChks } from '../botonerav1/chk/chks/chks.component';
import { IPase_aereo } from './IPase_Aereo';

export interface ILinea_conduccion {
    longitud_total:IInput;
    tamanio_tuberia:IInput;
    detalle_conservacion:IInput;
    pase_aereo:IPase_aereo;
}