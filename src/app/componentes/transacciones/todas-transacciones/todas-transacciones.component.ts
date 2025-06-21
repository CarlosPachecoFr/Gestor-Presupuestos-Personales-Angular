import { Component, Input, LOCALE_ID, OnChanges, SimpleChanges } from '@angular/core';
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
export class TodasTransaccionesComponent implements OnChanges {
  transacciones: any[] = [];
  transaccionesFiltradas: any[] = [];
  @Input() textoFiltrado: string = '';

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
      this.transaccionesFiltradas = transacciones;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['textoFiltrado']) {
      this.filtrarTransacciones();
    }
  }

  filtrarTransacciones() {
    if (this.textoFiltrado) {
      const texto = this.textoFiltrado.toLowerCase();
      this.transaccionesFiltradas = this.transacciones.filter(transaccion => 
        transaccion.descripcion.toLowerCase().includes(texto)
      );
    }
    else{
      this.transaccionesFiltradas = [...this.transacciones];
    }
  }
}
