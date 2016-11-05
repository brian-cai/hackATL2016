import { NgModule } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  moduleId: 'account',
//   selector:    'hero-list',
//   templateUrl: 'hero-list.component.html',
  providers:  []
})

export class account {
    firstName: string;
    lastName: string; 
    yelpUsername: string; 
    eatStreetUsername: string; 

    foodImages: Array<any> = [];

    constructor(firstName: string) {
        this.firstName = firstName;
    }



}