import { Component } from '@angular/core';
import { FormularioTransaccionComponent } from "../../componentes/dasboard/formulario-transaccion/formulario-transaccion.component";
import { GraficosTransaccionesComponent } from "../../componentes/dasboard/graficos-transacciones/graficos-transacciones.component";
import { TransaccionesRecientesComponent } from "../../componentes/dasboard/transacciones-recientes/transacciones-recientes.component";


@Component({
  selector: 'app-dashboard',
  imports: [FormularioTransaccionComponent, GraficosTransaccionesComponent, TransaccionesRecientesComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
