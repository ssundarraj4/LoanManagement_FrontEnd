import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Loan } from './loan';
import { Observable } from 'rxjs/internal/Observable';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  Furl: string;
  userId: string = sessionStorage.getItem('userId');
  tok: string = sessionStorage.getItem('token');
  constructor(private http: HttpClient, private router: Router) { }

  public saveLoan(adminDetail: Loan): Observable<any> {
    const headers = { 'content-type': 'application/json', 'authorization': this.tok }

    return this.http.post("https://loanappzuulapigateway.cfapps.io/loanservice/api/v1/loan", adminDetail, { 'headers': headers });
  }

  public deleteLoan(loanNo: number): Observable<any> {
    const headers = { 'content-type': 'application/json', 'authorization': this.tok }

    this.Furl = "https://loanappzuulapigateway.cfapps.io/loanservice/api/v1/loan/" + loanNo;
    return this.http.delete(this.Furl, { responseType: 'text', 'headers': headers });
  }

  public updateLoan(loanNo: number, data: any): Observable<object> {
    const headers = { 'content-type': 'application/json', 'authorization': this.tok }

    this.Furl = "https://loanappzuulapigateway.cfapps.io/loanservice/api/v1/loan/" + loanNo;
    return this.http.put(this.Furl, data, { 'headers': headers });
  }
  public viewLoan(loanNo: number): Observable<any> {
    const headers = { 'content-type': 'application/json', 'authorization': this.tok }

    this.Furl = "https://loanappzuulapigateway.cfapps.io/loanservice/api/v1/loan/" + loanNo;
    return this.http.get(this.Furl, { 'headers': headers });
  }
  public searchLoan(loanNo: number): Observable<any> {
    const headers = { 'content-type': 'application/json', 'authorization': this.tok }

    this.Furl = "https://loanappzuulapigateway.cfapps.io/loanservice/api/v1/loan/search/" + loanNo;
    return this.http.get(this.Furl, { 'headers': headers });
  }

  getLoanList(): Observable<any> {
    const headers = { 'content-type': 'application/json', 'authorization': this.tok }

    return this.http.get(`https://loanappzuulapigateway.cfapps.io/loanservice/api/v1/loan`, { 'headers': headers });
  }
  getLoanOfUser(userId: string): Observable<any> {
    const headers = { 'content-type': 'application/json', 'authorization': this.tok }

    this.Furl = "https://loanappzuulapigateway.cfapps.io/loanservice/api/v1/loan/user/" + userId;

    return this.http.get(this.Furl, { 'headers': headers })

  }
  searchLoanOfUser(loanNo: number): Observable<any> {
    const headers = { 'content-type': 'application/json', 'authorization': this.tok }


    this.Furl = "https://loanappzuulapigateway.cfapps.io/loanservice/api/v1/loan/" + this.userId + "/" + loanNo;
    return this.http.get(this.Furl, { 'headers': headers });
  }
}
``