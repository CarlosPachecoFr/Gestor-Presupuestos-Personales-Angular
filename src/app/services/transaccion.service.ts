import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { blob } from 'node:stream/consumers';

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
  private transaccionesActualizadas = new Subject<void>();
  transaccionesActualizadas$ = this.transaccionesActualizadas.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  notificarCambio() {
    this.transaccionesActualizadas.next();
  }

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

  obtenerIngresosMensualPorId(){
    const token = localStorage.getItem('token');
    return this.http.get<number>(`${this.apiUrl}/obtenerIngresosMensualPorId`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  obtenerGastosMensualPorId(){
    const token = localStorage.getItem('token');
    return this.http.get<number>(`${this.apiUrl}/obtenerGastosMensualPorId`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  obtenerBalanceMensualPorId(){
    const token = localStorage.getItem('token');
    return this.http.get<number>(`${this.apiUrl}/obtenerBalanceMensualPorId`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  obtenerTasaAhorroMensualPorId(){
    const token = localStorage.getItem('token');
    return this.http.get<number>(`${this.apiUrl}/obtenerTasaAhorroMensualPorId`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  variacionIngresosMesAnteriorPorId(){
    const token = localStorage.getItem('token');
    return this.http.get<number>(`${this.apiUrl}/variacionIngresosMesAnteriorPorId`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  variacionGastosMesAnteriorPorId(){
    const token = localStorage.getItem('token');
    return this.http.get<number>(`${this.apiUrl}/variacionGastosMesAnteriorPorId`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  crearTransaccion(transaccion: Transaccion) {
    const token = localStorage.getItem('token');
    return this.http.post<Transaccion>(`${this.apiUrl}/crearTransaccion`, transaccion, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  obtenerUltimasTransacciones(){
    const token = localStorage.getItem('token');
    return this.http.get<Transaccion[]>(`${this.apiUrl}/obtenerUltimasTransacciones`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  obtenerIngresosUltimosMeses(){
    const token = localStorage.getItem('token');
    return this.http.get<Object[]>(`${this.apiUrl}/obtenerIngresosUltimosMeses`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  obtenerGastosUltimosMeses(){
    const token = localStorage.getItem('token');
    return this.http.get<Object[]>(`${this.apiUrl}/obtenerGastosUltimosMeses`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  obtenerGastosPorCategoria(){
    const token = localStorage.getItem('token');
    return this.http.get<Object[]>(`${this.apiUrl}/obtenerGastosPorCategoria`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  obtenerIngresosPorCategoria(){
    const token = localStorage.getItem('token');
    return this.http.get<Object[]>(`${this.apiUrl}/obtenerIngresosPorCategoria`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  obtenerTransacciones(){
    const token = localStorage.getItem('token');
    return this.http.get<Transaccion[]>(`${this.apiUrl}/obtenerTransacciones`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  obtenerTotalGastosPorCategoria(){
    const token = localStorage.getItem('token');
    return this.http.get<Object[]>(`${this.apiUrl}/obtenerTotalGastosPorCategoria`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  obtenerTotalIngresosPorCategoria(){
    const token = localStorage.getItem('token');
    return this.http.get<Object[]>(`${this.apiUrl}/obtenerTotalIngresosPorCategoria`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  obtenerGastosSemanales(){
    const token = localStorage.getItem('token');
    return this.http.get<Object[]>(`${this.apiUrl}/obtenerGastosSemanales`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  exportarArchivo(periodo: string, formato: string){
    const token = localStorage.getItem('token');
    return this.http.get(`${this.apiUrl}/exportarArchivo?periodo=${periodo}&formato=${formato}`, {
      responseType: 'blob',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}
