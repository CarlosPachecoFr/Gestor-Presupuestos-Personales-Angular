import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { MetaService } from '../../../services/meta.service';

@Component({
  selector: 'app-todo-metas',
  imports: [NgStyle],
  templateUrl: './todo-metas.component.html',
  styleUrl: './todo-metas.component.css'
})
export class TodoMetasComponent {

  metas: any = [];

  constructor(private metaService: MetaService){}

  ngOnInit(){
    this.cargarDatos();
  }

  cargarDatos(){
    this.metaService.obtenerMetasUsuarioId().subscribe(metas => {
    this.metas = metas.map(meta => {
      const porcentaje = meta.cantidad_objetivo > 0
        ? parseFloat(((meta.cantidad_actual / meta.cantidad_objetivo) * 100).toFixed(2))
        : 0;

      const diferencia_objetivo = meta.cantidad_objetivo - meta.cantidad_actual;

      const hoy = new Date();

      const fechaFin = new Date(meta.fecha_finalizacion);

      let tiempo_restante = '';

      if (fechaFin < hoy) {
        tiempo_restante = 'Vencido';
      } else {
          const diffTiempo = fechaFin.getTime() - hoy.getTime(); // milisegundos
          const diffDias = Math.floor(diffTiempo / (1000 * 60 * 60 * 24));

          const meses = Math.floor(diffDias / 30);
          const dias = diffDias % 30;

          if (meses > 0 && dias > 0) {
            tiempo_restante = `Faltan ${meses} meses y ${dias} días`;
          } else if (meses > 0) {
            tiempo_restante = `Faltan ${meses} meses`;
          } else if (dias > 0) {
            tiempo_restante = `Faltan ${dias} días`;
          } else {
            tiempo_restante = 'Vence hoy';
          }
        }

         const color = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');

      return {
        ...meta,
        porcentaje,
        diferencia_objetivo,
        tiempo_restante,
        color
      };
    });
  });
  }
}
