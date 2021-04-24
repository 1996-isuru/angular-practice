import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  // @Input() todo: Todo;

  todos:Todo[];

  constructor(todos:Todo[]) { 
    this.todos = todos;
  }

  ngOnInit(): void {
    this.todos = [
      {
        id: 1,
        title: 'Todo One',
        completed: false
      },
      {
        id: 2,
        title: 'Todo Two',
        completed: true 
      },
      {
        id: 3,
        title: 'Todo Three',
        completed: false
      }
    ]
  }

}
