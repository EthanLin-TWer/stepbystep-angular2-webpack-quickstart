import {Component, Inject} from 'angular2/core';
import {TodoService} from "./todo-service";
import {TodoList} from './todo-list';

@Component({
    selector: 'todo-input',
    template: `<h1>Welcome to Angular 2 World</h1>
        <div>
            <form (submit)="onSubmit()">
                <input type="text" [(ngModel)]="todoModel">
            </form>
        </div>
    `
})

export class TodoInput {
    constructor (@Inject(TodoService) public todoService) {}

    todoModel;

    onSubmit() {
        this.todoService.todos.push(this.todoModel);
    }
}
