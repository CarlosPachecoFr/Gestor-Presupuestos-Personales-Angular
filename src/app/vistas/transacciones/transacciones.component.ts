import { Component } from '@angular/core';
import { BuscadorTransaccionesComponent } from "../../componentes/transacciones/buscador-transacciones/buscador-transacciones.component";
import { TodasTransaccionesComponent } from "../../componentes/transacciones/todas-transacciones/todas-transacciones.component";

@Component({
  selector: 'app-transacciones',
  imports: [BuscadorTransaccionesComponent, TodasTransaccionesComponent],
  templateUrl: './transacciones.component.html',
  styleUrl: './transacciones.component.css'
})
export class TransaccionesComponent {

  filtros = {
    textoFiltrado: '',
    tipo: 'todo'
  };
  

  filtrarTransaccion(filtro: { textoFiltrado: string; tipo: string }) {
    this.filtros = filtro;
    
  }
}
