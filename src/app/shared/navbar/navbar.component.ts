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
  /*constructor( private provServ: ProvidersService) {
    this.categorias = this.provServ.getCategorias();
   }*/
  constructor (private catServ: CategoriaService, private torServ: TorneoService){

    this.torServ.getTorneos().subscribe(
      torneos => {
        this.torneos = torneos
        //console.log(this.torneos)
      }
    )

    //this.catServ.getCategorias().subscribe(
    //  categorias => {
    //    console.log(categorias)
    //    this.categorias = categorias
    //  }
    //);
  }
  ngOnInit() {
  }

  buscarCategorias(anioTorneo,tipoTorneo){
    this.categorias = []
    this.catServ.getCategorias().subscribe(
      categorias => {
        categorias.forEach( categoria => {
          if (anioTorneo == categoria.anio_torneo && tipoTorneo == categoria.tipo_torneo){
            this.categorias.push(categoria)
          }
        });

        console.log(this.categorias)
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
