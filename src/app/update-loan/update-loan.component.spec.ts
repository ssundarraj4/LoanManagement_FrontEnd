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
});
