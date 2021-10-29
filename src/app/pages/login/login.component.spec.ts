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
      component.loginForm.controls.email.setValue('');
      component.loginForm.controls.password.setValue('');

      expect(component.loginForm.invalid).toBeTruthy();
    });
  });
});
