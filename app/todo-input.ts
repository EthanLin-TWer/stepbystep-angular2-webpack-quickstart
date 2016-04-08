import {Component} from 'angular2/core';
import {TodoService} from "./todo-service";

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
    constructor (public todoService: TodoService) {}

    onClick(event, value) {
        this.todoService.todos = '';

        console.log(event, value);
    }

    onLog(value) {
        this.todoService.todos = value;

        console.log(this.todoService.todos + ' length: ' + this.todoService.todos.length);
    }
}