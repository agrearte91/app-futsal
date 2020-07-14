import { Component, OnInit } from '@angular/core';
import { ProvidersService } from 'src/app/services/providers.service';
import { ICategoria } from 'src/app/models/categoria.interface';

@Component({
  selector: 'app-altas',
  templateUrl: './altas.component.html',
  styleUrls: ['./altas.component.css']
})
export class AltasComponent implements OnInit {

  esCategoria = false;
  esEquipo = false;
  esJugador = false;


  ngOnInit() {
  }
}
