import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'search-page',
  templateUrl: 'search.html'
})
export class SearchPage {

  constructor(public navCtrl: NavController) {

  }
  search = "";
  onInput(event) {
    console.log(event);
  }
  onCancel(event) {
    console.log(event);
  }
}
