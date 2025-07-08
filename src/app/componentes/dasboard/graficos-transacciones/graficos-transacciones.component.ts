import { Component } from '@angular/core';
import { NgApexchartsModule, ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle, ApexResponsive, ApexDataLabels, ApexLegend, ApexTooltip, ApexPlotOptions } from 'ng-apexcharts';
import { TransaccionService } from '../../../services/transaccion.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  responsive: ApexResponsive[];
};

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
  selector: 'app-graficos-transacciones',
  imports: [NgApexchartsModule],
  templateUrl: './graficos-transacciones.component.html',
  styleUrl: './graficos-transacciones.component.css'
})
export class GraficosTransaccionesComponent {
  public chartOptions!: ChartOptions;
  public donutChartOptionsGastos!: DonutChartOptions;
  public donutChartOptionsIngresos!: DonutChartOptions;
  mostrarIngresos: boolean = true;

  constructor(private transaccionService: TransaccionService) { }

  ngOnInit() {
    this.cargarDatosArea();
    this.cargarDatosDonutGastos();
    this.cargarDatosDonutIngresos();
    this.transaccionService.transaccionesActualizadas$.subscribe(() => {
      this.cargarDatosArea();
      this.cargarDatosDonutGastos();
      this.cargarDatosDonutIngresos();
    });
  }

  private sanitizeNumberArray(arr: any[]): number[] {
    return arr.map(val => (val === null || val === undefined) ? 0 : val);
  }

  private sanitizeStringArray(arr: any[]): string[] {
    return arr.map(val => (val === null || val === undefined) ? '' : val.toString());
  }

  cargarDatosArea() {
    this.transaccionService.obtenerIngresosUltimosMeses().subscribe(ingresosData => {
      this.transaccionService.obtenerGastosUltimosMeses().subscribe(gastosData => {

        const ingresosRaw = ingresosData.map((item: any) => item[1]);
        const gastosRaw = gastosData.map((item: any) => item[1]);
        const mesesRaw = ingresosData.map((item: any) => item[0]);

        const ingresos = this.sanitizeNumberArray(ingresosRaw);
        const gastos = this.sanitizeNumberArray(gastosRaw);
        const meses = this.sanitizeStringArray(mesesRaw);

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
            height: 400,
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
                  fontSize: '10px',
                }
              }
            }
          ]
        };

      });
    });
  }

  cargarDatosDonutGastos() {
    this.transaccionService.obtenerGastosPorCategoria().subscribe(data => {
      const porcentajesRaw = data.map((item: any) => item[1]);
      const categoriasRaw = data.map((item: any) => item[0]);

      const porcentajes = this.sanitizeNumberArray(porcentajesRaw);
      const categorias = this.sanitizeStringArray(categoriasRaw);

      this.donutChartOptionsGastos = {
        series: porcentajes,
        chart: {
          type: 'donut',
        },
        labels: categorias,
        title: {
          text: "Gastos Mensuales por Categoría",
          margin: 10,
          style: {
            fontSize: '20px',
            fontWeight: 'bold',
          }
        },
        dataLabels: {
          enabled: true,
          formatter: (val: number) => val.toFixed(1) + '%'
        },
        tooltip: {
          y: {
            formatter: (val: number) => `${val.toFixed(1)} €`
          }
        },
        colors: ['#f93333', '#f99633', '#f3f933', '#6cf933', '#33b1f9', '#c633f9', '#f933e7'],
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

  cargarDatosDonutIngresos() {
    this.transaccionService.obtenerIngresosPorCategoria().subscribe(data => {
      const porcentajesRaw = data.map((item: any) => item[1]);
      const categoriasRaw = data.map((item: any) => item[0]);

      const porcentajes = this.sanitizeNumberArray(porcentajesRaw);
      const categorias = this.sanitizeStringArray(categoriasRaw);

      this.donutChartOptionsIngresos = {
        series: porcentajes,
        chart: {
          type: 'donut'
        },
        labels: categorias,
        title: {
          text: "Ingresos Mensuales por Categoría",
          margin: 10,
          style: {
            fontSize: '20px',
            fontWeight: 'bold',
          }
        },
        dataLabels: {
          enabled: true,
          formatter: (val: number) => val.toFixed(1) + '%'
        },
        tooltip: {
          y: {
            formatter: (val: number) => `${val.toFixed(1)} €`
          }
        },
        colors: ['#f93333', '#f99633', '#f3f933', '#6cf933', '#33b1f9', '#c633f9', '#f933e7'],
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
