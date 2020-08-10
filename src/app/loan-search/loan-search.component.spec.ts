import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { LoanSearchComponent } from './loan-search.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { Router } from '@angular/router';

describe('LoanSearchComponent', () => {
  let component: LoanSearchComponent;
  let fixture: ComponentFixture<LoanSearchComponent>;
  let de = DebugElement;
  let hl = HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoanSearchComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
      ],

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have title as Loan Details', () => {
    fixture = TestBed.createComponent(LoanSearchComponent);
    component = fixture.componentInstance;
    expect(component.title).toEqual('Loan Details');
  });
  it('should h2 default value null ', () => {
    fixture = TestBed.createComponent(LoanSearchComponent);
    fixture.detectChanges;
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toEqual('')
  });

  it('should check search button called', async(() => {
    spyOn(component, 'search');

    let button = fixture.debugElement.nativeElement.querySelector('#btnSearch')

    button.click();

    fixture.whenStable().then(() => {
      expect(component.search).toHaveBeenCalled();
    });
  }));
  it('should have search in "Search Button"', () => {
    const btn = fixture.debugElement.nativeElement.querySelector('#btnSearch');
    expect(btn.innerHTML).toBe('search');
  });
  
 

});
