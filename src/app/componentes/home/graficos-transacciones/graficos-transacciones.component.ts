import { Component } from '@angular/core';
import { NgApexchartsModule, ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle } from 'ng-apexcharts';
import { TransaccionService } from '../../../services/transaccion.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-graficos-transacciones',
  imports: [NgApexchartsModule],
  templateUrl: './graficos-transacciones.component.html',
  styleUrl: './graficos-transacciones.component.css'
})
export class GraficosTransaccionesComponent {
  public chartOptions!: ChartOptions;

  constructor(private transaccionService: TransaccionService) {
  }

  ngOnInit(){
    this.cargarDatos();
    this.transaccionService.transaccionesActualizadas$.subscribe(() => {
      this.cargarDatos();
    });
  }

  cargarDatos(){
    this.transaccionService.obtenerIngresosUltimosMeses().subscribe(ingresosData => {
    this.transaccionService.obtenerGastosUltimosMeses().subscribe(gastosData => {

      const ingresos = ingresosData.map((item: any) => item[1]);
      const gastos = gastosData.map((item: any) => item[1]);
      const meses = ingresosData.map((item: any) => item[0]);

      this.chartOptions = {
        series: [
          {
            name: 'Ingresos',
            data: ingresos,
            color: '#5DCFA9'
          },
          {
            name: 'Gastos',
            data: gastos,
            color: '#f93333'
          }
        ],
        xaxis: {
          categories: meses
        },
        chart: {
          type: 'area',
          height: 350,
          stacked: false,
          toolbar: {
            show: false
          }
        },
        title: {
          text: 'Ingresos vs Gastos - Últimos 6 meses',
          margin: 50,
          offsetX: 10,
          style: {
            fontSize: '20px',
            fontWeight: 'bold',
          }
        }
      };

    });
  });
  }
}
