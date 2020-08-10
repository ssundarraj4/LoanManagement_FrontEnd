import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Loan } from '../loan';
import { subscribeOn } from 'rxjs/operators';
import { LoanService } from '../loan.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
  title:string="Request New Loan";
  private loan = new Loan();
  loanAmount: number;
  typeOfLoan: string;
  loanTerm: string;
  loanFees: number;
  OriginationAccount: number;
  loanStatus: string;
  appBusinessName: string;
  appBusinessAddress: string;
  appBusinessContact: number;
  appBusinessEmail: string;
  appBusinessOwnership: number;
  pname: string;
  paddress: string;
  ptype: string;
  psize: string;
  TAN: string;
  PAN: string;
  cibilScore: number;

  constructor(private router: Router, private route: ActivatedRoute,private loanService: LoanService) { }

  ngOnInit(): void {


  }
  loanRequest() {
    this.loan.loanAmount = this.loanAmount;
    this.loan.loanType = this.typeOfLoan;
    this.loan.loanTerm = this.loanTerm;
    this.loan.loanHandlingFees = this.loanFees;
    this.loan.originationAccount = this.OriginationAccount;
    this.loan.status = this.loanStatus;
    this.loan.applicantBusinessName = this.appBusinessName;
    this.loan.applicantBusinessAddress = this.appBusinessAddress;
    this.loan.applicantBusinessEmail = this.appBusinessEmail;
    this.loan.applicantBusinesscontact = this.appBusinessContact;
    this.loan.applicantBusinessOwnership = this.appBusinessOwnership;
    this.loan.propertyName = this.pname;
    this.loan.propertyAddress = this.paddress;
    this.loan.typeOfProperty = this.ptype;
    this.loan.propertySize = this.psize;
    this.loan.tan = this.TAN;
    this.loan.pan = this.PAN;
    this.loan.cibilScore = this.cibilScore;
    this.loan.userId = sessionStorage.getItem('userId');

    this.loanService.saveLoan(this.loan).subscribe(
      data => {
        if(data===true){
          console.log("Loan Requested successfully");
          alert("Loan Requested Successfully");
          this.router.navigate(['loanSearch']);
        }
      }
    );

  }
}

