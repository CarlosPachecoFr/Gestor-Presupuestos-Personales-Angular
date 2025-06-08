import { Component } from '@angular/core';
import { TarjetasDatosComponent } from "../../componentes/home/tarjetas-datos/tarjetas-datos.component";

@Component({
  selector: 'app-home',
  imports: [TarjetasDatosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
