import { Injectable, Optional } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Globals } from '../providers/globals';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
  Generated class for the User provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class User {

  constructor(public http: Http, public globals: Globals) {
    console.log('Hello User Provider');
  }

  login(params) {
    let url = this.globals.apiUrl + "eatstreet/login/" + params.email + "/" + params.password;
    return this.http.get(url)
      .map((results: Response) => {
        return results.json();
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  registerEatStreet(params) {
    let eatStreetsUrl = this.globals.apiUrl + "eatstreet/registerUser/" + params.email + "/" + params.password + "/" + params.firstName + "/" + params.lastName + "/" + params.phone;
    var eatStreetsObj: any;
    return this.http.get(eatStreetsUrl)
      .map((results: Response) => {
        eatStreetsObj = results.json();
        return results.json();
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  regNative(params) {
    var nativeObj: any;
    let imageString = "data:image/gif;base64,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";
    let nativeUrl = this.globals.dbUrl + "newUser";
    return this.http.post(nativeUrl, {
      name: params.firstName + " " + params.lastName,
      imageUrl: imageString,
      apiKey: params.apiKey
    })
      .map((results: Response) => {
        nativeObj = results.json();
        return results.json();
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  addAddress(userAPI, aptNum: Optional, street, city, state, zip) {
    if (!aptNum) {
      aptNum = -1;
    }
    let url = this.globals.apiUrl + "eatstreet/registerUser/" + userAPI + "/" + aptNum + "/" + street + "/" + city + "/" + state + "/" + zip;
    return this.http.get(url)
      .map((results: Response) => {
        return results.json();
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  addCard(userAPI, name, zip, cvv, cardnumber, expMonth, expYear) {
    let url = this.globals.apiUrl + "eatstreet/registerUser/" + userAPI + "/" + name + "/" + zip + "/" + cvv + "/" + cardnumber + "/" + expMonth + "/" + expYear;
    return this.http.get(url)
      .map((results: Response) => {
        return results.json();
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
