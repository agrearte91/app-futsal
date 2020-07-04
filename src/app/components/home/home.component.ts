import { Component, OnInit } from '@angular/core';
import { ProvidersService } from 'src/app/services/providers.service';
import { ICategoria } from 'src/app/models/categoria.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categorias: ICategoria[];
  constructor(private provServ: ProvidersService) {
    this.categorias = this.provServ.getCategorias();
    console.log(this.categorias);
   }

  ngOnInit() {
    this.categorias = this.provServ.getCategorias();
    console.log(this.categorias);
  }

}
