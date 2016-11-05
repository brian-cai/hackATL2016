import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import moment from 'moment';
/*
  Generated class for the Comments page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html'
})
export class CommentsPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
    ) { }

  ionViewDidLoad() {
    console.log('Hello CommentsPage Page');
  }
  ago(date) {
    return moment(date).fromNow();
  }
  comments = this.navParams.data;
}
