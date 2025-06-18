import { NgClass } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-barra-navegacion',
  imports: [NgClass],
  templateUrl: './barra-navegacion.component.html',
  styleUrl: './barra-navegacion.component.css'
})
export class BarraNavegacionComponent {
  opcionMenu: string = 'dashboard';

  constructor() { }

  @Output() mostrarOpcionMenu = new EventEmitter<string>();

  cambiarOPcionMenu(opcion: string) {
    this.opcionMenu = opcion;
    this.mostrarOpcionMenu.emit(this.opcionMenu);
  }
}
