import { Component } from '@angular/core';
import { FormularioLoginComponent } from "../../componentes/login-registro/formulario-login/formulario-login.component";
import { FormularioRegistroComponent } from "../../componentes/login-registro/formulario-registro/formulario-registro.component";

@Component({
  selector: 'app-login-registro',
  imports: [FormularioLoginComponent, FormularioRegistroComponent],
  templateUrl: './login-registro.component.html',
  styleUrl: './login-registro.component.css'
})
export class LoginRegistroComponent {
  mostrarLogin: boolean = true;

  cambiarFormulario(){
    this.mostrarLogin = !this.mostrarLogin;
  }
}
