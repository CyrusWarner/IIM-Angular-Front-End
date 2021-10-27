import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AccountService } from '../services/account-service/account.service';

import { AuthGuard } from './auth.guard';
describe('AuthGuard', () => {
  let guard: AuthGuard;
  let mockAccountService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [{provide: AccountService, useValue: mockAccountService}]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
