import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

export interface RegisterRequest {
  id: number,
  nombre: string,
  apellido: string,
  email: string,
  contraseña: string
}

export interface LoginRequest {
  email: string,
  contraseña: string
}

export interface TokenResponse {
  access_token: string,
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl + '/auth';

  constructor(
    private http:  HttpClient
  ) { }

  registrarUsuario(request: RegisterRequest) {
    return this.http.post<TokenResponse>(`${this.apiUrl}/registrarUsuario`, request);
  }

  loginUsuario(request: LoginRequest) {
    return this.http.post<TokenResponse>(`${this.apiUrl}/loginUsuario`, request);
  }

}
