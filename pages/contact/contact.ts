import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  height: number;
  weight: number;
  age: number;
  dciMessage: string;
  gender: string;
  calories: number;
  physicalactivitylevel: number;

  constructor(public navCtrl: NavController) {} 
  calculateDCI() {

  if (this.gender = "m") {
   this.calories = (10 * this.weight + 6.25 * this.height - 5 * this.age + 5)*1;
   this.calories = parseFloat(this.calories.toFixed(2));

  } else if (this.gender= "f") {
   this.calories = (10 * this.weight + 6.25 * this.height - 5 * this.age - 161)*1;
   this.calories = parseFloat(this.calories.toFixed(2));

  } else {
      this.calories = 0;
  }
  }
  }