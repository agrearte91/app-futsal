import { Component, OnInit } from '@angular/core';
import { FixtureService } from '../../services/fixture.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
  
  fecha:[]
  nroFecha=1
  
  constructor(private fixture:FixtureService) {
    this.fecha = this.fixture.getProximaFecha(this.nroFecha);
    this.nroFecha++;  
   }

  ngOnInit() {
  }

  getProximaFecha(fechaActual:number){
    this.fecha= this.fixture.getProximaFecha(fechaActual);
    this.nroFecha++;
  }

  getFechaAnterior(fechaActual:number){
    console.log(this.nroFecha)
    this.fecha = this.fixture.getFechaAnterior(fechaActual);
    this.nroFecha--;
    console.log(this.nroFecha)
  }

  getCantidadPartidos(){
    return this.fixture.getFechas("B").length;
  }
}
