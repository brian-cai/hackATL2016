import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'ModalPage',
  templateUrl: 'modal.html'
})

export class ModalPage {
  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController
  ) {

  }

    dismiss() {
    this.viewCtrl.dismiss();
  }
}
