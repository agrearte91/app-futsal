import { Component, OnInit } from '@angular/core';
import { ProvidersService } from 'src/app/services/providers.service';
import { ICategoria } from 'src/app/models/categoria.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  categorias: ICategoria[];
  collapsed = true;
  constructor( private provServ: ProvidersService) {
    this.categorias = this.provServ.getCategorias();
   }

  ngOnInit() {
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
