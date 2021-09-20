import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }

  getPersona(dni){
    return this.http.get(`http://localhost:4000/api/persona/${dni}`)
   .pipe(
     map(data => data['data']))
 }
}
