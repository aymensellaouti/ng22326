import { inject, Injectable, Signal, signal } from "@angular/core";
import { Todo } from "../model/todo";
import { LoggerService } from "../../services/logger";
import { APP_API } from "../../config/app-api.config";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

export interface TodoApi {
  userId: number
  id: number
  title: string
  completed: boolean
}


@Injectable({
  providedIn: 'root',
})
export class TodoService {
  #todos = signal<Todo[]>([]);
  loggerService = inject(LoggerService);
  http = inject(HttpClient);
  /**
   * elle retourne la liste des todos
   *
   * @returns Todo[]
   */
  getTodos(): Signal<Todo[]> {
    return this.#todos.asReadonly();
  }

  getTodosFromApi(): Observable<TodoApi[]> {
    return this.http.get<TodoApi[]>(APP_API.todo);
  }

  /**
   *Elle permet d'ajouter un todo
   *
   * @param todo: Todo
   *
   */
  addTodo(todo: Todo): void {
    this.#todos.update((todos) => [...todos, todo]);
  }

  /**
   * Delete le todo s'il existe
   *
   * @param todo: Todo
   * @returns boolean
   */
  deleteTodo(todo: Todo) {
    this.#todos.update((todos) => todos.filter((actualTodo) => actualTodo != todo));
  }

  /**
   * Logger la liste des todos
   * @returns void
   */
  logTodos() {
    this.loggerService.log(this.#todos());
  }
}
