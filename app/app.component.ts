import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `<h1>Welcome to Angular 2 World</h1>
        <div>
            <input type="text" #angularInput>
            <button (click)="onClick(angularInput.value)">Click Me</button>
        </div>
    `

})

export class AppComponent {
    onClick(value) {
        console.log(value + 'clicked');
    }
}