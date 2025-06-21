import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-buscador-transacciones',
  imports: [ReactiveFormsModule],
  templateUrl: './buscador-transacciones.component.html',
  styleUrl: './buscador-transacciones.component.css'
})
export class BuscadorTransaccionesComponent {

  @Output() filtrarTransaccion = new EventEmitter<string>();

  textoActual: string = '';

  formularioBuscador: FormGroup;

  constructor(private formbuilder: FormBuilder) {
    this.formularioBuscador = this.formbuilder.group({
      texto: ['']
    });
   }

  buscarTransaccion(event: any) {
    const texto = event.target.value.toLowerCase();
    this.textoActual = texto;
    this.filtrarTransaccion.emit(texto);
  }

  limpiarBuscador() {
    this.textoActual = '';
    this.formularioBuscador.reset();
    this.filtrarTransaccion.emit('');
  }

}
