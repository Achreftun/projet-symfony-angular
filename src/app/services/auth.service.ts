import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url: string = "http://localhost:8000/authentication_token";
  constructor(private http: HttpClient) { }

  login(user: User) {
    return this.http.post<{ token: string }>(this.url, user);
  }
}
