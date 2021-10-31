import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  //formControl for each input
  constructor(public formBuilder: FormBuilder, public router: Router) {
    this.loginForm = formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }

  ngOnInit(): void {
  }

  //save data in localStorage
  onSubmit(){
    if(this.loginForm.valid){
      localStorage.setItem('loginForm', JSON.stringify(this.loginForm.value));
      this.router.navigate(['calendar']);
    }
  }

}
