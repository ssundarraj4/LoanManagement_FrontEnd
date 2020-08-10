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
  userId: string=sessionStorage.getItem('userId');;
  constructor(private http: HttpClient, private router: Router) { }

  public saveLoan(adminDetail: Loan): Observable<any> {
    return this.http.post("http://localhost:8091/loanservice/api/v1/loan", adminDetail);
  }

  public deleteLoan(loanNo: number): Observable<any> {
    this.Furl = "http://localhost:8091/loanservice/api/v1/loan/" + loanNo;
    return this.http.delete(this.Furl, { responseType: 'text' });
  }

  public updateLoan(loanNo: number, data: any): Observable<object> {
    this.Furl = "http://localhost:8091/loanservice/api/v1/loan/" + loanNo;
    return this.http.put(this.Furl, data);
  }
  public viewLoan(loanNo: number): Observable<any> {
    this.Furl = "http://localhost:8091/loanservice/api/v1/loan/" + loanNo;
    return this.http.get(this.Furl);
  }
  public searchLoan(loanNo: number): Observable<any> {
    this.Furl = "http://localhost:8091/loanservice/api/v1/loan/search/" + loanNo;
    return this.http.get(this.Furl);
  }

  getLoanList(): Observable<any> {
    return this.http.get(`http://localhost:8091/loanservice/api/v1/loan`);
  }
  getLoanOfUser(userId: string): Observable<any> {
    this.Furl = "http://localhost:8091/loanservice/api/v1/loan/user/" + userId;
    console.log(this.Furl);
    return this.http.get(this.Furl)

  }
  searchLoanOfUser(loanNo: number): Observable<any> {
    
    this.Furl = "http://localhost:8091/loanservice/api/v1/loan/" + this.userId + "/" + loanNo;
    return this.http.get(this.Furl);
  }
}
``