import { Component } from '@angular/core';
import { TodoMetasComponent } from "../../componentes/metas/todo-metas/todo-metas.component";

@Component({
  selector: 'app-metas',
  imports: [TodoMetasComponent],
  templateUrl: './metas.component.html',
  styleUrl: './metas.component.css'
})
export class MetasComponent {

}
