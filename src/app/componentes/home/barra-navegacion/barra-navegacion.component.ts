import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-barra-navegacion',
  imports: [NgClass],
  templateUrl: './barra-navegacion.component.html',
  styleUrl: './barra-navegacion.component.css'
})
export class BarraNavegacionComponent {
  opcionMenu: string = 'dashboard';

  constructor() { }

  cambiarOPcionMenu(opcion: string) {
    this.opcionMenu = opcion;
    console.log('Opción de menú cambiada a:', this.opcionMenu);
  }
}
