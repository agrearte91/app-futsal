import { Component, OnInit } from '@angular/core';
import { FixtureService } from '../../services/fixture.service';
import { ProvidersService } from 'src/app/services/providers.service';
import { IFecha } from 'src/app/models/fecha.interface';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  fechas: IFecha[];
  fechaActual: IFecha;
  nroFecha = 1;

  constructor(private fixture: FixtureService, private provServ: ProvidersService) {
    this.fechas = this.provServ.getFechas('A');
    this.fechaActual = this.fechas[this.nroFecha - 1];
  }

  ngOnInit() {
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
    return this.fechas.length;
  }
}
