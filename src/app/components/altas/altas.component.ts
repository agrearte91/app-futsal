import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-altas',
  templateUrl: './altas.component.html',
  styleUrls: ['./altas.component.css']
})
export class AltasComponent implements OnInit {

  esCategoria = false;
  esEquipo = false;
  esJugador = false;
  
  constructor() { }

  ngOnInit() {
  }

}
