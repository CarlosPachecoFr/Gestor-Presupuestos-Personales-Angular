import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

export interface Transaccion {
  id: number,
  tipo: string,
  cantidad: number,
  categoria: string,
  descripcion: string,
  fecha_transaccion: Date,
  usuario_id: number
}

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  private apiUrl = environment.apiUrl + '/transaccion';

  constructor(
    private http: HttpClient
  ) { }

  obtenerTotalIngresosPorId(){
    const token = localStorage.getItem('token');
    return this.http.get<number>(`${this.apiUrl}/obtenerTotalIngresosPorId`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  obtenerTotalGastosPorId(){
    const token = localStorage.getItem('token');
    return this.http.get<number>(`${this.apiUrl}/obtenerTotalGastosPorId`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  obtenerBalancePorId(){
    const token = localStorage.getItem('token');
    return this.http.get<number>(`${this.apiUrl}/obtenerBalancePorId`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  obtenerTasaAhorroPorId(){
    const token = localStorage.getItem('token');
    return this.http.get<number>(`${this.apiUrl}/obtenerTasaAhorroPorId`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}
