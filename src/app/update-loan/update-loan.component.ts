import { Component, OnInit } from '@angular/core';
import { Loan } from '../loan';
import { LoanService } from '../loan.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-loan',
  templateUrl: './update-loan.component.html',
  styleUrls: ['./update-loan.component.css']
})
export class UpdateLoanComponent implements OnInit {
  loanNo: number;
  loans: Loan;
  constructor(private router: Router, private route: ActivatedRoute, private loanService: LoanService) { }




  ngOnInit() {
    this.loans = new Loan();

    this.loanNo = this.route.snapshot.params['loanNo'];

    this.loanService.viewLoan(this.loanNo)
      .subscribe(data => {
        console.log(data)
        this.loans = data.getloan[0];
      }, error => console.log(error));
  }

  updateLoan() {
    this.loanService.updateLoan(this.loanNo, this.loans)
      .subscribe(data => console.log(data), error => console.log(error));
    this.loans = new Loan();
    this.gotoList();
  }

  onSubmit() {
    this.updateLoan();
  }

  gotoList() {
    this.router.navigate(['/loanSearch']);
  }
}
