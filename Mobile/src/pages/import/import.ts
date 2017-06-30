import { Component } from '@angular/core';

import { NavController, ViewController, Platform } from 'ionic-angular';
import { Camera } from 'ionic-native';
import moment from 'moment';
import { Image } from "../../providers/image";
import { Yelp } from '../../providers/yelp'

import { Globals } from '../../providers/globals';

@Component({
    selector: 'page-import',
    templateUrl: 'import.html'
})
export class ImportPage {

    constructor(
        public navCtrl: NavController,
        public viewCtrl: ViewController,
        public platform: Platform,
        public image: Image,
        public yelp: Yelp,
        public globals: Globals
    ) {
    }
    post: any = {};

    ionViewDidLoad() {
    }

    yelpResults: any = [];
    dismiss() {
        this.viewCtrl.dismiss();
    }   
    getPic(method) {
        Camera.getPicture({
            destinationType: 0,
            sourceType: method,
            allowEdit: true,
            correctOrientation: true,
            saveToPhotoAlbum: true
        }).then((imageData) => {
 let base64Image = 'data:image/jpeg;base64,' + imageData;
            this.post.image = base64Image;
            console.log("ASSIGNED" ,this.post.image);
        }, (err) => {
            console.log("ERROR", err);
        })
    }
    search() {
        this.yelp.search({
            location: this.post.location,
            searchTerm: this.post.restaurant
        }).subscribe(
            res => {
                this.yelpResults = res.businesses;
            },
            err => {
                console.log(err);
            },
            () => {
            }
            )
    }
    submit() {
        this.post.timeStamp = moment().format();
        if (!this.post.image) { this.post.image = "owuheurhweowers" };
        if (!this.post.timeStamp) { this.post.timeStamp = null };
        if (!this.post.location) { this.post.location = null };
        if (!this.post.restaurant) { this.post.restaurant = null };
        if (!this.post.food) { this.post.food = null };
        if (!this.post.restaurantId) { this.post.restaurantId = false };
        console.log(this.post.restaurantId);
        if (!this.globals.apiKey) { this.globals.apiKey = null };
        var fin = {
            imageUrl: this.post.image,
            timeStamp: this.post.timeStamp,
            location: this.post.location,
            restaurant: this.post.restaurant,
            food: this.post.food,
            yelpID: this.post.restaurantId,
            eatStreetAPIKey: false,
            apiKey: this.globals.apiKey
        }
        console.log(this.post.restaurantId);
        this.image.share(fin).subscribe(
            res => {
                this.yelpResults = res;
                this.dismiss();
                console.log(res);
            },
            err => {
                console.log(err);
            },
            () => {
            }
        )
    }

}
