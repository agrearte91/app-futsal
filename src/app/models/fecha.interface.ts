import { IPartido } from './partido.interface';


export interface IFecha {
    fec_numero: number;
    fec_partidos: IPartido[];
}

export const FECHASA: IFecha[] = [
    {
        fec_numero: 1,
        fec_partidos: [
            {
                par_fechaHora: new Date('2011-04-11T10:20:30Z'),
                par_elocal: 'Proyecto de Equipo',
                par_evisitante: 'Los Amigos de tu Hermana',
                par_golocal: 5,
                par_govisitante: 0
            },
            {
                par_fechaHora: new Date('2011-04-11T11:20:30Z'),
                par_elocal: 'Kawabonga',
                par_evisitante: 'Manzana de Newton',
                par_golocal: 3,
                par_govisitante: 1
            },
            {
                par_fechaHora: new Date('2011-04-11T12:20:30Z'),
                par_elocal: 'Real Coholicos',
                par_evisitante: 'Brujas FC',
                par_golocal: 6,
                par_govisitante: 4
            },
            {
                par_fechaHora: new Date('2011-04-11T13:20:30Z'),
                par_elocal: 'Barrilete Cosmico',
                par_evisitante: '200 de paleta',
                par_golocal: 1,
                par_govisitante: 3
            },
            {
                par_fechaHora: new Date('2011-04-11T14:20:30Z'),
                par_elocal: 'Villa Muten',
                par_evisitante: 'Absolut FC',
                par_golocal: 0,
                par_govisitante: 0
            },
        ]
    },
    {
        fec_numero: 2,
        fec_partidos: [
            {
                par_fechaHora: new Date('2011-04-15T10:20:30Z'),
                par_elocal: 'Proyecto de Equipo',
                par_evisitante: 'Kawabonga',
                par_golocal: 5,
                par_govisitante: 0
            },
            {
                par_fechaHora: new Date('2011-04-15T11:20:30Z'),
                par_elocal: 'Los Amigos de tu Hermana',
                par_evisitante: 'Manzana de Newton',
                par_golocal: 3,
                par_govisitante: 1
            },
            {
                par_fechaHora: new Date('2011-04-15T12:20:30Z'),
                par_elocal: '200 de paleta',
                par_evisitante: 'Absolut FC',
                par_golocal: 6,
                par_govisitante: 4
            },
            {
                par_fechaHora: new Date('2011-04-15T13:20:30Z'),
                par_elocal: 'Barrilete Cosmico',
                par_evisitante: 'Real Coholicos',
                par_golocal: 1,
                par_govisitante: 3
            },
            {
                par_fechaHora: new Date('2011-04-15T10:20:30Z'),
                par_elocal: 'Villa Muten',
                par_evisitante: 'Brujas FC',
                par_golocal: 0,
                par_govisitante: 0
            },
        ]
    },
];
