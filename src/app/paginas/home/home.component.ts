import { Component } from '@angular/core';
import { TarjetasDatosComponent } from "../../componentes/home/tarjetas-datos/tarjetas-datos.component";
import { FormularioTransaccionComponent } from "../../componentes/home/formulario-transaccion/formulario-transaccion.component";
import { TransaccionesRecientesComponent } from "../../componentes/home/transacciones-recientes/transacciones-recientes.component";
import { GraficosTransaccionesComponent } from "../../componentes/home/graficos-transacciones/graficos-transacciones.component";

@Component({
  selector: 'app-home',
  imports: [TarjetasDatosComponent, FormularioTransaccionComponent, TransaccionesRecientesComponent, GraficosTransaccionesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
