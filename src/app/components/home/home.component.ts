import { Component, OnInit } from '@angular/core';
import { ProvidersService } from 'src/app/services/providers.service';
import { ICategoria } from 'src/app/models/categoria.interface';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categorias: ICategoria[];
  constructor(private catServ: CategoriaService) {
    this.catServ.getCategorias().subscribe(
      categorias => this.categorias =categorias
    )
  }

  ngOnInit() {
   // this.categorias = this.provServ.getCategorias();
  }

}
