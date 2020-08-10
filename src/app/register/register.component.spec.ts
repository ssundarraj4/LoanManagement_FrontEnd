import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
      ],
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(RegisterComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('form'));
        el = de.nativeElement;
      });;
      
  }));



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
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('label').textContent).toContain('User Id');
  });


  it('should set submitted to true', async(() => {
    component.AdminForm(el);
    expect(component.rep).toBeUndefined();
  }));
  it('should call the AdminForm method', async(() => {
    fixture.detectChanges();
    spyOn(component, 'AdminForm');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.form.valid).toBeFalsy();
  }));

  it('forms should be invalid', async(() => {
    component.form.controls['userId'].setValue('');
    component.form.controls['password'].setValue('');
    component.form.controls['cpassword'].setValue('');
    component.form.controls['firstName'].setValue('');
    component.form.controls['lastName'].setValue('');
    component.form.controls['email'].setValue('');
    component.form.controls['contact'].setValue('');

    expect(component.form.valid).toBeFalsy();
  }));
  it('forms should be valid', async(() => {
    component.form.controls['userId'].setValue('test');   
    component.form.controls['firstName'].setValue('ftest');
    component.form.controls['lastName'].setValue('ltest');
    component.form.controls['email'].setValue('test@cts.com');
    component.form.controls['password'].setValue('test');
    component.form.controls['cpassword'].setValue('test');
    component.form.controls['contact'].setValue(9876543210);
    expect(component.form.valid).toBeTruthy();
  }));
});
