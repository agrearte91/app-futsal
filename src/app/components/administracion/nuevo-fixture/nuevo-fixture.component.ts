import { Component, OnInit } from '@angular/core';

import { FixtureService } from '../../../services/fixture.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nuevo-fixture',
  templateUrl: './nuevo-fixture.component.html',
  styleUrls: ['./nuevo-fixture.component.css']
})
export class NuevoFixtureComponent implements OnInit {

  fixture:any[]
  equipos:any[]
  equipoDisponible:any[];
  equipoOcupado:any[];
  
  equipoLocal;

  constructor(private route:ActivatedRoute ,private _fixtureService:FixtureService) { 
    this.route.params.subscribe(params => {
    //this.fixture=this._fixtureService.getFechas(params['categoria']);
    this.equipos=this._fixtureService.getEquipos(params['categoria']);
    this.fixture = this.crearFixtureBlanco(this.equipos.length);
    this.equipoDisponible= this.equipos;
  })
}

crearFixtureBlanco(cantEquipos:number) {
  let partido = {
    'local': '',
    'visitante':''
  }
  let fixtureBlanco= new Array();
  for(let c = 1; c < cantEquipos ; c++){
  let fecha = new Array();
  for(let i=1; i <= cantEquipos/2 ;i++){
    fecha.push(partido);
  }
  fixtureBlanco.push(fecha);
}
return fixtureBlanco;
  
}
  ngOnInit() {
  }

}
