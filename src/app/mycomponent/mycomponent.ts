import { Component } from '@angular/core';

@Component({
  selector: 'my-component',
  templateUrl: 'mycomponent.html'
})
export class MyComponent {
    public name: string = 'InRhythm';
    public numOfBoxes: number = 0;
}