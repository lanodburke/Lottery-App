import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  results: any;
  dates: any;

  constructor(public navCtrl: NavController, public http: Http) {

    this.http.get('http://donalburke.me').map(res => res.json()).subscribe(data => {
      this.results = data.results;
    },
      err => {
        console.log("Oops!");
      }
    );
  }

  cleanText(title) {
    return title.replace("Results for", "<br>");
  }

  animateNumbers(numbers) {

  }

}
