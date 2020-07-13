import { Component, OnInit, Input } from '@angular/core';
import { ProvidersService } from 'src/app/services/providers.service';
import { IGoleador } from 'src/app/models/goleador.interface';

@Component({
  selector: 'app-goleadores',
  templateUrl: './goleadores.component.html',
  styleUrls: []
})
export class GoleadoresComponent implements OnInit {

  @Input() categoria: string;
  goleadores: IGoleador[];

  constructor(private provService: ProvidersService) { }

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnChanges(changes) {
    if (this.categoria !== undefined) {
      this.goleadores = this.provService.getGoleadores(this.categoria);

      // Ordena el arreglo por puntos
      if (this.goleadores !== undefined) {
        this.goleadores.sort((a, b) => b.gol_goles - a.gol_goles);
      }

    }
  }


  ngOnInit() {
    if (this.categoria !== undefined) {
      this.goleadores = this.provService.getGoleadores(this.categoria);

      // Ordena el arreglo por puntos
      if (this.goleadores !== undefined) {
        this.goleadores.sort((a, b) => b.gol_goles - a.gol_goles);
      }
    }
  }
}
