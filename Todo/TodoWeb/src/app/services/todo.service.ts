import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { Todo } from '../classes/todo';

@Injectable()
export class TodoService {

  private todos: Todo[];
  private nextId: number;

  constructor(private http: Http) { 

    this.load();
  }

  private load() {
    return this.http.get('http://localhost:5000/api/todo')
               .map((res: Response) => res.json())
               .subscribe(data => {
                 console.log(data);
                 this.todos = data;
               })
  }

  public getTodos(): Todo[] {
    return this.todos;
  }

  public addTodo(name: string): void {
    // let todo = new Todo(this.nextId, name);
    // this.todos.push(todo);
    // this.nextId++;
    var todo = {name: name, isComplete: false};
    console.log(todo);
    this.http.post('http://localhost:5000/api/todo', todo)
      .subscribe(
        res => {
          console.log(res);
          this.todos.push(res.json());
        },
        err => {
          console.log("Error");
        }
    );
  }

  public completeTodo(id: number): void {
    // this.todos = this.todos.filter((todo) => todo.id !== id);
    var todo = this.todos.find(t => t.id == id);
    todo.isComplete = true;

    this.updateTodo(todo);
  }

  public reopenTodo(id: number): void {
    var todo = this.todos.find(t => t.id == id);
    todo.isComplete = false;
  }

  public deleteTodo(id: number): void {
    this.http.delete('http://localhost:5000/api/todo/' + id)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error");
        }
      );

    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  private updateTodo(todo: Todo) {
    this.http.put('http://localhost:5000/api/todo/' + todo.id, todo)
      .subscribe(
        res => {
          console.log(res);          
        },
        err => {
          console.log("Error");
        }
      );
  }

}
