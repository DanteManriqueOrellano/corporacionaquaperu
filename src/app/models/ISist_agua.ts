import { ICaptacion } from './ICaptacion';
import { ILinea_conduccion } from './ILinea_Conduccion';
import { IReservorio } from './IReservorio';

export interface ISist_agua{
    captacion:ICaptacion;
    linea_conduccion:ILinea_conduccion;
    reservorio:IReservorio;
    
}