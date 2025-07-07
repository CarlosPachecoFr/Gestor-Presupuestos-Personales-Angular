import { Component } from '@angular/core';
import { Transaccion, TransaccionService } from '../../../services/transaccion.service';

@Component({
  selector: 'app-tarjeta-datos-analisis',
  imports: [],
  templateUrl: './tarjeta-datos-analisis.component.html',
  styleUrl: './tarjeta-datos-analisis.component.css'
})
export class TarjetaDatosAnalisisComponent {

  tasaAhorro: number = 0;
  patrimonioNeto: number = 0;
  gastoDiarioPromedio: number = 0;
  transaccionesFiltrar: any = [];
  alertas: number = 0;

  constructor(private transaccionService: TransaccionService){}

  ngOnInit(){
    this.cargarDatos();
    
    this.transaccionService.transaccionesActualizadas$.subscribe(() => {
      this.cargarDatos();
    });
  }

  cargarDatos(){
    const ignoradas = JSON.parse(localStorage.getItem('alertasIgnoradas') || '[]');
    this.transaccionService.obtenerTasaAhorroPorId().subscribe(tasa => {
      this.tasaAhorro = tasa;
    });
    this.transaccionService.obtenerGastosMensualPorId().subscribe(gasto => {
      this.gastoDiarioPromedio = parseFloat((gasto/30).toFixed(2)); //entre 30 como aproximacion del mes actual
    })
    this.transaccionService.obtenerBalancePorId().subscribe(balance => {
      this.patrimonioNeto = balance;
    })
    this.transaccionService.obtenerTransacciones().subscribe(transacciones => {
      this.transaccionesFiltrar = transacciones;
      this.alertas = this.transaccionesFiltrar.filter((t: Transaccion) => t.cantidad > 1000 && !ignoradas.includes(t.id)).length;
    })
  }
}
