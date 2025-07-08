import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { TransaccionService } from '../../../services/transaccion.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { LoaderComponent } from "../../comunes/loader/loader.component";

@Component({
  selector: 'app-formulario-transaccion',
  imports: [CommonModule, ReactiveFormsModule, LoaderComponent],
  templateUrl: './formulario-transaccion.component.html',
  styleUrl: './formulario-transaccion.component.css'
})
export class FormularioTransaccionComponent {

  valorTipo: string = 'ingreso';
  registroExitoso: boolean | null = null;
  formularioVisible: boolean = true;
  iniciandoDesvanecimiento: boolean = false;
  cargando = false;

  formularioTransaccion: FormGroup;

  constructor(private formBuilder: FormBuilder, private transaccionService: TransaccionService, private cdRef: ChangeDetectorRef) {
    this.formularioTransaccion = this.formBuilder.group({
      tipo: ['ingreso'],
      cantidad: ['', [Validators.required, Validators.min(0.01)]],
      categoria: ['', Validators.required],
      descripcion: ['', Validators.required]
    })
  }

  cambiarTipo(event: Event) {
    const tipoSeleccionado = event.target as HTMLSelectElement;
    this.valorTipo = tipoSeleccionado.value;
  }

  async crearTransaccion(){
    if(this.formularioTransaccion.valid){
      const transaccion = this.formularioTransaccion.value;
      try {
        this.cargando = true;
        this.iniciandoDesvanecimiento = true;
        this.cdRef.detectChanges();

        setTimeout(async () => {
          try {
            await firstValueFrom(this.transaccionService.crearTransaccion(transaccion));
            this.transaccionService.notificarCambio();

            this.cargando=false;
            this.formularioVisible = false;
            this.registroExitoso = true;
            this.iniciandoDesvanecimiento = false;
            this.cdRef.detectChanges();

            setTimeout(() => {
              this.registroExitoso = null;
              this.formularioVisible = true;
              this.formularioTransaccion.reset({
                tipo: 'ingreso',
                cantidad: '',
                categoria: '',
                descripcion: ''
              });
              this.cdRef.detectChanges();
            }, 3000);  
          } catch (error) {
            console.error("Error al crear el voluntario", error);
            this.cargando = false;
            this.formularioVisible = false;
            this.registroExitoso = false;
            this.iniciandoDesvanecimiento = false;
            this.formularioTransaccion.reset({
              tipo: 'ingreso',
              cantidad: '',
              categoria: '',
              descripcion: ''
            });
            this.cdRef.detectChanges();

            setTimeout(() => {
              this.registroExitoso = null;
              this.formularioVisible = true;
              this.cdRef.detectChanges();
            }, 3000);
          }
        }, 500);
      } catch (error) {
        console.error(error);
      }
    }
    else {
      this.formularioTransaccion.markAllAsTouched();
    }
  }

}
