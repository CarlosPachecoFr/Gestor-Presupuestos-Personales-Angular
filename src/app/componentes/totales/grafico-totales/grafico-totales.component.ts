import { Component } from '@angular/core';
import { ApexChart, ApexTitleSubtitle, ApexResponsive, ApexDataLabels, ApexLegend, ApexTooltip, ApexPlotOptions, NgApexchartsModule } from 'ng-apexcharts';
import { TransaccionService } from '../../../services/transaccion.service';

export type DonutChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip;
  responsive: ApexResponsive[];
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  legend: ApexLegend;
  colors: string[];
}

@Component({
  selector: 'app-grafico-totales',
  imports: [NgApexchartsModule],
  templateUrl: './grafico-totales.component.html',
  styleUrl: './grafico-totales.component.css'
})
export class GraficoTotalesComponent {

  public donutChartOptionsGastos!: DonutChartOptions;
  public donutChartOptionsIngresos!: DonutChartOptions;
  mostrarIngresos: boolean = true;

  constructor(private transaccionService: TransaccionService) { }

  ngOnInit() {
    this.cargarDatosDonutGastos();
    this.cargarDatosDonutIngresos();
    this.transaccionService.transaccionesActualizadas$.subscribe(() => {
      this.cargarDatosDonutGastos();
      this.cargarDatosDonutIngresos();
    });
  }

  cargarDatosDonutGastos(){
    this.transaccionService.obtenerTotalGastosPorCategoria().subscribe(data => {
      const porcentajes = data.map((item: any) => item[1]);
      const categorias = data.map((item: any) => item[0]);
      
      this.donutChartOptionsGastos = {
        series: porcentajes,
        chart:{
          type: 'donut',
          height: 350,
        }, 
        labels: categorias,
        title: {
          text: "Gastos Totales por Categoría",
          margin: 10,
          style: {
            fontSize: '19px',
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
          offsetY: 50,
        },
        plotOptions: {
          pie: {
            donut: {
              size: '0%',
            }
          }
        },
        responsive: [
          {
          breakpoint: 640,
          options: {
            title: {
              style: {
                fontSize: '16px',
              }
            },
            legend: {
              offsetY: 20,
              fontSize: '10px',
            }
          }
        }
      ]
      }
    })
  }

  cargarDatosDonutIngresos(){
    this.transaccionService.obtenerTotalIngresosPorCategoria().subscribe(data => {
      const porcentajes = data.map((item: any) => item[1]);
      const categorias = data.map((item: any) => item[0]);
      
      this.donutChartOptionsIngresos = {
        series: porcentajes,
        chart:{
          type: 'donut',
          height: 350,
        }, 
        labels: categorias,
        title: {
          text: "Ingresos Totales por Categoría",
          margin: 10,
          style: {
            fontSize: '19px',
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
          offsetY: 50,
        },
        plotOptions: {
          pie: {
            donut: {
              size: '0%',
            }
          }
        },
        responsive: [{
          breakpoint: 640,
          options: {
            title: {
              style: {
                fontSize: '16px',
              }
            },
            legend: {
              offsetY: 20,
              fontSize: '10px',
            }
          }
        }]
      }
    })
  }

  cambiarGrafico() {
    this.mostrarIngresos = !this.mostrarIngresos;
  }
}
