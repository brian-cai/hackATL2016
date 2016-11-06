import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController, NavController } from 'ionic-angular';
import moment from "moment";
import { CommentsPage } from "../comments/comments"
import { OrderModalPage } from '../order-modal/order-modal';
import { Yelp } from '../../providers/yelp';

@Component({
 selector: 'page-home',
 templateUrl: 'home.html'
})
export class HomePage {
 commentsPage = CommentsPage;

 constructor(
   public navCtrl: NavController,
   public modalCtrl: ModalController,
   public yelp: Yelp
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
   sponsored: true,
   restaurantId: "great-wraps-atlanta-7"
 },
 {
   user: {
     name: "Nate",
     username: "nate",
     profileImg: "https://images.unsplash.com/photo-1475155000329-a5679839c452 (Not automatically expanded because 2MB is too large. You can expand it anyway or open it in a new window. You can also change your preferences to allow images of any file size to auto expand.) "
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
       profileImg: "https://images.unsplash.com/photo-1475155000329-a5679839c452 (Not automatically expanded because 2MB is too large. You can expand it anyway or open it in a new window.) ",
       username: "nate"
     },
     content: "This is the worst pic ever!",
     timestamp: "2016-11-05T04:09:45+00:00"
   }],
   image: "https://images.unsplash.com/photo-1426869981800-95ebf51ce900",
   caption: "Mmmmmm, chicken wings!",
   timestamp: "2016-09-05T04:09:45+00:00",
   restaurantId: "the-collective-a-salon-atlanta"
 }];

 placeOrder(item) {
   console.log("PRESSED")
   let modal = this.modalCtrl.create(OrderModalPage, item);
   modal.present();
 }
//  getRating(id) {
//    var endArray = [];
//    this.yelp.getRating({
//      id: id
//    }).subscribe(
//      res => {
//        console.log(res);
//        var rnd = Math.round(res);
//        for (let i = 0; i < 4; i++) {
//          var good = "#333";
//          if (i < rnd) {
//            good = "gold";
//          }
//          endArray.push({
//            good: good,
//            index: i
//          });
//        }
//        return endArray;
//      },
//      err => {
//      },
//      () => {
//      }
//      )
//  }
}