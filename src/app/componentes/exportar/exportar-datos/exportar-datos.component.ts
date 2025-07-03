import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TransaccionService } from '../../../services/transaccion.service';

@Component({
  selector: 'app-exportar-datos',
  imports: [ReactiveFormsModule],
  templateUrl: './exportar-datos.component.html',
  styleUrl: './exportar-datos.component.css'
})
export class ExportarDatosComponent {

  formularioExportar: FormGroup;

  constructor(private formBuilder: FormBuilder, private transaccionService: TransaccionService){
    this.formularioExportar = this.formBuilder.group({
      periodo: ['todas'],
      formato: ['excel']
    })
  }

  crearArchivo(){
    const periodo = this.formularioExportar.get('periodo')?.value;
    const formato = this.formularioExportar.get('formato')?.value;
    if(periodo && formato){
      this.transaccionService.exportarArchivo(periodo,formato).subscribe(blob => {
        const a = document.createElement('a');
        const url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = `transacciones_${periodo}.${formato === 'excel' ? 'csv' : formato}`;
        a.click();
        window.URL.revokeObjectURL(url); // limpiar memoria
      })
    }
  }
}
