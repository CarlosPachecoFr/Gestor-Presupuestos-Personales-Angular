import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-registro',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-registro.component.html',
  styleUrl: './formulario-registro.component.css'
})
export class FormularioRegistroComponent {
  formularioRegistro: FormGroup;
  mensajeError: string = '';

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router){
    this.formularioRegistro = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      contraseña: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  @Output() login = new EventEmitter<void>();
  mostrarLogin() {
      this.login.emit();
  }

  async registrarUsuario(){
    if(this.formularioRegistro.valid){
      const request = this.formularioRegistro.value;
      try {
        const response = await firstValueFrom(this.authService.registrarUsuario(request));  
        localStorage.setItem('token', response.access_token);
        console.log('Token guardado en localStorage:', response.access_token);
        this.formularioRegistro.reset();
        this.router.navigate(['/home']);
      } catch (error: any) {
        if(error.status === 403) {
          this.mensajeError = 'El usuario ya está registrado';
        }
      }
    }
    else{
      this.formularioRegistro.markAllAsTouched();
    }
  }

}
