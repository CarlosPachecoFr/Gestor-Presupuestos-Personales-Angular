import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-metas',
  imports: [NgStyle],
  templateUrl: './todo-metas.component.html',
  styleUrl: './todo-metas.component.css'
})
export class TodoMetasComponent {

  porcentaje: number = 90;
}
