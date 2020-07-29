import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {

    //fixture.detectChanges();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
  it('should have title as Signup Form', () => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    expect(component.title).toEqual('Signup Form');
  });
  it('should h2 default value null ', () => {
    fixture = TestBed.createComponent(RegisterComponent);
    fixture.detectChanges;
    let compiled=fixture.debugElement.nativeElement;
    expect(compiled.querySelector('label').textContent).toContain('User Id');
  });
});
