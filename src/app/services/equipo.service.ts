import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  constructor(private http: HttpClient) { }

  getEquipos(){
    return this.http.get("http://localhost:4000/api/equipo")
   .pipe(
     map(data => data['data']))
 }

}
