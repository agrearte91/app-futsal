import { Component, OnInit } from '@angular/core';
import { ProvidersService } from 'src/app/services/providers.service';
import { IPosicion } from 'src/app/models/posicion.interface';

@Component({
  selector: 'app-posiciones',
  templateUrl: './posiciones.component.html',
  styleUrls: []
})
export class PosicionesComponent implements OnInit {

  posiciones: IPosicion[];
  constructor( private provService: ProvidersService) { }

  ngOnInit() {
    this.posiciones = this.provService.getPosiciones('A');

    // Ordena el arreglo por puntos
    this.posiciones.sort((a, b) => b.pos_puntos - a.pos_puntos);
  }

}
