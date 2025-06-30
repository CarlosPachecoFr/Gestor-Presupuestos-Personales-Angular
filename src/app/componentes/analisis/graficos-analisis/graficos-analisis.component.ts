import { Component } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle, ApexGrid, NgApexchartsModule, ApexStroke, ApexMarkers } from 'ng-apexcharts';
import { TransaccionService } from '../../../services/transaccion.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  stroke: ApexStroke;
  markers: ApexMarkers;
  grid: ApexGrid;
};

@Component({
  selector: 'app-graficos-analisis',
  imports: [NgApexchartsModule],
  templateUrl: './graficos-analisis.component.html',
  styleUrl: './graficos-analisis.component.css'
})
export class GraficosAnalisisComponent {

  public chartOptions!: ChartOptions;

  constructor(private transaccionService: TransaccionService){}

  ngOnInit(){
    this.cargarDatosLineChart();
  }

  cargarDatosLineChart(){
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
          type: 'line',
          height: 400,
          stacked: false,
          toolbar: {
            show: false
          }
        },
        stroke: {
          width: 0 // Ocultar la línea
        },
        markers: {
          size: 4,
          colors: ['#ffffff'],
          strokeColors: ['#5DCFA9','#f93333'],
          strokeWidth: 2,
          hover: {
            size: 6,
          }
        },
        grid: {
          show: true,
          borderColor: '#e0e0e0',
          strokeDashArray: 4,
          position: 'back',
          xaxis: { lines: { show: true } },
          yaxis: { lines: { show: true } }
        },
        title: {
          text: 'Tendencias Mensuales',
          margin: 50,
          offsetX: 10,
          style: {
            fontSize: '20px',
            fontWeight: 'bold',
          }
        }
        }
      })
    })
  }
}
