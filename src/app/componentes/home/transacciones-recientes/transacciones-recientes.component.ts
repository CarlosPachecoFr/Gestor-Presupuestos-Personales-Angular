import { Component, LOCALE_ID } from '@angular/core';
import { Transaccion, TransaccionService } from '../../../services/transaccion.service';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs);

@Component({
  selector: 'app-transacciones-recientes',
  imports: [CommonModule],
  templateUrl: './transacciones-recientes.component.html',
  styleUrl: './transacciones-recientes.component.css',
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }  // Aquí configuras el locale a español
  ]
})
export class TransaccionesRecientesComponent {

  ultimasTransacciones: Transaccion[] = [];

  constructor(private transaccionService: TransaccionService){}

  ngOnInit(){
    this.transaccionService.obtenerUltimasTransacciones().subscribe(transacciones => {
      this.ultimasTransacciones = transacciones;
    });
  }
}
