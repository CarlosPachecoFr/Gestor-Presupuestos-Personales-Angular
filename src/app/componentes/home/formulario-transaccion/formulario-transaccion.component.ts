import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-transaccion',
  imports: [CommonModule],
  templateUrl: './formulario-transaccion.component.html',
  styleUrl: './formulario-transaccion.component.css'
})
export class FormularioTransaccionComponent {

  valorTipo: string = 'ingreso';

  constructor() {}

  cambiarTipo(event: Event) {
    const tipoSeleccionado = event.target as HTMLSelectElement;
    this.valorTipo = tipoSeleccionado.value;
  }

}
