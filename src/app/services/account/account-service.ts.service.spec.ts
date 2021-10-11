import { TestBed } from '@angular/core/testing';

import { AccountService } from './account-service.ts.service';

describe('AccountService.TsService', () => {
  let service: AccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
