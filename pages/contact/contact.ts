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
  caloriesinitial: number;
  caloriesfinal: number;
  physicalactivitylevel: string;
  dci: number;
  error: ;
 
  constructor(public navCtrl: NavController) {} 
  calculateDCI() {
 
  if (this.age >= 18 && this.weight > 0 && this.height > 0) {
   this.caloriesinitial = (10 * this.weight + 6.25 * this.height - 5 * this.age);
  } else if (this.age >= 18 && this.weight > 0 && this.height > 0) {
   this.caloriesinitial = (10 * this.weight + 6.25 * this.height - 5 * this.age);
  } else if (this.weight < 0 && this.height < 0 && this.age < 18) {
    this.error ="Negative values and ages 17 below are not allowed. Please try again";
  } else if (this.weight < 0 || this.height < 0) {
    this.error = "No negative values are allowed. Please refresh and try again.";
  } else {
    this.error = "This calculator does not provide a valid result for ages 17 and below.";
  }
  
  if (this.sex == "m") {
   this.caloriesfinal = (this.caloriesinitial + 5);
  } else if (this.sex == "f") {
   this.caloriesfinal = (this.caloriesinitial - 161);
  } else {
    this.caloriesfinal=0;
  }
  
  if (this.physicalactivitylevel == "little or no") {
   this.dci = this.caloriesfinal*1.2;
  }else if (this.physicalactivitylevel == "one to two") {
   this.dci = this.caloriesfinal*1.4;
  }else if (this.physicalactivitylevel == "two to three") {
   this.dci = this.caloriesfinal*1.6;
  }else if (this.physicalactivitylevel == "four to five") {
   this.dci = this.caloriesfinal*1.75;
  }else if (this.physicalactivitylevel == "six to seven") {
   this.dci = this.caloriesfinal*2.0;
  }else if (this.physicalactivitylevel == "professional") {
   this.dci = this.caloriesfinal*2.3;
  }else{
    this.dci=0;
  }
  }
  }
