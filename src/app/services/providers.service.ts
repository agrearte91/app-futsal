import { Injectable } from '@angular/core';
import { IPosicion, POSICIONESA, POSICIONESB } from '../models/posicion.interface';

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

}
