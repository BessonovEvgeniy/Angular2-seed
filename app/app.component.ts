import {Component} from '@angular/core';

@Component({
    selector: 'hello-angular',
    template: `
        <ul>
           <li *ngFor = "let name of names"> Hello {{ name }} </li>
        </ul>
    `
})

export class HelloAngular{
    names: string[];

    constructor(){
        this.names = ['Zar','Evgeniy','Denis'];
    }
}