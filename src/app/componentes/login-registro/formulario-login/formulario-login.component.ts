import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-formulario-login',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-login.component.html',
  styleUrl: './formulario-login.component.css'
})
export class FormularioLoginComponent {
  formularioLogin: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.formularioLogin = this.formBuilder.group({
      email: [''],
      contraseña: ['']
    });
  }

  @Output() registrar = new EventEmitter<void>();
  mostrarRegistro(){
    this.registrar.emit();
  }

  async loginUsuario(){
    if(this.formularioLogin.valid){
      const request = this.formularioLogin.value;
      const response = await firstValueFrom(this.authService.loginUsuario(request));
      localStorage.setItem('token', response.access_token);
      console.log('Token guardado en localStorage:', response.access_token);
      this.formularioLogin.reset();
    }
    else {
      this.formularioLogin.markAllAsTouched();
    }
  }

}
