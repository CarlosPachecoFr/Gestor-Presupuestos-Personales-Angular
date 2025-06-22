import { Component } from '@angular/core';
import { TarjetasDatosTotalesComponent } from "../../componentes/totales/tarjetas-datos-totales/tarjetas-datos-totales.component";
import { GraficoTotalesComponent } from "../../componentes/totales/grafico-totales/grafico-totales.component";

@Component({
  selector: 'app-totales',
  imports: [TarjetasDatosTotalesComponent, GraficoTotalesComponent],
  templateUrl: './totales.component.html',
  styleUrl: './totales.component.css'
})
export class TotalesComponent {

}
