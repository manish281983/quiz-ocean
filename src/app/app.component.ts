import { Component, OnInit, ViewChild } from '@angular/core';
import mockNavList from '../assets/json/nav-bar.json';
import { Router } from '@angular/router';
import {environment} from '../environments/environment';
import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  navBar: any;
  productCount: number;
  constructor(public router: Router) {
  }

  navSlider: boolean;
  ngOnInit() {
    this.productCount = 0;
    this.navSlider = false;
    this.navBar = mockNavList;
  }
  redirectPage(page: string) {
    if (page === 'cart') {
      this.toggleNav();
    } else {
      this.router.navigate(['/', page]);
    } 
  }

  checkPage(url) {
    return url.includes('/trivia-quiz');
  }

  cartViewAction(action) {
    if(action.cartCount) {
      this.productCount = action.cartCount;
    }
    if (action === 'close'){
      this.toggleNav();
    }
    if (action === 'checkout') {
      this.toggleNav();
      this.router.navigate(['/', 'payment']);
    }
  }

  toggleNav() {
    this.navSlider = !this.navSlider;
 }
}
