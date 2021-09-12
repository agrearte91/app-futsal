import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CategoriaService {

  constructor(private http: HttpClient) { }


getCategorias(){
   return this.http.get("http://localhost:4000/api/categoria")
  .pipe(
    map(data => data['data']))
}

getCategoria(idCategoria){
  return this.http.get(`http://localhost:4000/api/categoria/${idCategoria}`)
 .pipe(
   map(data => data['data']))
}

getPosiciones(idCategoria){
  return this.http.get(`http://localhost:4000/api/categoria/${idCategoria}/tabla`)
 .pipe(
   map(data => data['data'].tabla))
}

getPartidos(idCategoria){
  return this.http.get(`http://localhost:4000/api/categoria/${idCategoria}/partidos`)
 .pipe(
   map(data => data['data']))
}

}
