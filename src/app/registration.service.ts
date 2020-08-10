import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
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


  constructor(private http: HttpClient, private router: Router) { }

  public doRegister(adminDetail: User): Observable<any> {
    return this.http.post("http://localhost:8091/userprofileservice/api/v1/user", adminDetail);
  }

  authRegister(adminDetail: User): Observable<any> {

    return this.http.post("http://localhost:8091/authenticationservice/api/v1/auth/register", adminDetail);
  }

  login(adminDetail: Login): Observable<any> {

    return this.http.post("http://localhost:8091/authenticationservice/api/v1/auth/login", adminDetail, { responseType: 'text' as 'json' })
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
    this.rurl = 'http://localhost:8091/userprofileservice/api/v1/userprofile/' + userId;
    return this.http.get(this.rurl);
  }
  updateUser(userId: string, emp: any): Observable<any> { this.rurl = 'http://localhost:8091/userprofileservice/api/v1/userprofile/' + userId;
    this.rurl = 'http://localhost:8091/userprofileservice/api/v1/userprofile/' + userId;
    return this.http.put(this.rurl, emp);
  }

  logout() {
    localStorage.removeItem('token');

    this.router.navigate(['./home']);

  }

}