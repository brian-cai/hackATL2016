import { Component } from '@angular/core';
import { NavController, ViewController, LoadingController } from 'ionic-angular';
import { Dropbox } from '../../providers/dropbox';

@Component({
  selector: 'ModalPage',
  templateUrl: 'modal.html'
})

export class ModalPage {

  depth: number = 0;
  folders: any;



  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
      public dropbox: Dropbox,
    public loadingCtrl: LoadingController
  ) {

  }

    dismiss() {
    this.viewCtrl.dismiss();
  }

   ionViewDidLoad() {

    this.dropbox.setAccessToken("1lVqzhv0ZkAAAAAAAAAACyxajramtydw-sdgQqEHE2Gv7y7EHaWLT8qh-vw00Nye");
    this.folders = [];

    let loading = this.loadingCtrl.create({
      content: 'Syncing from Dropbox...'
    });

    loading.present();

    this.dropbox.getFolders().subscribe(data => {
      this.folders = data.entries;
      loading.dismiss();
    }, (err) => {
      console.log(err);
    });

  }

  openFolder(path) {

    let loading = this.loadingCtrl.create({
      content: 'Syncing from Dropbox...'
    });

    this.dropbox.getFolders(path).subscribe(data => {
      this.folders = data.entries;
      this.depth++;
      loading.dismiss();
    }, err => {
      console.log(err);
    });

  }

  addFile(path) {

  }

  goBack() {
    let loading = this.loadingCtrl.create({
      content: 'Syncing from Dropbox...'
    });


    this.dropbox.goBackFolder().subscribe(data => {
      this.folders = data.entries;
      this.depth--;
      loading.dismiss();
    }, err => {
      console.log(err);
    });
  }
}
