import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-login',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-login.component.html',
  styleUrl: './formulario-login.component.css'
})
export class FormularioLoginComponent {
  formularioLogin: FormGroup;
  mensajeError: string = '';

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.formularioLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      contraseña: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  @Output() registrar = new EventEmitter<void>();
  mostrarRegistro(){
    this.registrar.emit();
  }

  async loginUsuario(){
    if(this.formularioLogin.valid){
      const request = this.formularioLogin.value;
      try {
        const response = await firstValueFrom(this.authService.loginUsuario(request));
        localStorage.setItem('token', response.access_token);
        console.log('Token guardado en localStorage:', response.access_token);
        this.formularioLogin.reset();
        this.router.navigate(['/home']);
      } catch (error: any) {
        if (error.status === 403) {
          this.mensajeError = 'Email o contraseña incorrectos';
        }
      }
    }
    else {
      this.formularioLogin.markAllAsTouched();
    }
  }

}
