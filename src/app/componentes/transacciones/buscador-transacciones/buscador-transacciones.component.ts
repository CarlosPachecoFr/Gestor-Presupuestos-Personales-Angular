import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buscador-transacciones',
  imports: [],
  templateUrl: './buscador-transacciones.component.html',
  styleUrl: './buscador-transacciones.component.css'
})
export class BuscadorTransaccionesComponent {

  @Output() filtrarTransaccion = new EventEmitter<string>();

  buscarTransaccion(event: any) {
    const texto = event.target.value.toLowerCase();
    this.filtrarTransaccion.emit(texto);
  }

}
