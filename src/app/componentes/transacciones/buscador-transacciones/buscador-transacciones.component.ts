import { CommonModule, NgClass } from '@angular/common';
import { Component, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-buscador-transacciones',
  imports: [ReactiveFormsModule, CommonModule, NgClass],
  templateUrl: './buscador-transacciones.component.html',
  styleUrl: './buscador-transacciones.component.css'
})
export class BuscadorTransaccionesComponent {

  @Output() filtrarTransaccion = new EventEmitter<{textoFiltrado: string, tipo: string}>();

  @Output() aplicarFiltros = new EventEmitter<string>();

  textoActual: string = '';
  tipoActual: string = 'todo';
  abrirModalFiltros: boolean = false;
  botonActivo: number = 0; // 0 = ninguno, 1 = menor, 2 = entre, 3 = mayor
  valorBoton: string = '';

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
    this.valorBoton = '';
    this.botonActivo = 0;
    this.formularioBuscador.reset({textoFiltrado: '', tipo: 'todo'});
    this.filtrarTransaccion.emit({textoFiltrado: '', tipo: 'todo'});
    this.aplicarFiltros.emit('');
    this.cdRef.detectChanges();
  }

  cambiarEstadoModal(){
    this.abrirModalFiltros = !this.abrirModalFiltros;
  }
  
  tocarBoton(numero: number){
    this.botonActivo = numero;

    if(numero === 1){
      this.valorBoton = 'menor';
    } else if(numero === 2){
      this.valorBoton = 'entre';
    } else if(numero === 3){
      this.valorBoton = 'mayor';
    } else {
      this.valorBoton = '';
    }
  }

  aplicarFiltro(){
    this.aplicarFiltros.emit(this.valorBoton);
    this.cambiarEstadoModal();
  }
}
