import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Loan } from '../loan';
import { LoanService } from '../loan.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-search',
  templateUrl: './loan-search.component.html',
  styleUrls: ['./loan-search.component.css']
})
export class LoanSearchComponent implements OnInit {
  loans: Observable<Loan[]>;
  searchItem: number;
  constructor(private loanService: LoanService, private router: Router) { }

  ngOnInit() {

    this.reloadData();

  }

  search() {
    this.loans = this.loanService.searchLoan(this.searchItem);


  }
  deleteLoan(loanNo: number) {
    this.loanService.deleteLoan(loanNo)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error))
  }
  updateLoan(loanNo: number) {
    this.router.navigate(['updateloan', loanNo]);
  }
  loanDetails(loanNo: number) {
    this.router.navigate(['viewloan', loanNo]);
  }
  reloadData() {
    if (sessionStorage.getItem('userId') === "admin") {
      this.loans = this.loanService.getLoanList();
      console.log(this.loans);
    }
    else {

      this.loans = this.loanService.getLoanOfUser(sessionStorage.getItem('userId'));
      console.log(this.loans);
    }

  }
 
}
