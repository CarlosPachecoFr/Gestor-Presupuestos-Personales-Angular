import { ChangeDetectorRef, Component } from '@angular/core';
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

  constructor(private transaccionService: TransaccionService, private cdRef: ChangeDetectorRef) {}

  ngOnInit(){
    this.transaccionService.obtenerIngresosMensualPorId().subscribe(ingresosMensuales => {
      this.ingresosMensuales = ingresosMensuales;
    });

    this.transaccionService.obtenerGastosMensualPorId().subscribe(gastosMensuales => {
      this.gastosMensuales = gastosMensuales;
    });

    this.transaccionService.obtenerBalanceMensualPorId().subscribe(balanceMensual => {
      this.balanceMensual = balanceMensual;
    });

    this.transaccionService.obtenerTasaAhorroMensualPorId().subscribe(tasaAhorroMensual => {
      this.tasaAhorroMensual = tasaAhorroMensual;
    });

    this.transaccionService.variacionIngresosMesAnteriorPorId().subscribe(variacionIngresos => {
      this.variacionIngresos = variacionIngresos;
    });

    this.transaccionService.variacionGastosMesAnteriorPorId().subscribe(variacionGastos => {
      this.variacionGastos = variacionGastos;
    });
  }
}
