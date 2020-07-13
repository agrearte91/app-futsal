import { Component, OnInit, Input } from '@angular/core';
import { FixtureService } from '../../services/fixture.service';
import { ProvidersService } from 'src/app/services/providers.service';
import { IFecha } from 'src/app/models/fecha.interface';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  @Input() categoria: string;
  fechas: IFecha[];
  fechaActual: IFecha;
  nroFecha = 1;

  constructor(private fixture: FixtureService, private provServ: ProvidersService) {

  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnChanges(changes) {
    if (this.categoria !== undefined) {
      console.log(this.categoria);
      this.fechas = this.provServ.getFechas(this.categoria);
      if (this.fechas !== undefined) {
        this.fechaActual = this.fechas[this.nroFecha - 1];
      }
    }
  }

  ngOnInit() {
    if (this.categoria !== undefined) {
      this.fechas = this.provServ.getFechas(this.categoria);
      if (this.fechas !== undefined) {
        this.fechaActual = this.fechas[this.nroFecha - 1];
      }
    }
  }

  getProximaFecha(fechaActual: number) {
    this.nroFecha = this.nroFecha + 1;
    this.fechaActual = this.fechas[this.nroFecha - 1];

  }

  getFechaAnterior(fechaActual: number) {
    this.nroFecha = this.nroFecha - 1;
    this.fechaActual = this.fechas[this.nroFecha - 1];
  }

  getCantidadPartidos() {
    if (this.fechas !== undefined) {
      return this.fechas.length;
    } else {
      return 0;
    }
  }
}
