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

  constructor(private transaccionService: TransaccionService){}

  ngOnInit(){
    this.cargarDatos();
    this.transaccionService.transaccionesActualizadas$.subscribe(() => {
      this.cargarDatos();
    })
  }

  cargarDatos(){
    this.transaccionService.obtenerTransacciones().subscribe(transacciones => {
      this.transaccionesFiltradas = transacciones.filter((t: Transaccion) => t.cantidad > 1000);
    })
  }
}
