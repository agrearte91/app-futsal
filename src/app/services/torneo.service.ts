import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TorneoService {

  constructor(private http: HttpClient) { }

  getTorneos(){
    return this.http.get("http://localhost:4000/api/torneo")
   .pipe(
     map(data => data['data']))
 }
}
