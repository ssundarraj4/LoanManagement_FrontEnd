import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../login'
import { from } from 'rxjs';
import { RegistrationService } from '../registration.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../User';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  title:string='Login Form';
  token:any;
  
  private mlogin = new Login();
  invalidLogin: boolean=false;

  constructor(private adminService: RegistrationService, private router: Router) { }

  ngOnInit() {

  }


  form = new FormGroup({
    userId: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  isLogin(LoginInformation) {
    this.mlogin.userId = this.userId.value;
    this.mlogin.password = this.password.value;
    
    this.adminService.login(this.mlogin).subscribe(
      data => {
        this.router.navigate(['./home']);
        this.invalidLogin = false;
      },
      error => {
        alert("incorrect user id and password");
         this.router.navigate(['./signin']);
        this.invalidLogin = true;
       

      }
    );

  }

  get userId() {
    return this.form.get('userId');
  }

  get password() {
    return this.form.get('password');
  }

}

