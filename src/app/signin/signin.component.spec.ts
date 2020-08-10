import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SigninComponent } from './signin.component';
import { RegistrationService } from '../registration.service';
import { Login } from '../login';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SigninComponent],

      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
      ],
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(SigninComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('form'));
        el = de.nativeElement;
      });
  }));

 

  it('should create', () => {
    expect(component).toBeTruthy();

  });
  it('should have Login Title', () => {
    expect(component.title).toEqual('Login Form');

  });
  it('should set submitted to true', async(() => {
    component.isLogin(el);
    expect(component.invalidLogin).toEqual(false);
  }));
  it('should call the isLogin method', async(() => {
    fixture.detectChanges();
    spyOn(component, 'isLogin');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.form.valid).toEqual(false);
  }));

  it('forms should be invalid', async(() => {
    component.form.controls['userId'].setValue('');
    component.form.controls['password'].setValue('');
    expect(component.form.valid).toBeFalsy();
  }));
  it('forms should be valid', async(() => {
    component.form.controls['userId'].setValue('admin');
    component.form.controls['password'].setValue('pass');
    expect(component.form.valid).toBeTruthy();
  }));
});
