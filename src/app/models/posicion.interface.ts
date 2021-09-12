export interface IPosicion {
    id_equipo: number;
    nombre_equipo: string;
    puntos: number;
    partidos_jugados: number;
    partidos_ganados: number;
    partidos_empatados: number;
    partidos_perdidos: number;
    goles_favor: number;
    goles_contra: number;
    diferencia_goles: number;
  }

/*export const POSICIONESA: IPosicion[] = [
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

export const POSICIONESB: IPosicion[] = [
    {
        pos_equipo: 'Barcelona',
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
        pos_equipo: 'Real Madrid',
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
        pos_equipo: 'Osasuna',
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
        pos_equipo: 'Real Sociedad',
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
        pos_equipo: 'Atletico de Madrid',
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
        pos_equipo: 'Ath. Bilbao',
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
        pos_equipo: 'Sevilla',
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
        pos_equipo: 'Betis',
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
        pos_equipo: 'Celta',
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
        pos_equipo: 'Racing de Santander',
        pos_puntos: 0,
        pos_pganados: 0,
        pos_pempatados: 0,
        pos_pperdidos: 5,
        pos_pjugados: 5,
        pos_gfavor: 1,
        pos_gcontra: 13,
        pos_dgol: -12
    },
];*/
