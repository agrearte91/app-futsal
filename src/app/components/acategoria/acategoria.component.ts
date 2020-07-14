import { Component, OnInit } from '@angular/core';
import { ICategoria } from 'src/app/models/categoria.interface';
import { ProvidersService } from 'src/app/services/providers.service';

@Component({
  selector: 'app-acategoria',
  templateUrl: './acategoria.component.html',
  styleUrls: ['./acategoria.component.css']
})
export class ACategoriaComponent implements OnInit {

  categorias: ICategoria[];
  categoriaSeleccionada: ICategoria = {
    cat_id: '', cat_descripcion: ''
  };

  soloLectura = true;

  constructor(private provS: ProvidersService) {
    this.categorias = this.provS.getCategorias();
   }

  ngOnInit() {
  }

  guardar() {
    console.log(this.categoriaSeleccionada);
  }

  modificar() {
    this.soloLectura = false;
  }
  agregar() {
    this.soloLectura = false;
    this.categoriaSeleccionada = {
      cat_id: '', cat_descripcion: ''
    };
  }

  esNuevo() {
    return (this.categoriaSeleccionada === {cat_id: '' , cat_descripcion: ''});
  }

  seleccionar(categoria: string) {
    this.categoriaSeleccionada = this.provS.getCategoria(categoria)[0];
    this.soloLectura = true;
  }

}
