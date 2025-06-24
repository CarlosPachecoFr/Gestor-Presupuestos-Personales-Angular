import { Component } from '@angular/core';
import { Transaccion, TransaccionService } from '../../../services/transaccion.service';

@Component({
  selector: 'app-informacion-general',
  imports: [],
  templateUrl: './informacion-general.component.html',
  styleUrl: './informacion-general.component.css'
})
export class InformacionGeneralComponent {

  transacciones: any = [];
  nTotalTransacciones: number = 0;
  nTotalTransaccionesIngresos: number = 0;
  nTotalTransaccionesGastos: number = 0;
  promedioTransaccion: number = 0;

  constructor(private transaccionService: TransaccionService) { }

  ngOnInit() {
    this.cargarDatos();

    this.transaccionService.transaccionesActualizadas$.subscribe(() => {
      this.cargarDatos();
    })
  }

  cargarDatos() {
    this.transaccionService.obtenerTransacciones().subscribe(transacciones => {
      this.transacciones = transacciones;
      this.nTotalTransacciones = this.transacciones.length;

      const ingresos = this.transacciones.filter((t: Transaccion) => t.tipo === 'ingreso');
      const gastos = this.transacciones.filter((t: Transaccion) => t.tipo === 'gasto');

      this.nTotalTransaccionesIngresos = ingresos.length;
      this.nTotalTransaccionesGastos = gastos.length;

      const sumaIngresos = ingresos.reduce((acc: number, curr: Transaccion) => acc + curr.cantidad, 0);
      const sumaGastos = gastos.reduce((acc: number, curr: Transaccion) => acc + curr.cantidad, 0);
      
      this.promedioTransaccion = parseFloat(((sumaIngresos + sumaGastos)/this.nTotalTransacciones).toFixed(2));
    });
  }
}
