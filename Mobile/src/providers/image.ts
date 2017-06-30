import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Globals } from '../providers/globals';

/*
  Generated class for the Image provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Image {

  constructor(public http: Http, public globals: Globals) {
    console.log('Hello Image Provider');
  }
  share(post) {
    let nativeUrl = this.globals.dbUrl + "newPicture";
    return this.http.post(nativeUrl, post)
      .map((results: Response) => {
        console.log(results);
        return results.json();
      })
  }
  getShare() {
    let nativeUrl = this.globals.dbUrl + "scrapePicture";
    return this.http.get(nativeUrl)
      .map((results: Response) => {
        console.log(results);
        return results.json();
      })
  }
}
