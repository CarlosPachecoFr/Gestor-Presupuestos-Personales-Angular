import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TransaccionService } from '../../../services/transaccion.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { first, firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-formulario-transaccion',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario-transaccion.component.html',
  styleUrl: './formulario-transaccion.component.css'
})
export class FormularioTransaccionComponent {

  valorTipo: string = 'ingreso';

  formularioTransaccion: FormGroup;

  constructor(private formBuilder: FormBuilder, private transaccionService: TransaccionService) {
    this.formularioTransaccion = this.formBuilder.group({
      tipo: ['ingreso'],
      cantidad: ['', [Validators.required, Validators.min(0.01)]],
      categoria: [''],
      descripcion: ['', Validators.required]
    })
  }

  cambiarTipo(event: Event) {
    const tipoSeleccionado = event.target as HTMLSelectElement;
    this.valorTipo = tipoSeleccionado.value;
  }

  async crearTransaccion(){
    if(this.formularioTransaccion.valid){
      const transaccion = this.formularioTransaccion.value;
      await firstValueFrom(this.transaccionService.crearTransaccion(transaccion));
      this.formularioTransaccion.reset();
    }
    else {
      this.formularioTransaccion.markAllAsTouched();
    }
  }

}
