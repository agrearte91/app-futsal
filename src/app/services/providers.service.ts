import { Injectable } from '@angular/core';
import { IPosicion, POSICIONES } from '../models/posicion.interface';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  posiciones: IPosicion;

  constructor() { }

  getPosiciones(categoria: string) {
    return POSICIONES;
  }

}
