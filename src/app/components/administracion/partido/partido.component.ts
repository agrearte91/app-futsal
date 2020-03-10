import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FixtureService } from '../../../services/fixture.service';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-partido',
  templateUrl: './partido.component.html',
  styleUrls: ['./partido.component.css']
})
export class PartidoComponent implements OnInit {
  
  @Output() equipoSeleccionado = new EventEmitter<string>();
  
  @Input() equipos: any[]; 
  @Input() local: string;
  @Input() fecha:number;

  equipoAux:string;
  seleccionado: boolean;
  //equipoSeleccionado:string
  equiposDisponibles = new Array()
  constructor(private route:ActivatedRoute ,private _fixtureService:FixtureService) {
      this.seleccionado=false;
      this.equiposDisponibles = this.equipos;
  }

  ngOnInit() {
  }

   seleccionarEquipo(){
    this.seleccionado= !this.seleccionado;
    
    //si local no es nulo significa que el metodo fue llamado desde la pesataña vistante y se debe guardar el partido
    //console.log(this.local)
    if(this.local){
      this._fixtureService.guardarPartido(this.local,this.equipoAux)
    }
    this.equipoSeleccionado.emit(this.equipoAux)
  }
}
