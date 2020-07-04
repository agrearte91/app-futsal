import { Injectable } from '@angular/core';
import { IPosicion, POSICIONESA, POSICIONESB } from '../models/posicion.interface';
import { CATEGORIAS } from '../models/categoria.interface';
import { FECHASA } from '../models/fecha.interface';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  posiciones: IPosicion;

  constructor() { }

  getPosiciones(categoria: string) {
    if (categoria === 'A') {
      return POSICIONESA;
    }
    if (categoria === 'B') {
      return POSICIONESB;
    } else {
      return POSICIONESA;
    }
  }

  getCategorias() {
    return CATEGORIAS;
  }

  getFechas(categoria: string) {
    return FECHASA;
  }
}
