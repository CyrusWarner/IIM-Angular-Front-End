import { TestBed } from '@angular/core/testing';

import { LogActivityService } from './log-activity-service.service';

describe('LogActivityServiceService', () => {
  let service: LogActivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogActivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
