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
  gender: string;
  calories: number;
  physicalactivitylevel: string;
  dci: number;

  constructor(public navCtrl: NavController) {} 
  calculateDCI() {

  if (this.gender = "m") {
   this.calories = (10 * this.weight + 6.25 * this.height - 5 * this.age + 5);

  } else if (this.gender= "f") {
   this.calories = (10 * this.weight + 6.25 * this.height - 5 * this.age - 161);
  }
  if (this.physicalactivitylevel = "1.2") {
   this.dci = this.calories*1.2;
  }else if (this.physicalactivitylevel = "1.4") {
   this.dci = this.calories*1.4;
  }else if (this.physicalactivitylevel = "1.6") {
   this.dci = this.calories*1.6;
  }else if (this.physicalactivitylevel = "1.75") {
   this.dci = this.calories*1.75;
  }else if (this.physicalactivitylevel = "2.0") {
   this.dci = this.calories*2.0;
  }else if (this.physicalactivitylevel = "2.3") {
   this.dci = this.calories*2.3;
  }
  }
  }