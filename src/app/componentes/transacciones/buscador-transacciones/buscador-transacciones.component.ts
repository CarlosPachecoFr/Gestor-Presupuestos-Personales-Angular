import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-buscador-transacciones',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './buscador-transacciones.component.html',
  styleUrl: './buscador-transacciones.component.css'
})
export class BuscadorTransaccionesComponent {

  @Output() filtrarTransaccion = new EventEmitter<{textoFiltrado: string, tipo: string}>();

  textoActual: string = '';
  tipoActual: string = 'todo';

  formularioBuscador: FormGroup;

  constructor(private formbuilder: FormBuilder, private cdRef: ChangeDetectorRef) {
    this.formularioBuscador = this.formbuilder.group({
      textoFiltrado: [''],
      tipo: ['todo']
    });
   }

  buscarTransaccion(event: any) {
    const textoFiltrado = this.formularioBuscador.get('textoFiltrado')?.value?.toLowerCase() || '';
    const tipo = this.formularioBuscador.get('tipo')?.value || 'todo';
    this.textoActual = textoFiltrado;
    this.tipoActual = tipo;
    this.filtrarTransaccion.emit({textoFiltrado, tipo});
    this.cdRef.detectChanges();
  }

  limpiarBuscador() {
    this.textoActual = '';
    this.tipoActual = 'todo';
    this.formularioBuscador.reset({textoFiltrado: '', tipo: 'todo'});
    this.filtrarTransaccion.emit({textoFiltrado: '', tipo: 'todo'});
    this.cdRef.detectChanges();
  }

}
