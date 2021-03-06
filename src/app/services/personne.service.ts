import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personne } from '../interfaces/personne';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  private url: string = "http://localhost:8000/ws/personnes";

  constructor(private http: HttpClient) {
  }

  getAllPersonnes() {
    return this.http.get<Array<Personne>>(this.url);
  }
  getOnePersonne(id: any) {
    return this.http.get<Personne>(`${this.url}/${id}`);
  }
  addPersonne(p: Personne) {
    return this.http.post<Personne>(this.url, p);
  }
  editPersonne(p: Personne) {
    return this.http.put<Personne>(`${this.url}/${p.id}`, p);
  }
  removePersonne(id: any) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
