import { User } from '../../providers/user';
import { Globals } from '../../providers/globals';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs"

/*
  Generated class for the Login9 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  app = {
    viewState: 'signup',
    inputType: 'password',
  }
  public userdetails = {
    email: "",
    password: "",
    phone: "",
    fname: "",
    lname: "",
    apiKey: ""
  }
  constructor(
    public navCtrl: NavController,
    public user: User,
    public globals: Globals
  ) {

  }

  ionViewDidLoad() {
    console.log('Hello Organisations Page');

  }

  //to show hide login and signup
  public changeState(stateName) {

    this.app.viewState = stateName;
    console.log(this.app.viewState);

  }


  // Hide & show password function
  public hideShowPassword() {
    console.log('clicked');
    if (this.app.inputType == 'password')
      this.app.inputType = 'text';
    else
      this.app.inputType = 'password';
  };
  login() {
    this.user.login(this.userdetails).subscribe(
      res => {
        console.log(res);
        if (res.error) {
          alert(res);
        } else {
          this.globals.apiKey = res.data.apiKey;
          this.userdetails = res.data.apiKey;
          this.navCtrl.setRoot(TabsPage);
        }
      },
      err => {
        console.log("err", err.details);
      },
      () => {
        //event.complete();
      }
    );
  }
  signup() {
    this.user.registerEatStreet(this.userdetails).subscribe(
      res => {
        console.log(res);
        if (res.error) {
          alert(res.details);
        } else {
          this.globals.apiKey = res.data.apiKey;
          this.userdetails.apiKey = res.data.apiKey;
          this.navCtrl.setRoot(TabsPage);
        }
      },
      err => {
        console.log("err", err.details);
      },
      () => {
        //event.complete();
      }
    );
    this.user.regNative(this.userdetails).subscribe(
      res => {
        console.log(res);
        if (res.error) {
          alert(res.details);
        } else {
          this.globals.apiKey = res.data.apiKey;
          this.navCtrl.setRoot(TabsPage);
        }
      },
      err => {
        console.log("err", err.details);
      },
      () => {
        //event.complete();
      }
    );
  }

}
