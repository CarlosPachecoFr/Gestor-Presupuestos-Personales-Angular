import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';

export interface Meta {
  id: number,
  nombre: string,
  cantidad_actual: number,
  cantidad_objetivo: number,
  fecha_finalizacion: Date,
  usuario_id: number
}

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  private apiUrl = environment.apiUrl + '/metas';

  constructor(private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  private getToken(): string | null {
  if (isPlatformBrowser(this.platformId)) {
    return localStorage.getItem('token');
  }
    return null;
  }

  crearMeta(meta: Meta){
    const token = this.getToken();
    return this.http.post<Meta>(`${this.apiUrl}/crearMeta`, meta, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  obtenerMetasUsuarioId(){
    const token = this.getToken();
    return this.http.get<Meta[]>(`${this.apiUrl}/obtenerMetasUsuarioId`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  añadirCantidadMeta(cantidad_añadir: number, id: number){
    const token = this.getToken();
    return this.http.patch(`${this.apiUrl}/añadirCantidadMeta?cantidad_añadir=${cantidad_añadir}&id=${id}`, null,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  obtenerMetaPorId(id: number){
    return this.http.get<Meta>(`${this.apiUrl}/obtenerMetaPorId?id=${id}`)
  }
}
