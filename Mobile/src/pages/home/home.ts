import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController, NavController } from 'ionic-angular';
import moment from "moment";
import { CommentsPage } from "../comments/comments"
<<<<<<< HEAD
import { OrderModalPage } from '../order-modal/order-modal';
import {Yelp} from '../../providers/yelp';
=======
import { ModalPage } from "../modal/modal"
>>>>>>> 1148029801c32cd75ffe377becfec2f88fc4107d

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  commentsPage = CommentsPage;

  modalRoot: any = ModalPage;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public yelp:Yelp
  ) {

  }
  longDate(date) {
    return moment(date).format("MMMM D, YYYY");
  }
  ago(date) {
    return moment(date).fromNow();
  }
  posts: any = [{
    user: {
      name: "Wilson Hobbs",
      username: "wilsonhobbs",
      profileImg: "assets/profile1.jpg"
    },
    likes: ["wilsonhobbs", "nathan", "nick"],
    comments: [{
      user: {
        name: "Wilson Hobbs",
        profileImg: "assets/profile1.jpg",
        username: "wilsonhobbs"
      },
      content: "I love this!",
      timestamp: "2016-11-05T04:09:45+00:00"
    }],
    image: "assets/testimg.jpg",
    caption: "I adore this pineapple!",
    timestamp: "2016-11-05T04:09:45+00:00",
    sponsored: true
  },
  {
    user: {
      name: "Nate",
      username: "nate",
      profileImg: "https://images.unsplash.com/photo-1475155000329-a5679839c452"
    },
    likes: ["wilsonhobbs", "nathan", "nick"],
    comments: [{
      user: {
        name: "Wilson Hobbs",
        profileImg: "assets/profile1.jpg",
        username: "wilsonhobbs"
      },
      content: "I love this!",
      timestamp: "2016-11-05T04:09:45+00:00"
    }, {
      user: {
        name: "Nate",
        profileImg: "https://images.unsplash.com/photo-1475155000329-a5679839c452",
        username: "nate"
      },
      content: "This is the worst pic ever!",
      timestamp: "2016-11-05T04:09:45+00:00"
    }],
    image: "https://images.unsplash.com/photo-1426869981800-95ebf51ce900",
    caption: "Mmmmmm, chicken wings!",
    timestamp: "2016-09-05T04:09:45+00:00"
<<<<<<< HEAD
  }];

  placeOrder(item) {
    console.log("PRESSED")
    let modal = this.modalCtrl.create(OrderModalPage, item);
    modal.present();
  }
=======
  }]
  placeOrder(item) { 
    let modal = this.modalCtrl.create(ModalPage);
    modal.present();
}
>>>>>>> 1148029801c32cd75ffe377becfec2f88fc4107d
}


