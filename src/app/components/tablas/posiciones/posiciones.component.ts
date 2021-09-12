import { Component, OnInit, Input } from '@angular/core';
import { ProvidersService } from 'src/app/services/providers.service';
import { IPosicion } from 'src/app/models/posicion.interface';
import { ICategoria } from '../../../models/categoria.interface';
import { PosicionesService } from '../../../services/tablas/posiciones.service';
import { CategoriaService } from '../../../services/categoria.service';

@Component({
  selector: 'app-posiciones',
  templateUrl: './posiciones.component.html',
  styleUrls: []
})
export class PosicionesComponent implements OnInit {

  @Input() categoria: ICategoria;
  posiciones: IPosicion[];
  //constructor(private provService: ProvidersService) {
  //}
  constructor(private posServ: PosicionesService, private catServ: CategoriaService){
  }
  // CUANDO CAMBIA LA RUTA DEL COMPONENTE PADRE, SE ACTUALIZA EL PARAMETRO DE ENTRADA
  // tslint:disable-next-line: use-life-cycle-interface
  ngOnChanges(changes) {
       
    this.catServ.getPosiciones(this.categoria)
    .subscribe(
      posiciones => {
        this.posiciones = posiciones
        if (posiciones){
          //Ordena el arreglo por puntos
          this.posiciones.sort((a, b) => b.puntos - a.puntos)}
      }
    )
  }  

  ngOnInit() {

    this.catServ.getPosiciones(this.categoria)
    .subscribe(
      posiciones => {
        this.posiciones = posiciones
        if(posiciones){
          //Ordena el arreglo por puntos
          this.posiciones.sort((a, b) => b.puntos - a.puntos)
        }
      }
    )
  }

}
