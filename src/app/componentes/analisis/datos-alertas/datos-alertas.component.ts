import { Component, LOCALE_ID } from '@angular/core';
import { Transaccion, TransaccionService } from '../../../services/transaccion.service';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';


registerLocaleData(localeEs);

@Component({
  selector: 'app-datos-alertas',
  imports: [CommonModule],
  templateUrl: './datos-alertas.component.html',
  styleUrl: './datos-alertas.component.css',
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }
  ]
})
export class DatosAlertasComponent {

  transaccionesFiltradas: any = [];
  private alertasIgnoradas: number[] = [];

  constructor(private transaccionService: TransaccionService){}

  ngOnInit(){
    this.cargarDatos();
    this.transaccionService.transaccionesActualizadas$.subscribe(() => {
      this.cargarDatos();
    })
  }

  cargarDatos(){
    const ignoradas = JSON.parse(localStorage.getItem('alertasIgnoradas') || '[]');
    this.transaccionService.obtenerTransacciones().subscribe(transacciones => {
      this.transaccionesFiltradas = transacciones.filter((t: Transaccion) => t.cantidad > 1000 && t.tipo == "gasto" &&
      !ignoradas.includes(t.id));
    })
  }

  eliminarAlerta(idAlerta: number){
    const ignoradas = JSON.parse(localStorage.getItem('alertasIgnoradas') || '[]');
    ignoradas.push(idAlerta);
    localStorage.setItem('alertasIgnoradas', JSON.stringify(ignoradas));
    this.transaccionesFiltradas = this.transaccionesFiltradas.filter((t: Transaccion) => t.id !== idAlerta);
    this.transaccionService.notificarActualizacionAlertas();
  }
}
