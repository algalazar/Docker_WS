import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../classes/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  public todo: Todo;

  constructor(public todoService: TodoService) {

  }

  ngOnInit() {
  }

  public completeTodo(): void {
    this.todoService.completeTodo(this.todo.id);
  }

  public reopenTodo(): void {    
    this.todoService.reopenTodo(this.todo.id);
  }

  public deleteTodo(): void {
    this.todoService.deleteTodo(this.todo.id);
  }

}
