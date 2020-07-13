import { Injectable } from '@angular/core';
import { IPosicion, POSICIONESA, POSICIONESB } from '../models/posicion.interface';
import { CATEGORIAS } from '../models/categoria.interface';
import { FECHASA } from '../models/fecha.interface';
import { GOLEADORESA } from '../models/goleador.interface';
import { FAIRA } from '../models/fairplay.interface';

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
      return undefined;
    }
  }

  getGoleadores(categoria: string) {
    if (categoria === 'A') {
      return GOLEADORESA;
    } else {
      return undefined;
    }
  }

  getFairPlays(categoria: string) {
    if (categoria === 'A') {
      return FAIRA;
    } else {
      return undefined;
    }
  }

  getCategorias() {
    return CATEGORIAS;
  }

  getFechas(categoria: string) {
    if (categoria === 'A') {
      return FECHASA;
    } else {
      return undefined;
    }
  }
}
