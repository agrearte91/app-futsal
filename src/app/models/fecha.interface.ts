import { IPartido } from './partido.interface';


export interface IFecha {
    fec_numero: number;
    fec_fecha: Date;
    fec_partidos: IPartido[];
}

