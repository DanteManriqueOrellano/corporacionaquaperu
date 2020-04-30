import { IInput } from '../botonerav1/input/input.component';
import { ILocalidad } from './ILocalidad';
import { IDepartamento } from '../modules/ubigeo/IDepartamento';
import { IVia_acceso } from './IVia_acceso';

export interface IProyecto {
    nombre_proyecto:string;
    snip:string;
    cliente:string;
    anio_priorizacion:string;
    fecha_aprovacion:string
    nro_inf_tecnico:string;
    responsable_formuladora:string;
    responsable_evaluadora:string;
    responsable_ejecutora:string;
    este:string;
    oeste:string;
    norte:string;
    sur:string;
    altitud:string;
    latitud:string;
    plazo_ejecucion:string;
    sist_contratacion:string;
    modalidad_ejecucion:string;
    otros:string;
    alias_proyecto:string;
    localidades: string;//ILocalidad[];
    vias_accesos:string; //IVia_acceso[];
}
