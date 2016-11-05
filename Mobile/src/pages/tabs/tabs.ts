import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';
import { ContactPage } from '../contact/contact';
import { ProfilePage } from '../profile/profile';
import { ActivityPage } from '../activity/activity';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  feedRoot: any = HomePage;
  searchRoot: any = SearchPage;
  importRoot: any = ContactPage;
  activityRoot: any = ProfilePage;
  profileRoot: any = ActivityPage;

  constructor() {

  }
}
