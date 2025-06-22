import { Component } from '@angular/core';
import { TransaccionService } from '../../../services/transaccion.service';

@Component({
  selector: 'app-tarjetas-datos',
  imports: [],
  templateUrl: './tarjetas-datos.component.html',
  styleUrl: './tarjetas-datos.component.css'
})
export class TarjetasDatosComponent {

  ingresosMensuales: number = 0;
  gastosMensuales: number = 0;
  balanceMensual: number = 0;
  tasaAhorroMensual: number = 0;
  variacionIngresos: number = 0;
  variacionGastos: number = 0;

  constructor(private transaccionService: TransaccionService) {}

  ngOnInit(){
    this.transaccionService.transaccionesActualizadas$.subscribe(() => {
      this.cargarDatos();
    });

    this.cargarDatos();
  }

  cargarDatos() {
    this.transaccionService.obtenerIngresosMensualPorId().subscribe(ingresos => this.ingresosMensuales = ingresos);
    this.transaccionService.obtenerGastosMensualPorId().subscribe(gastos => this.gastosMensuales = gastos);
    this.transaccionService.obtenerBalanceMensualPorId().subscribe(balance => this.balanceMensual = balance);
    this.transaccionService.obtenerTasaAhorroMensualPorId().subscribe(tasa => this.tasaAhorroMensual = tasa);
    this.transaccionService.variacionIngresosMesAnteriorPorId().subscribe(variacion => this.variacionIngresos = variacion);
    this.transaccionService.variacionGastosMesAnteriorPorId().subscribe(variacion => this.variacionGastos = variacion);
  }
}
