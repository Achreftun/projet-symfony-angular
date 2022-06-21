import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Personne } from '../interfaces/personne';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  private url: string = "http://127.0.0.1:8000/ws/personnes";
  constructor(private http: HttpClient) {

  }

  getAllPersonnes() {
    return this.http.get<Array<Personne>>(this.url);
  }
}
