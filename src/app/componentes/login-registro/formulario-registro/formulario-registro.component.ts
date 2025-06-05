import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-registro',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-registro.component.html',
  styleUrl: './formulario-registro.component.css'
})
export class FormularioRegistroComponent {
  formularioRegistro: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.formularioRegistro = this.formBuilder.group({
      nombre: [''],
      apellido: [''],
      email: [''],
      password: ['']
    });
  }

@Output() login = new EventEmitter<void>();
mostrarLogin() {
    this.login.emit();
}
}
