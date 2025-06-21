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
  @Input() filtros!: { textoFiltrado: string; tipo: string };

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
      const { textoFiltrado, tipo } = this.filtros;
      this.transaccionesFiltradas = this.transacciones.filter(transaccion => {
        const coincideTexto = transaccion.descripcion.toLowerCase().includes(textoFiltrado.toLowerCase());
        const coincideTipo = tipo === 'todo' || transaccion.tipo === tipo;
        return coincideTexto && coincideTipo; //si retorna true entonces la muestra coincide con el filtro
      });
    }
    else{
      this.transaccionesFiltradas = [...this.transacciones];
    }
  }
}
