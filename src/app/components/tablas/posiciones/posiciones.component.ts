import { Component, OnInit, Input } from '@angular/core';
import { ProvidersService } from 'src/app/services/providers.service';
import { IPosicion } from 'src/app/models/posicion.interface';

@Component({
  selector: 'app-posiciones',
  templateUrl: './posiciones.component.html',
  styleUrls: []
})
export class PosicionesComponent implements OnInit {

  @Input() categoria: string;
  posiciones: IPosicion[];
  constructor(private provService: ProvidersService) {
  }
  // CUANDO CAMBIA LA RUTA DEL COMPONENTE PADRE, SE ACTUALIZA EL PARAMETRO DE ENTRADA
  // tslint:disable-next-line: use-life-cycle-interface
  ngOnChanges(changes) {
    if (this.categoria !== undefined) {
      this.posiciones = this.provService.getPosiciones(this.categoria);

      // Ordena el arreglo por puntos
      this.posiciones.sort((a, b) => b.pos_puntos - a.pos_puntos);
    }
  }

  ngOnInit() {
    this.posiciones = this.provService.getPosiciones(this.categoria);
    // Ordena el arreglo por puntos
    this.posiciones.sort((a, b) => b.pos_puntos - a.pos_puntos);
  }

}
