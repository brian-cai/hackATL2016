import { User } from '../providers/user';
import { Globals } from '../providers/globals';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage;
  userCreds: any;
  public apiKey: any;
  constructor(
    public user: User,
    public storage: Storage,
    public platform: Platform,
    public globals: Globals
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
    //this.rootPage = TabsPage;

    this.storage.get("apiKey").then((apiKey) => {
        alert(apiKey);
      if (apiKey) {
        this.apiKey = apiKey;
        this.globals.apiKey = apiKey;
        this.rootPage = TabsPage;
      }
      else {
        this.rootPage = LoginPage;
      }
    });

    
  }
}
