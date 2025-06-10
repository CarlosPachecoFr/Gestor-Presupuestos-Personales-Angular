import { Component } from '@angular/core';
import { TarjetasDatosComponent } from "../../componentes/home/tarjetas-datos/tarjetas-datos.component";
import { FormularioTransaccionComponent } from "../../componentes/home/formulario-transaccion/formulario-transaccion.component";

@Component({
  selector: 'app-home',
  imports: [TarjetasDatosComponent, FormularioTransaccionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
