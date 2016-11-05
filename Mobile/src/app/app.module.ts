import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { SearchPage } from '../pages/search/search';
import { ImportPage } from '../pages/import/import';
import { HomePage } from '../pages/home/home';

import { ActivityPage } from '../pages/activity/activity';
import { ProfilePage } from '../pages/profile/profile';

import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    SearchPage,
    ImportPage,
    HomePage,
    TabsPage,
    ActivityPage,
    ProfilePage
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
    ProfilePage
  ],
  providers: []
})
export class AppModule { }
