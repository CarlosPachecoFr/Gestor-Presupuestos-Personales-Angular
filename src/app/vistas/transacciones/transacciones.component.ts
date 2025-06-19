import { Component } from '@angular/core';
import { BuscadorTransaccionesComponent } from "../../componentes/transacciones/buscador-transacciones/buscador-transacciones.component";

@Component({
  selector: 'app-transacciones',
  imports: [BuscadorTransaccionesComponent],
  templateUrl: './transacciones.component.html',
  styleUrl: './transacciones.component.css'
})
export class TransaccionesComponent {

}
