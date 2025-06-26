import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) { }

  crearMeta(meta: Meta){
    const token = localStorage.getItem('token');
    return this.http.post<Meta>(`${this.apiUrl}/crearMeta`, meta, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  obtenerMetasUsuarioId(){
    const token = localStorage.getItem('token');
    return this.http.get<Meta[]>(`${this.apiUrl}/obtenerMetasUsuarioId`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}
