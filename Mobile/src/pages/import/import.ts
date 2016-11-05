import { Component, OnInit } from '@angular/core';

import { NavController, ViewController, Platform } from 'ionic-angular';
import { Camera, Transfer } from 'ionic-native';
import moment from 'moment';
import CryptoJS from 'crypto-js';

@Component({
    selector: 'page-import',
    templateUrl: 'import.html'
})
export class ImportPage {
    constructor(
        public navCtrl: NavController,
        public viewCtrl: ViewController,
        public platform: Platform
    ) {
    }

    ionViewDidLoad() {
        let dateTime = moment().format("YYYY-MM-DD\THH:mm:ssZ");
        console.log(CryptoJS);
        console.log(this.getSignatureKey("ZcV4T9RV9EE0faMLLUx3x/my/ZMblLl+40LY9p7H", dateTime, "Oregon", "s3"));
        var date = new Date;
        console.log(date)
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
            alert(JSON.stringify(imageData));
            this.submit();
            return imageData;
        }, (err) => {
            console.log(err);
        })
    }


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
    }
}
