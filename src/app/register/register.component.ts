import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import { isLoweredSymbol } from '@angular/compiler';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
title:string='Signup Form';
  private adminDetail = new User();
  rep:boolean;
  constructor(private adminService: RegistrationService, private router: Router) { }

  ngOnInit() {
  }


  form = new FormGroup({
    userId: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    cpassword: new FormControl('', Validators.required),
    contact: new FormControl('', Validators.required),
  });

  AdminForm(AdminInformation) {
    let Password = this.password.value;
    let cpassword = this.cpassword.value;

    if (Password == cpassword) {
      this.adminDetail.userId = this.userId.value;
      this.adminDetail.firstName = this.firstName.value;
      this.adminDetail.lastName = this.lastName.value;
      this.adminDetail.email = this.email.value;
      this.adminDetail.contact = this.contact.value;
      this.adminDetail.password = this.password.value;
      this.adminDetail.cpassword = this.cpassword.value;

      this.adminService.authRegister(this.adminDetail).subscribe(
        response => {
          console.log("login registered successfully");
        this.rep = response;
          if (this.rep === true) {
            this.adminService.doRegister(this.adminDetail).subscribe();
            this.router.navigate(['./signin']);
            console.log("user profile registered successfully")
          }
          else {
            alert("error occur while registring User. please try after sometime.")
          }
        }
      );

    }
    else {
      alert("Password and confirm password not match.");
    }
  }

  get userId() {
    return this.form.get('userId');
  }
  get firstName() {
    return this.form.get('firstName');
  }

  get lastName() {
    return this.form.get('lastName');
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  get cpassword() {
    return this.form.get('cpassword');
  }

  get contact() {
    return this.form.get('contact');
  }


}

