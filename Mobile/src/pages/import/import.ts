import { Component } from '@angular/core';

import { NavController, ViewController, Platform } from 'ionic-angular';
import { Camera } from 'ionic-native';
import moment from 'moment';
// require('aws-sdk/dist/aws-sdk');
// import 'whatwg-fetch';
import { Image } from "../../providers/image";
import { Yelp } from '../../providers/yelp'
// import CryptoJS from 'crypto-js';

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
        public yelp: Yelp
    ) {
    }

    ionViewDidLoad() {
        //let dateTime = moment().format("YYYY-MM-DD\THH:mm:ssZ");
        //console.log(CryptoJS);
        //console.log(this.getSignatureKey("ZcV4T9RV9EE0faMLLUx3x/my/ZMblLl+40LY9p7H", dateTime, "Oregon", "s3"));
        //var date = new Date;
        //console.log(date)
    }

    yelpResults: any = {};
    post: any = {};
    dismiss() {
        this.viewCtrl.dismiss();
    }

    imageUrl: String;
    getPic(method) {
        let options = {
            destinationType: 0,
            sourceType: method,
            allowEdit: true,
            correctOrientation: true,
            saveToPhotoAlbum: true
        }
        Camera.getPicture(options).then((imageData) => {
            this.post.image = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
            console.log(err);
        })
    }
    search() {
        this.yelp.search({
            location: this.post.location,
            searchTerm: this.post.restaurant
        }).subscribe(
            res => {

            },
            err => {
            },
            () => {
            }
            )
    }
    selectRestaurant(id) {
        this.post.restaurantId = id;
    }
    submit() {
        this.post.timestamp = moment().format();
        this.image.share(this.post).subscribe(
            res => {
                this.yelpResults = res;
            },
            err => {
                console.log(err);
            },
            () => {
            }
        )
    }
    /*
        public getSignatureKey(key, dateStamp, regionName, serviceName) {
    
            var kDate = CryptoJS.HmacSHA256(dateStamp, "AWS4" + key, { asBytes: true })
            var kRegion = CryptoJS.HmacSHA256(regionName, kDate, { asBytes: true });
            var kService = CryptoJS.HmacSHA256(serviceName, kRegion, { asBytes: true });
            var kSigning = CryptoJS.HmacSHA256("aws4_request", kService, { asBytes: true });
    
            return kSigning.words.join('');
        }
        submit() {
            let dateTime = moment().format("YYYY-MM-DD\THH:mm:ssZ");
            const file = new Transfer();
            var s3URI = encodeURI("https://mealme.s3.amazonaws.com/"),
                policyBase64 = "policyBase64_file",
                signature = this.getSignatureKey("ZcV4T9RV9EE0faMLLUx3x/my/ZMblLl+40LY9p7H", dateTime, "Oregon", "s3"),
                awsKey = "AKIAJWWWVYEBIUAYKHFA",
                acl = "public-read";
            var options = {
                fileName: "thisisatest.jpg",
                mimeType: "image/jpeg",
                chunkedMode: true,
                params: {
                    "key": this.post.image.substr(this.post.image.lastIndexOf('/') + 1),
                    "AWSAccessKeyId": awsKey,
                    "acl": acl,
                    "policy": policyBase64,
                    "signature": signature,
                    "Content-Type": "image/jpeg"
                }
            };
            file.upload(encodeURI(this.post.image), s3URI, options, true).then((data) => {
                alert("SUCCESS");
            }, (err) => {
                alert("ERR");
                console.log(err);
            });
        }*/

    // ionViewDidLoad() {
    //     let dateTime = moment().format("YYYY-MM-DD\THH:mm:ssZ");
    //     console.log(CryptoJS);
    //     console.log(this.getSignatureKey("ZcV4T9RV9EE0faMLLUx3x/my/ZMblLl+40LY9p7H", dateTime, "Oregon", "s3"));
    //     var date = new Date;
    //     console.log(date)
    // }

    // imageUrl: String;
    // getPic(method) {

    //     this.setupAWS();

    //     let options = {
    //         destinationType: 1,
    //         sourceType: method,
    //         allowEdit: true,
    //         correctOrientation: true,
    //         saveToPhotoAlbum: true
    //     }
    //     Camera.getPicture(options).then((imageData) => {
    //         this.post.image = imageData;
    //         alert(JSON.stringify(imageData));
    //         this.submit();
    //         return imageData;
    //     }, (err) => {
    //         console.log(err);
    //     })
    // }

    // public setupAWS() {
    //     var albumBucketName = 'BUCKET_NAME';
    //     var bucketRegion = 'REGION';
    //     var IdentityPoolId = 'IDENTITY_POOL_ID';

    //     AWS.config.update({
    //         region: bucketRegion,
    //         credentials: new AWS.CognitoIdentityCredentials({
    //             IdentityPoolId: IdentityPoolId
    //         })
    //     });

    //     var s3 = new AWS.S3({
    //         apiVersion: '2006-03-01',
    //         params: { Bucket: albumBucketName }
    //     });
    // }

    // public getSignatureKey(key, dateStamp, regionName, serviceName) {

    //     // var kDate = CryptoJS.HmacSHA256(dateStamp, "AWS4" + key, { asBytes: true })
    //     // var kRegion = CryptoJS.HmacSHA256(regionName, kDate, { asBytes: true });
    //     // var kService = CryptoJS.HmacSHA256(serviceName, kRegion, { asBytes: true });
    //     // var kSigning = CryptoJS.HmacSHA256("aws4_request", kService, { asBytes: true });

    //     // return kSigning.words.join('');
    // }

    // submit() {
    //     let dateTime = moment().format("YYYY-MM-DD\THH:mm:ssZ");
    //     const file = new Transfer();
    //     var s3URI = encodeURI("https://mealme.s3.amazonaws.com/"),
    //         policyBase64 = "policyBase64_file",
    //         signature = this.getSignatureKey("ZcV4T9RV9EE0faMLLUx3x/my/ZMblLl+40LY9p7H", dateTime, "Oregon", "s3"),
    //         awsKey = "AKIAJWWWVYEBIUAYKHFA",
    //         acl = "public-read";
    //     var options = {
    //         fileName: "thisisatest.jpg",
    //         mimeType: "image/jpeg",
    //         chunkedMode: true,
    //         params: {
    //             "key": this.post.image.substr(this.post.image.lastIndexOf('/') + 1),
    //             "AWSAccessKeyId": awsKey,
    //             "acl": acl,
    //             "policy": policyBase64,
    //             "signature": signature,
    //             "Content-Type": "image/jpeg"
    //         }
    //     };
    //     file.upload(encodeURI(this.post.image), s3URI, options, true).then((data) => {
    //         alert("SUCCESS");
    //     }, (err) => {
    //         alert("ERR");
    //         console.log(err);
    //     });
    // }
}
