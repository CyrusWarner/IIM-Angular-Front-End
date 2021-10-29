import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AccountService } from 'src/app/services/account-service/account.service';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { of } from 'rxjs';
describe('LoginComponent', () => {
  let component: LoginComponent;
  let mockAccountService;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    mockAccountService = jasmine.createSpyObj([
      'saveCurrentUserToLocalStorage',
    ]);
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule],
      declarations: [LoginComponent],
      providers: [{ provide: AccountService, useValue: mockAccountService }],
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('form', () => {
    it('should be invalid when inputs are empty', () => {
      let email = component.loginForm.controls.email;
      let password = component.loginForm.controls.password;

      email.setValue('');
      password.setValue('');

      expect(component.loginForm.invalid).toBeTruthy();
    });
    it('email input should have required error if email is empty', () => {
      const email = component.loginForm.controls.email;

      email.setValue('');

      expect(email.hasError('required')).toBeTruthy();
    });
    it('password input should have required error if password is empty', () => {
      const password = component.loginForm.controls.password;

      password.setValue('');

      expect(password.hasError('required')).toBeTruthy();
    });
    it('should call the onSubmit method if the form is valid', () => {
      const fakeLoginValues = {
        email: 'testemail@gmail.com',
        password: 'testPassword',
      };
      spyOn(component, 'onSubmit');
      component.loginForm.controls.email.setValue('testemail@gmail.com');
      component.loginForm.controls.password.setValue('testPassword');
      fixture.detectChanges();
      let btn: HTMLButtonElement =
        fixture.nativeElement.querySelector('button');

      btn.click();

      expect(btn.disabled).toBeFalsy();
      expect(component.loginForm.invalid).toBeFalsy();
      expect(component.loginForm.value).toEqual(fakeLoginValues);
      expect(component.onSubmit).toHaveBeenCalledOnceWith(
        component.loginForm.value
      );
    });
  });
});
