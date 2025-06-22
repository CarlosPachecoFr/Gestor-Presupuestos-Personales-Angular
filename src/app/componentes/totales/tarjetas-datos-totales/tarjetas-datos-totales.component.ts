import { Component } from '@angular/core';
import { TransaccionService } from '../../../services/transaccion.service';

@Component({
  selector: 'app-tarjetas-datos-totales',
  imports: [],
  templateUrl: './tarjetas-datos-totales.component.html',
  styleUrl: './tarjetas-datos-totales.component.css'
})
export class TarjetasDatosTotalesComponent {

  totalIngresos: number = 0;
  totalGastos: number = 0;
  balance: number = 0;

  constructor(private transaccionService: TransaccionService) { }

  ngOnInit() {
    this.cargarDatosTotales();

    this.transaccionService.transaccionesActualizadas$.subscribe(() => {
      this.cargarDatosTotales();
    });
  }

  cargarDatosTotales(){
    this.transaccionService.obtenerTotalIngresosPorId().subscribe( ingresos =>
      this.totalIngresos = ingresos
    );
    this.transaccionService.obtenerTotalGastosPorId().subscribe( gastos =>
      this.totalGastos = gastos
    );
    this.transaccionService.obtenerBalancePorId().subscribe( balance =>
      this.balance = balance
    );
      
  }
}
