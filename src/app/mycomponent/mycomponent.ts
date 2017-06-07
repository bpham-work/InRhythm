import { Component } from '@angular/core';

/**
 * Component displaying the InRhythm name and input box to enter number of boxes to render
 * */

@Component({
  selector: 'my-component',
  templateUrl: 'mycomponent.html'
})
export class MyComponent {
    public name: string = 'InRhythm';
    public numOfBoxes: number = 0;
}