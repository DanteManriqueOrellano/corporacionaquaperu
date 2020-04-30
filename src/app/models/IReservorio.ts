import { IInput } from '../botonerav1/input/input.component';
import { IChks } from '../botonerav1/chk/chks/chks.component';

export interface IReservorio {
    antiguedad: IInput;
    ubicacion:IInput;
    forma_ingraestructura:string;
    almacenamiento:IInput;
    cerco_perimetrico:IChks;
}