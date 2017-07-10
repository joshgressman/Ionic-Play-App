import { Component } from '@angular/core';

@Component({
  selector: 'app-touch-event',
  template: `
  <div class="gestures" (click)="onElementClicked()">
   Click Me
  </div>
  <hr>
  <div class="gestures" (tap)="onElementTapped()">
   Tap Me
  </div>
  <hr>
  <div class="gestures" (press)="onElementPress()">
   Long Press Me
  </div>
  `
})
export class TouchEventComponent {

  onElementClicked(){
    console.log("I was clicked");
  }

  onElementTapped(){
    console.log("I was tapped");
  }

  onElementPress(){
    console.log("I was pressed");
  }

}
