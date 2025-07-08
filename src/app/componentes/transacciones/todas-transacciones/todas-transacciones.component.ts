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
  @Input() filtros!: { textoFiltrado: string; tipo: string, precio?: string };

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
      this.filtrarTransacciones();
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['filtros']) {
      this.filtrarTransacciones();
    }
  }

  filtrarTransacciones() {
    if (this.filtros) {
      const { textoFiltrado, tipo, precio } = this.filtros;
      this.transaccionesFiltradas = this.transacciones.filter(transaccion => {
        const coincideTexto = transaccion.descripcion.toLowerCase().includes(textoFiltrado.toLowerCase());
        const coincideTipo = tipo === 'todo' || transaccion.tipo === tipo;
        let coincidePrecio = true;

        if (precio === 'menor') {
          coincidePrecio = transaccion.cantidad < 100;
        } else if (precio === 'entre') {
          coincidePrecio = transaccion.cantidad >= 100 && transaccion.cantidad <= 1000;
        } else if (precio === 'mayor') {
          coincidePrecio = transaccion.cantidad > 1000;
        }

      return coincideTexto && coincideTipo && coincidePrecio; //si retorna true entonces la muestra coincide con el filtro
      });
    }
    else{
      this.transaccionesFiltradas = [...this.transacciones];
    }
  }
}
