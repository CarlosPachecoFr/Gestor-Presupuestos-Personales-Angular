import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-exportar-datos',
  imports: [ReactiveFormsModule],
  templateUrl: './exportar-datos.component.html',
  styleUrl: './exportar-datos.component.css'
})
export class ExportarDatosComponent {

  formularioExportar: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.formularioExportar = this.formBuilder.group({
      periodo: [''],
      formato: ['']
    })
  }
}
