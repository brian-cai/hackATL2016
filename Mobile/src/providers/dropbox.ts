import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Dropbox provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Dropbox {

  accessToken: any;
  folderHistory: any = [];

  constructor(public http: Http) {
    console.log('Hello Dropbox Provider');
  }

  // test() {
  //   var DROPBOX_APP_KEY =  this.accessToken;
  //   var client = new Dropbox.Client({key: DROPBOX_APP_KEY});
  // }

  setAccessToken(token) {
    this.accessToken = token;
  }

  getUserInfo() {
    let headers = new Headers();

    headers.append('Authorization', 'Bearer ' + this.accessToken);
    headers.append('Content-Type', 'application/json');

    return this.http.post('https://api.dropboxapi.com/2-beta-2/users/get_current_account', "null", {headers: headers}).map(res => res.json());
  }

  getFolders(path?){
    let headers = new Headers();

    headers.append('Authorization', 'Bearer ' + this.accessToken);
    headers.append('Content-Type', 'application/json');

    let folderPath;

    if(typeof(path) == "undefined" || !path) {

     folderPath = {
      path: ""
    };    
 
  } else {
 
    folderPath = {
      path: path
    }; 
 
    if(this.folderHistory[this.folderHistory.length - 1] != path){
      this.folderHistory.push(path);
    }

  }
 
  return this.http.post('https://api.dropboxapi.com/2-beta-2/files/list_folder', JSON.stringify(folderPath), {headers: headers})
    .map(res => res.json());
  }
 
  goBackFolder(){
  if(this.folderHistory.length > 0){
 
    this.folderHistory.pop();
    let path = this.folderHistory[this.folderHistory.length - 1];
 
    return this.getFolders(path);
  }
  else {
    return this.getFolders();
  }
  }
}
