import { Component, OnInit } from '@angular/core';
import { Loan } from '../loan';
import { Router, ActivatedRoute } from '@angular/router';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-view-loan',
  templateUrl: './view-loan.component.html',
  styleUrls: ['./view-loan.component.css']
})
export class ViewLoanComponent implements OnInit {
  loanNo: number;
  loans: Loan;
  constructor(private router: Router, private route: ActivatedRoute, private loanService: LoanService) { }




  ngOnInit() {
    this.loans = new Loan();

    this.loanNo = this.route.snapshot.params['loanNo'];
    console.log("View loan component is loading")
    this.loanService.viewLoan(this.loanNo)
      .subscribe(data => {

        this.loans = data.getloan[0];
        console.log(this.loans);
      }, error => console.log(error));
  }
  list() {
    this.router.navigate(['loanSearch']);
  }
}
