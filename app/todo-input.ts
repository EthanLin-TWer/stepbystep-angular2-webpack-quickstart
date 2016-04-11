import {Component, Inject} from 'angular2/core';
import {TodoService} from "./todo-service";
import {TodoList} from './todo-list';

@Component({
    selector: 'todo-input',
    template: `<h1>Welcome to Angular 2 World</h1>
        <div>
            <input type="text" #angularInput (keydown)="onLog(angularInput.value)">
            <button (click)="onClick($event, angularInput.value)">Save And Clear</button>
        </div>
    `
})

export class TodoInput {
    constructor (@Inject(TodoService) public todoService) {}

    onClick(event, value) {
        this.todoService.todos.push(value);
        value = '';

        console.log(event, value);
    }

    onLog(value) {
        console.log(this.todoService.todos + length);
    }
}
