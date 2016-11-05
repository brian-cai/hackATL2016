import { Component } from '@angular/core';

import { NavController, ViewController } from 'ionic-angular';
import { Camera, Transfer, FileUploadOptions } from 'ionic-native';

@Component({
  selector: 'page-import',
  templateUrl: 'import.html'
})
export class ImportPage {
  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController
  ) {
  }
  post: any = {};
  dismiss() {
    this.viewCtrl.dismiss();
  }
  imageUrl: String;
  getPic(method) {
    let options = {
      destinationType: 1,
      sourceType: method,
      allowEdit: true,
      correctOrientation: true,
      saveToPhotoAlbum: true
    }
    Camera.getPicture(options).then((imageData) => {
      this.post.image = imageData;
      this.submit();

      return imageData;
    }, (err) => {
      alert(err);
    })
  }
  submit() {
    const file = new Transfer();
    file.upload(this.post.image, "http://mealme.s3.amazonaws.com", null).then((data) => {
      alert("SUCCESS");
    }, (err) => {
      alert("ERR");
    });
  }
}
