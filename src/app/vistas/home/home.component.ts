import { Component } from '@angular/core';
import { TarjetasDatosComponent } from "../../componentes/comunes/tarjetas-datos/tarjetas-datos.component";
import { BarraNavegacionComponent } from "../../componentes/comunes/barra-navegacion/barra-navegacion.component";
import { DashboardComponent } from "../dashboard/dashboard.component";

@Component({
  selector: 'app-home',
  imports: [DashboardComponent, TarjetasDatosComponent, BarraNavegacionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  opcionMenu: string = 'dashboard';

}
