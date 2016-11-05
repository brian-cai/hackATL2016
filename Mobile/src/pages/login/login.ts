import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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

  viewState = 'signup';
  inputType = 'password';
  
  constructor(public navCtrl: NavController) {
    
  }

  ionViewDidLoad() {
    console.log('Hello Organisations Page');
    
  }
  
  //to show hide login and signup
    public changeState(stateName){ 
      
      this.viewState = stateName;
      console.log(this.viewState);
      
    }
  
  
  // Hide & show password function
  public hideShowPassword = function(){
    console.log('clicked');
    if (this.inputType == 'password')
      this.inputType = 'text';
    else
      this.inputType = 'password';
  };

}
