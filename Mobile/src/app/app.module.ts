import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MyApp } from './app.component';
import { SearchPage } from '../pages/search/search';
import { ImportPage } from '../pages/import/import';
import { HomePage } from '../pages/home/home';
import { ModalPage } from '../pages/modal/modal';
import { CommentsPage } from '../pages/comments/comments';
import { LoginPage } from '../pages/login/login';
import { OrderModalPage } from '../pages/order-modal/order-modal';

import { ActivityPage } from '../pages/activity/activity';
import { ProfilePage } from '../pages/profile/profile';

import { TabsPage } from '../pages/tabs/tabs';

import { Profile } from "../providers/profile"
import { User } from "../providers/user"
import { Globals } from "../providers/globals"
import { Dropbox } from '../providers/dropbox';
import { Image } from "../providers/image";
import { Yelp } from "../providers/yelp";

@NgModule({
  declarations: [
    MyApp,
    SearchPage,
    ImportPage,
    HomePage,
    TabsPage,
    ActivityPage,
    ProfilePage,
    CommentsPage,
    LoginPage,
    OrderModalPage,
    ModalPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SearchPage,
    ImportPage,
    HomePage,
    TabsPage,
    ActivityPage,
    ProfilePage,
    CommentsPage,
    LoginPage,
    OrderModalPage,
    ModalPage
  ],
  providers: [Profile, Globals, User, Storage, Image, Yelp, Dropbox]
})
export class AppModule { }
