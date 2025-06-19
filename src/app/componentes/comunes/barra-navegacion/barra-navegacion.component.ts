import { CommonModule, NgClass } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-barra-navegacion',
  imports: [NgClass, MatFormFieldModule, MatSelectModule, MatInputModule],
  templateUrl: './barra-navegacion.component.html',
  styleUrl: './barra-navegacion.component.css'
})
export class BarraNavegacionComponent {
  opcionMenu: string = 'dashboard';

  constructor() { }

  @Output() mostrarOpcionMenu = new EventEmitter<string>();

  cambiarOpcionMenu(opcion: string) {
    this.opcionMenu = opcion;
    this.mostrarOpcionMenu.emit(this.opcionMenu);
  }
}
