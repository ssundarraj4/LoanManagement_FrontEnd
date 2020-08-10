import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UpdateLoanComponent } from './update-loan.component';

describe('UpdateLoanComponent', () => {
  let component: UpdateLoanComponent;
  let fixture: ComponentFixture<UpdateLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateLoanComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
      ],
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have title as Update Loan', () => {
    fixture = TestBed.createComponent(UpdateLoanComponent);
    component = fixture.componentInstance;
    expect(component.title).toEqual('Update Loan');
  });
  it('should h2 default value null ', () => {
    fixture = TestBed.createComponent(UpdateLoanComponent);
    fixture.detectChanges;
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toEqual('')
  });

  it('should check update button called', async(() => {
    spyOn(component, 'onSubmit');

    let button = fixture.debugElement.nativeElement.querySelector('#btnsubmit')

    button.click();

    fixture.whenStable().then(() => {
      expect(component.onSubmit).toHaveBeenCalled();
    });
  }));
  it('should have search in "Update Button"', () => {
    const btn = fixture.debugElement.nativeElement.querySelector('#btnsubmit');
    expect(btn.innerHTML).toBe('Submit');
  });
  
});
