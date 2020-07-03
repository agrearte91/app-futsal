import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {

  categoriaSeleccionada: string;

  constructor(private route: ActivatedRoute) {
    // tslint:disable-next-line: no-string-literal
    this.route.params.subscribe((params) => { this.categoriaSeleccionada = params['categoria']; console.log(this.categoriaSeleccionada); });
  }

  ngOnInit() {
  }

}
