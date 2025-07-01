import { Component } from '@angular/core';
import { TarjetaDatosAnalisisComponent } from "../../componentes/analisis/tarjeta-datos-analisis/tarjeta-datos-analisis.component";
import { GraficosAnalisisComponent } from "../../componentes/analisis/graficos-analisis/graficos-analisis.component";
import { DatosAlertasComponent } from "../../componentes/analisis/datos-alertas/datos-alertas.component";

@Component({
  selector: 'app-analisis',
  imports: [TarjetaDatosAnalisisComponent, GraficosAnalisisComponent, DatosAlertasComponent],
  templateUrl: './analisis.component.html',
  styleUrl: './analisis.component.css'
})
export class AnalisisComponent {

}
