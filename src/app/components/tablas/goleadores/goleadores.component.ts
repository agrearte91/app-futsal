import { Component, OnInit, Input } from '@angular/core';
//interfaces
import { IGoleador } from 'src/app/models/goleador.interface';
import { ICategoria } from '../../../models/categoria.interface';
//servicios
import { ProvidersService } from 'src/app/services/providers.service';
import { CategoriaService } from '../../../services/categoria.service';
import { PersonaService } from '../../../services/persona.service';

@Component({
  selector: 'app-goleadores',
  templateUrl: './goleadores.component.html',
  styleUrls: []
})
export class GoleadoresComponent implements OnInit {

  @Input() categoria: ICategoria;
  goleadores: IGoleador[] = [];

  constructor(private catServ:CategoriaService,private perServ:PersonaService, private provService: ProvidersService) { }

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnChanges(changes) {
    this.catServ.getGoleadores(this.categoria)
    .subscribe(
      goleadores => {
        this.goleadores = []
        goleadores.forEach(jugador => {
          this.perServ.getPersona(jugador.dni_jugador)
          .subscribe(
            persona => {
              this.goleadores.push({'nombre_jugador':`${persona.nombre} ${persona.apellido}`, goles: jugador.goles});
            }
          )
        })
        console.log(this.goleadores);
      } 
    )
  }

  ngOnInit() {
    // this.catServ.getGoleadores(this.categoria)
    // .subscribe(
    //   goleadores => {
    //     goleadores.forEach(jugador => {
    //       this.perServ.getPersona(jugador.dni_jugador)
    //       .subscribe(
    //         persona => {
    //           this.goleadores.push({'nombre_jugador':`${persona.nombre} ${persona.apellido}`, goles: jugador.goles});
    //         }
    //       )
    //     })
    //     console.log(this.goleadores);
    //   } 
    // )
  }
}
