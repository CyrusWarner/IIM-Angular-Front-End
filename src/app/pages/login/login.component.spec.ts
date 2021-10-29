import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AccountService } from 'src/app/services/account-service/account.service';
describe('LoginComponent', () => {
  let component: LoginComponent;
  let mockAccountService;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [LoginComponent],
      providers: [{ provide: AccountService, useValue: mockAccountService }],
    }).compileComponents();
  });

  beforeEach(() => {
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
  });
});
