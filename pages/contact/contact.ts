import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  styleUrls: ["contact.css"]

})
export class ContactPage {
  height: number;
  weight: number;
  age: number;
  sex: string;
  calories: number;
  physicalactivitylevel: string;
  dci: number;

  constructor(public navCtrl: NavController) {} 
  calculateDCI() {

  if (this.sex = "m") {
   this.calories = (10 * this.weight + 6.25 * this.height - 5 * this.age + 5);
  } else if (this.sex = "f") {
   this.calories = (10 * this.weight + 6.25 * this.height - 5 * this.age - 161);
  } else {
    this.calories=0;
  }

  if (this.physicalactivitylevel = "little or no") {
   this.dci = this.calories*1.2;
  }else if (this.physicalactivitylevel = "one to two") {
   this.dci = this.calories*1.4;
  }else if (this.physicalactivitylevel = "two to three") {
   this.dci = this.calories*1.6;
  }else if (this.physicalactivitylevel = "four to five") {
   this.dci = this.calories*1.75;
  }else if (this.physicalactivitylevel = "six to seven") {
   this.dci = this.calories*2.0;
  }else if (this.physicalactivitylevel = "professional") {
   this.dci = this.calories*2.3;
  }else{
    this.dci=0;
  }
  }
  }