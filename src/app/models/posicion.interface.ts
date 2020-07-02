export interface IPosicion {
    pos_equipo: string;
    pos_puntos: number;
    pos_pjugados: number;
    pos_pganados: number;
    pos_pempatados: number;
    pos_pperdidos: number;
    pos_gfavor: number;
    pos_gcontra: number;
    pos_dgol: number;
  }

export const POSICIONES: IPosicion[] = [
    {
        pos_equipo: 'Manzana de Newton',
        pos_puntos: 10,
        pos_pganados: 3,
        pos_pempatados: 1,
        pos_pperdidos: 0,
        pos_pjugados: 4,
        pos_gfavor: 10,
        pos_gcontra: 3,
        pos_dgol: 7
    },
    {
        pos_equipo: 'Villa Muten',
        pos_puntos: 1,
        pos_pganados: 0,
        pos_pempatados: 1,
        pos_pperdidos: 3,
        pos_pjugados: 4,
        pos_gfavor: 10,
        pos_gcontra: 3,
        pos_dgol: 7
    },
    {
        pos_equipo: '200 De Paleta',
        pos_puntos: 2,
        pos_pganados: 0,
        pos_pempatados: 2,
        pos_pperdidos: 2,
        pos_pjugados: 4,
        pos_gfavor: 10,
        pos_gcontra: 3,
        pos_dgol: 7
    },
    {
        pos_equipo: 'Barrilete Cosmico',
        pos_puntos: 3,
        pos_pganados: 1,
        pos_pempatados: 0,
        pos_pperdidos: 3,
        pos_pjugados: 4,
        pos_gfavor: 10,
        pos_gcontra: 3,
        pos_dgol: 7
    },
    {
        pos_equipo: 'Brujas FC',
        pos_puntos: 5,
        pos_pganados: 1,
        pos_pempatados: 2,
        pos_pperdidos: 1,
        pos_pjugados: 4,
        pos_gfavor: 10,
        pos_gcontra: 3,
        pos_dgol: 7
    },
    {
        pos_equipo: 'Kawabonga',
        pos_puntos: 12,
        pos_pganados: 4,
        pos_pempatados: 0,
        pos_pperdidos: 0,
        pos_pjugados: 4,
        pos_gfavor: 15,
        pos_gcontra: 3,
        pos_dgol: 12
    },
    {
        pos_equipo: 'Real Coholicos',
        pos_puntos: 10,
        pos_pganados: 3,
        pos_pempatados: 1,
        pos_pperdidos: 0,
        pos_pjugados: 4,
        pos_gfavor: 10,
        pos_gcontra: 3,
        pos_dgol: 7
    },
    {
        pos_equipo: 'Los Amigos de tu Hermana',
        pos_puntos: 16,
        pos_pganados: 5,
        pos_pempatados: 1,
        pos_pperdidos: 0,
        pos_pjugados: 4,
        pos_gfavor: 20,
        pos_gcontra: 3,
        pos_dgol: 7
    },
    {
        pos_equipo: 'Proyecto de Equipo',
        pos_puntos: 27,
        pos_pganados: 9,
        pos_pempatados: 0,
        pos_pperdidos: 0,
        pos_pjugados: 9,
        pos_gfavor: 50,
        pos_gcontra: 3,
        pos_dgol: 47
    },
    {
        pos_equipo: 'Absolut FC',
        pos_puntos: 0,
        pos_pganados: 0,
        pos_pempatados: 0,
        pos_pperdidos: 5,
        pos_pjugados: 5,
        pos_gfavor: 1,
        pos_gcontra: 13,
        pos_dgol: -12
    },
];
