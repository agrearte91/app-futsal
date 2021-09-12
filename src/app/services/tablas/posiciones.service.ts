import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PosicionesService {

  constructor(private http: HttpClient) { }

  getTablaPosiciones(idTabla){
    return this.http.get(`http://localhost:4000/api/tabla/${idTabla}`)
    .pipe(
      map(data => {data['data'].tabla}))
  }

}
