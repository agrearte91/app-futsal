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

  seleccionaOpcion() {
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
