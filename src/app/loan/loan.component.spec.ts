import { async, ComponentFixture, TestBed,inject } from '@angular/core/testing';

import { LoanComponent } from './loan.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoanService } from '../loan.service';
import { Loan } from '../loan';
import { FormsModule } from '@angular/forms';
import { Inject } from '@angular/core';

describe('LoanComponent', () => {
  let component: LoanComponent;
  let fixture: ComponentFixture<LoanComponent>;
  let service: LoanService;
  let mock: HttpTestingController;
  let mockLoan: Loan;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoanComponent],
      imports: [FormsModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
      ],
      providers: [LoanService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.get(LoanService);
    mock = TestBed.get(HttpTestingController);
  });
  it('should check the service', () => {
    expect(service instanceof LoanService).toBeTruthy();
  });
 
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have title as Loan Request', () => {
    fixture = TestBed.createComponent(LoanComponent);
    component = fixture.componentInstance;
    expect(component.title).toEqual('Request New Loan');
  });
  it('should h2 default value null ', () => {
    fixture = TestBed.createComponent(LoanComponent);
    fixture.detectChanges;
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toEqual('')
  });

  it('should check search button called', async(() => {
    spyOn(component, 'loanRequest');

    let button = fixture.debugElement.nativeElement.querySelector('#btnLoanRequest')

    button.click();

    fixture.whenStable().then(() => {
      expect(component.loanRequest).toHaveBeenCalled();
    });
  }));
  it('should have search in "Submit Button"', () => {
    const btn = fixture.debugElement.nativeElement.querySelector('#btnLoanRequest');
    expect(btn.innerHTML).toBe('Submit');
  });

  describe('#saveLoan()', () => {
    xit('returned Observable should match the right data', () => {

      this.mockLoan = {
        loanNo: 1,
        loanAmount: 200000,
        loanType: 'Personal Loan',
        loanTerm: '3 years',
        loanHandlingFees: 5000,
        originationAccount: 123456,
        status: 'Requested'
      };

      service.saveLoan(this.mockLoan)
        .subscribe(data => {
          expect(data.loanType).toEqual('Personal Loan');
        });

      const req = mock.expectOne('http://localhost:8091/loanservice/api/v1/loan');

      expect(req.request.method).toEqual('POST');

      req.flush(this.mockLoan);
    });

  });

});
