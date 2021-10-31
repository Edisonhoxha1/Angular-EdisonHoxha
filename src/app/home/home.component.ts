import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginAlert() {
    if(localStorage.getItem('loginForm') === null ){
      alert('Login for access in calendar page');
    }
  }

}
