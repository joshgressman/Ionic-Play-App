import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items = ["item1","item2","item3","item4","item5"]
  constructor(public navCtrl: NavController) {

  }

  onClick(){
    console.log('clicked');
  }

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
