import { IInput } from '../botonerav1/input/input.component';

export interface ICentro_educativo{
    codigo_modular:IInput;
    nombre:IInput;
    direccion:IInput;
    nivel_modalidad:IInput;
    gestion_dependencia:IInput;
    nro_alumnos:IInput;
    nro_docentes:IInput;
    secciones:IInput;
}