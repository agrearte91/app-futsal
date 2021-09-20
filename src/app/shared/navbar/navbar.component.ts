import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
//interfaces
import { ICategoria } from 'src/app/models/categoria.interface';
import { ITorneo } from '../../models/torneo.interface';
//servicios
import { CategoriaService } from '../../services/categoria.service';
import { TorneoService } from '../../services/torneo.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  categorias: ICategoria[];
  torneos: ITorneo[];
  collapsed = true;
  nombreTorneo: string
  nombreCategoria: string
  inscripcion: boolean
  anioTorneo: number
  tipoTorneo: string

  constructor (private catServ: CategoriaService, private torServ: TorneoService){
    this.nombreTorneo = "Seleccionar Torneo"
    this.nombreCategoria = "Categorias"
    this.inscripcion = false
    this.torServ.getTorneos().subscribe(
      torneos => {
        this.torneos = torneos
      }
    )
  }
  ngOnInit() {
  }

  buscarCategorias(torneo){
    this.categorias = []
    this.nombreTorneo = `${torneo.anio} ${torneo.tipo} ${torneo.nombre}`
    this.inscripcion = torneo.abierto
    this.anioTorneo = torneo.anio
    this.tipoTorneo = torneo.tipo
    this.catServ.getCategorias().subscribe(
      categorias => {
        categorias.forEach( categoria => {
          if (torneo.anio == categoria.anio_torneo && torneo.tipo == categoria.tipo_torneo){
            this.categorias.push(categoria)
          }
        });
      }
    );
  }

  Loguearse() {
    localStorage.setItem('user', 'admin');
    this.ngOnInit();
  }
  SalirAdmin() {
    localStorage.removeItem('user');
    this.ngOnInit();
  }

  esAdmin() {
    return (localStorage.getItem('user') === 'admin');
  }

}
