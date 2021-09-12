export interface IPartido {
    id_partido: number,
    goles_local: number,
    goles_visitante:number
    jugado: boolean,
    id_categoria:number,
    id_equipo_local:number,
    id_equipo_visitante:number,
    dni_arbitro:number,
    dni_asistente:number,
    hora: string
}
