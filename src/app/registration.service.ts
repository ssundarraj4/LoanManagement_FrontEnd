import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from './User';
import { Observable } from 'rxjs/internal/Observable';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Login } from './login';
import { map } from "rxjs/operators";
import { getMatInputUnsupportedTypeError } from '@angular/material/input';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RegistrationService {
  rurl: string;
  token: any = sessionStorage.getItem('token');



  constructor(private http: HttpClient, private router: Router) { }

  public doRegister(adminDetail: User): Observable<any> {
    

    return this.http.post('https://loanappzuulapigateway.cfapps.io/userprofileservice/api/v1/user',
      adminDetail);
  }

  authRegister(adminDetail: User): Observable<any> {

    return this.http.post("https://loanappzuulapigateway.cfapps.io/authenticationservice/api/v1/auth/register", adminDetail);
  }

  login(adminDetail: Login): Observable<any> {

    return this.http.post("https://loanappzuulapigateway.cfapps.io/authenticationservice/api/v1/auth/login", adminDetail, { responseType: 'text' as 'json' })
      .pipe(
        map(userData => {
          sessionStorage.setItem("userId", adminDetail.userId);
          let tokenStr = "Bearer " + userData;
          sessionStorage.setItem("token", tokenStr);
          return userData;
        })
      );

  }

  getUser(userId: string): Observable<any> {
    const headers = { 'content-type': 'application/json', 'authorization': this.token }

    this.rurl = 'https://loanappzuulapigateway.cfapps.io/userprofileservice/api/v1/userprofile/' + userId;
    return this.http.get(this.rurl,{ 'headers': headers });
  }
  updateUser(userId: string, emp: any): Observable<any> {
    const headers = { 'content-type': 'application/json', 'authorization': this.token }

    this.rurl = 'https://loanappzuulapigateway.cfapps.io/userprofileservice/api/v1/userprofile/' + userId;
    this.rurl = 'https://loanappzuulapigateway.cfapps.io/userprofileservice/api/v1/userprofile/' + userId;
    return this.http.put(this.rurl, emp,{ 'headers': headers });
  }

  logout() {
    localStorage.removeItem('token');

    this.router.navigate(['./home']);

  }

}