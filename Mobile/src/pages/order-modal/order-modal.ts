import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

/*
  Generated class for the OrderModal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-order-modal',
  templateUrl: 'order-modal.html'
})
export class OrderModalPage {

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController
  ) { }

  ionViewDidLoad() {
    console.log('Hello OrderModalPage Page');
  }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}
