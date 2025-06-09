import { ChangeDetectorRef, Component } from '@angular/core';
import { TransaccionService } from '../../../services/transaccion.service';

@Component({
  selector: 'app-tarjetas-datos',
  imports: [],
  templateUrl: './tarjetas-datos.component.html',
  styleUrl: './tarjetas-datos.component.css'
})
export class TarjetasDatosComponent {

  totalIngresos: number = 0;
  totalGastos: number = 0;
  balance: number = 0;
  tasaAhorro: number = 0;

  constructor(private transaccionService: TransaccionService, private cdRef: ChangeDetectorRef) {}

  ngOnInit(){
    this.transaccionService.obtenerTotalIngresosPorId().subscribe(totalIngresos => {
      this.totalIngresos = totalIngresos;
    });

    this.transaccionService.obtenerTotalGastosPorId().subscribe(totalGastos => {
      this.totalGastos = totalGastos;
    });

    this.transaccionService.obtenerBalancePorId().subscribe(balance => {
      this.balance = balance;
    });

    this.transaccionService.obtenerTasaAhorroPorId().subscribe(tasaAhorro => {
      this.tasaAhorro = tasaAhorro;
    });
  }
}
