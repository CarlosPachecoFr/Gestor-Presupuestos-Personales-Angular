import { Component } from '@angular/core';
import { NgApexchartsModule, ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle, ApexResponsive, ApexDataLabels, ApexLegend, ApexTooltip, ApexPlotOptions } from 'ng-apexcharts';
import { TransaccionService } from '../../../services/transaccion.service';
import { title } from 'node:process';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

export type DonutChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip;
  responsive?: ApexResponsive[];
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  legend: ApexLegend;
  colors: string[];
}

@Component({
  selector: 'app-graficos-transacciones',
  imports: [NgApexchartsModule],
  templateUrl: './graficos-transacciones.component.html',
  styleUrl: './graficos-transacciones.component.css'
})
export class GraficosTransaccionesComponent {
  public chartOptions!: ChartOptions;
  public donutChartOptions!: DonutChartOptions;

  constructor(private transaccionService: TransaccionService) {
  }

  ngOnInit(){
    this.cargarDatosArea();
    this.cargarDatosDonut();
    this.transaccionService.transaccionesActualizadas$.subscribe(() => {
      this.cargarDatosArea();
      this.cargarDatosDonut();
    });
  }

  cargarDatosArea(){
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

  cargarDatosDonut(){
    this.transaccionService.obtenerGastosPorCategoria().subscribe(data => {
      const porcentajes = data.map((item: any) => item[1]);
      const categorias = data.map((item: any) => item[0]);
      
      this.donutChartOptions = {
        series: porcentajes,
        chart:{
          type: 'donut'
        }, 
        labels: categorias,
        title: {
          text: "Distribución de Gastos por Categoría",
          margin: 50,
          offsetX: 10,
          style: {
            fontSize: '20px',
            fontWeight: 'bold',
          }
        },
        dataLabels: {
          enabled: true,
          formatter: (val:number) => val.toFixed(1) + '%'
        },
        tooltip: {
          y: {
            formatter: (val: number) => `${val.toFixed(1)} €`
          }
        },
        colors: ['#f93333','#f99633','#f3f933','#6cf933','#33b1f9','#c633f9','#f933e7'],
        legend: {
          position: 'right',
        },
        plotOptions: {
          pie: {
            donut: {
              size: '0%',
            }
          }
        }
      }
    })
  }
}
