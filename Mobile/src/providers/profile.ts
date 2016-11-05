import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Globals } from '../providers/globals';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
  Generated class for the Profile provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Profile {

  constructor(
    public http: Http,
    public globals: Globals
    ) {
    console.log('Hello Profile Provider');
  }
  get(userId) {
    var url = this.globals.apiUrl + userId;
    return this.http.get(url)
      .map((results: Response) => {
        return results.json();
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  post(userId, body) {
    let bodyString = JSON.stringify(body);
    let headers = new Headers({ 'Content-Type': "application/json" });
    let options = new RequestOptions({ headers: headers });
    let url = this.globals.apiUrl + userId;
    this.http.post(url, bodyString, options)
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

  }
}
