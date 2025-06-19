import { Component, LOCALE_ID } from '@angular/core';
import { TransaccionService } from '../../../services/transaccion.service';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs);

@Component({
  selector: 'app-todas-transacciones',
  imports: [CommonModule],
  templateUrl: './todas-transacciones.component.html',
  styleUrl: './todas-transacciones.component.css',
  providers: [
    { provide: LOCALE_ID, useValue: 'es' } 
  ]
})
export class TodasTransaccionesComponent {
  transacciones: any[] = [];

  constructor(private transaccionService: TransaccionService) { }

  ngOnInit() {
    this.cargarTodasTransacciones();
    
    this.transaccionService.transaccionesActualizadas$.subscribe(() => {
      this.cargarTodasTransacciones();
    });
  }

  cargarTodasTransacciones() {
    this.transaccionService.obtenerTransacciones().subscribe(transacciones => {
      this.transacciones = transacciones;
    });
  }
}
