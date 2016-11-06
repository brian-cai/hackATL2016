import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Globals provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Globals {
  apiUrl = "https://mealme-app.herokuapp.com/";
  dbUrl = "https://mealme-db.herokuapp.com/";
  apiKey:any;
  constructor(public http: Http) {
    console.log('Hello Globals Provider');
  }

}
