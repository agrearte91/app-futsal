import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FixtureService } from '../../../services/fixture.service';

@Component({
  selector: 'app-fecha-nueva',
  templateUrl: './fecha-nueva.component.html',
  styleUrls: ['./fecha-nueva.component.css']
})
export class FechaNuevaComponent implements OnInit {

  //variables que envio desde nuevo-fixture.html
  @Input() numeroFecha : number;
  @Input()  fecha: any[];

  //variables locales 

    equipos = new Array()
  equipoLocal:string
  equipoVisitante:string
  equiposDisponibles = new Array()
  constructor(private route:ActivatedRoute ,private _fixtureService:FixtureService) {
    this.equipos=this._fixtureService.getEquipos('B');
    this.equiposDisponibles = this.equipos.slice();
  }

  ngOnInit() {
  }

  seleccionarLocal(equipoSeleccionado){//equipo seleccionado viene desde el componente hijo
    let ubicacion = this.equiposDisponibles.indexOf(equipoSeleccionado)
    this.equiposDisponibles.splice(ubicacion,1);
    this.equipoLocal= equipoSeleccionado;
    console.log(this.equiposDisponibles)
  }

  seleccionarVisitante(equipoSeleccionado){//equipo seleccionado viene desde el componente hijo
    let ubicacion = this.equiposDisponibles.indexOf(equipoSeleccionado)
    this.equiposDisponibles.splice(ubicacion,1);
    this.equipoVisitante= equipoSeleccionado
    console.log(this.equiposDisponibles)
  }

  enviarDisponibles() {
    let aux = this.equiposDisponibles.slice(); 
    return aux;
  }

}
