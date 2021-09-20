import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListaInscripcionService {

  constructor(private http: HttpClient) { }

  getEquiposInscriptos(){
    return this.http.get("http://localhost:4000/api/listaInscripcion")
   .pipe(map(data => data['data']))
 }
}
