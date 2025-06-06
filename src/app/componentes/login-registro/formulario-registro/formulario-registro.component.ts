import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-formulario-registro',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-registro.component.html',
  styleUrl: './formulario-registro.component.css'
})
export class FormularioRegistroComponent {
  formularioRegistro: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService){
    this.formularioRegistro = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contraseña: ['', Validators.required]
    });
  }

  @Output() login = new EventEmitter<void>();
  mostrarLogin() {
      this.login.emit();
  }

  async registrarUsuario(){
    if(this.formularioRegistro.valid){
      const request = this.formularioRegistro.value;
      const response = await firstValueFrom(this.authService.registrarUsuario(request));
      localStorage.setItem('token', response.access_token);
      console.log('Token guardado en localStorage:', response.access_token);
      this.formularioRegistro.reset();
    }else{
      this.formularioRegistro.markAllAsTouched();
    }
  }

}
