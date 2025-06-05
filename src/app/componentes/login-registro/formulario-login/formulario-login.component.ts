import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-login',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-login.component.html',
  styleUrl: './formulario-login.component.css'
})
export class FormularioLoginComponent {
  formularioLogin: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formularioLogin = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  @Output() registrar = new EventEmitter<void>();
  mostrarRegistro(){
    this.registrar.emit();
  }

}
