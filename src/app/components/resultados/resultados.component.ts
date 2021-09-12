import { Component, OnInit, Input } from '@angular/core';
import { ProvidersService } from 'src/app/services/providers.service';
//interfaces
import { IFecha } from 'src/app/models/fecha.interface';
import { ICategoria } from '../../models/categoria.interface';
//servicios
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  @Input() categoria: ICategoria;
  fechas: {};
  fechaActual: IFecha;
  nroFecha = 1;
  tablahash = {}
  constructor(private catServ:CategoriaService, private provServ: ProvidersService) {
  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnChanges(changes) {
 
    console.log(this.categoria)
    this.catServ.getPartidos(this.categoria)
    .subscribe(
      partidos =>{
        this.tablahash = {}
        this.ordenarPartidosPorFecha(partidos)
        this.fechaActual = this.tablahash[this.nroFecha]
      } 
    )

  }

  ngOnInit() {

    console.log(this.categoria)
    this.catServ.getPartidos(this.categoria)
    .subscribe(
      partidos =>{
        this.ordenarPartidosPorFecha(partidos)
        this.fechaActual = this.tablahash[this.nroFecha]
      } 
    )
  }

  getProximaFecha(fechaActual: number) {
    this.nroFecha = this.nroFecha + 1;
    this.fechaActual = this.tablahash[this.nroFecha];

  }

  getFechaAnterior(fechaActual: number) {
    this.nroFecha = this.nroFecha -1;
    this.fechaActual = this.tablahash[this.nroFecha];
  }

  getCantidadFechas() {
    if (this.tablahash !== undefined) {
      return Object.keys(this.tablahash).length;
    } else {
      return 0;
    }
  }

  ordenarPartidosPorFecha(partidos){
    partidos.forEach(partido => {
      if(!this.tablahash[partido.nro_fecha]){
        this.tablahash[partido.nro_fecha] = [partido]
      }else{
        this.tablahash[partido.nro_fecha].push(partido)
      }
    });
    console.log(Object.keys(this.tablahash).length)
  }
}
