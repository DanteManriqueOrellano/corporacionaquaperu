import { ILineaConduccion } from './linea-conduccion/ILineaConduccion';
import { ILineaAduccion } from './linea-aduccion/ILineaAduccion';
import { IRedDistribucion } from './red-distribucion/IRedDistribucion';
import { IConexionDomiciliaria } from './conexion-domiciliaria/IConexionDomiciliaria';

export interface IRedTuberia {
    linea_conduccion:ILineaConduccion;
    linea_aduccion:ILineaAduccion;
    red_distribucion:IRedDistribucion;
    conexion_domiciliaria:IConexionDomiciliaria;
}