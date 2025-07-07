import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

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

  private alertasActualizadasSource = new Subject<void>();
  alertasActualizadas$ = this.alertasActualizadasSource.asObservable();

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  notificarCambio() {
    this.transaccionesActualizadas.next();
  }

  notificarActualizacionAlertas() {
    this.alertasActualizadasSource.next();
  }

  private getToken(): string | null {
  if (isPlatformBrowser(this.platformId)) {
    return localStorage.getItem('token');
  }
    return null;
  }

  obtenerTotalIngresosPorId(){
    const token = this.getToken();
    return this.http.get<number>(`${this.apiUrl}/obtenerTotalIngresosPorId`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  obtenerTotalGastosPorId(){
    const token = this.getToken();
    return this.http.get<number>(`${this.apiUrl}/obtenerTotalGastosPorId`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  obtenerBalancePorId(){
    const token = this.getToken();
    return this.http.get<number>(`${this.apiUrl}/obtenerBalancePorId`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  obtenerTasaAhorroPorId(){
    const token = this.getToken();
    return this.http.get<number>(`${this.apiUrl}/obtenerTasaAhorroPorId`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  obtenerIngresosMensualPorId(){
    const token = this.getToken();
    return this.http.get<number>(`${this.apiUrl}/obtenerIngresosMensualPorId`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  obtenerGastosMensualPorId(){
    const token = this.getToken();
    return this.http.get<number>(`${this.apiUrl}/obtenerGastosMensualPorId`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  obtenerBalanceMensualPorId(){
    const token = this.getToken();
    return this.http.get<number>(`${this.apiUrl}/obtenerBalanceMensualPorId`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  obtenerTasaAhorroMensualPorId(){
    const token = this.getToken();
    return this.http.get<number>(`${this.apiUrl}/obtenerTasaAhorroMensualPorId`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  variacionIngresosMesAnteriorPorId(){
    const token = this.getToken();
    return this.http.get<number>(`${this.apiUrl}/variacionIngresosMesAnteriorPorId`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  variacionGastosMesAnteriorPorId(){
    const token = this.getToken();
    return this.http.get<number>(`${this.apiUrl}/variacionGastosMesAnteriorPorId`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  crearTransaccion(transaccion: Partial<Transaccion>) {
    const token = this.getToken();
    return this.http.post<Transaccion>(`${this.apiUrl}/crearTransaccion`, transaccion, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  obtenerUltimasTransacciones(){
    const token = this.getToken();
    return this.http.get<Transaccion[]>(`${this.apiUrl}/obtenerUltimasTransacciones`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  obtenerIngresosUltimosMeses(){
    const token = this.getToken();
    return this.http.get<Object[]>(`${this.apiUrl}/obtenerIngresosUltimosMeses`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  obtenerGastosUltimosMeses(){
    const token = this.getToken();
    return this.http.get<Object[]>(`${this.apiUrl}/obtenerGastosUltimosMeses`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  obtenerGastosPorCategoria(){
    const token = this.getToken();
    return this.http.get<Object[]>(`${this.apiUrl}/obtenerGastosPorCategoria`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  obtenerIngresosPorCategoria(){
    const token = this.getToken();
    return this.http.get<Object[]>(`${this.apiUrl}/obtenerIngresosPorCategoria`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  obtenerTransacciones(){
    const token = this.getToken();
    return this.http.get<Transaccion[]>(`${this.apiUrl}/obtenerTransacciones`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  obtenerTotalGastosPorCategoria(){
    const token = this.getToken();
    return this.http.get<Object[]>(`${this.apiUrl}/obtenerTotalGastosPorCategoria`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  obtenerTotalIngresosPorCategoria(){
    const token = this.getToken();
    return this.http.get<Object[]>(`${this.apiUrl}/obtenerTotalIngresosPorCategoria`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  obtenerGastosSemanales(){
    const token = this.getToken();
    return this.http.get<Object[]>(`${this.apiUrl}/obtenerGastosSemanales`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  exportarArchivo(periodo: string, formato: string){
    const token = this.getToken();
    return this.http.get(`${this.apiUrl}/exportarArchivo?periodo=${periodo}&formato=${formato}`, {
      responseType: 'blob',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}
