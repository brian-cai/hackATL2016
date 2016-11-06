import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Globals } from '../providers/globals';
import 'rxjs/add/operator/map';

/*
  Generated class for the Yelp provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Yelp {

  constructor(
    public http: Http,
    public globals: Globals
  ) {
    console.log('Hello Yelp Provider');
  }
  search(params) {
    let eatStreetsUrl = this.globals.apiUrl + "yelp/search/" + params.location + "/" + params.searchTerm;
    return this.http.get(eatStreetsUrl)
      .map((results: Response) => {
        return results.json();
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
