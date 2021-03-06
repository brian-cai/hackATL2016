import { Component } from '@angular/core';
import { NavController, ViewController, ToastController, NavParams } from 'ionic-angular';

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
  foodImageSrc = "/assets/testimg.jpg";

  price = 14;
  foodAmount: Number = 1;
  totalPrice = 14;
  resturant = "Willy's";
  location = "Atlanta, GA 30302";

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public toastCtrl: ToastController,
    public navParams: NavParams
  ) {
    console.log(this.navParams.data);
  }
  post = this.navParams.data;
  ionViewDidLoad() {
    console.log('Hello OrderModalPage Page');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  changePrice(e) {
    this.totalPrice = e.value * this.price;
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Order was successfully made',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      this.dismiss();
    });

    toast.present();
  }
}
