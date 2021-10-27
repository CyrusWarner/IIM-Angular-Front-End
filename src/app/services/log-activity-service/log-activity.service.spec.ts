import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { AccountService } from '../account-service/account.service';
import { LogActivityService } from './log-activity.service';
import { RouterTestingModule } from '@angular/router/testing';
import { LogActivityComponent } from 'src/app/pages/log-activity/log-activity.component';
describe('LogActivityService', () => {
  let service: LogActivityService;
  let mockAccountService;
  let mockHttp;
  beforeEach(() => {
    mockAccountService = {
      currentUser: {
        id: 'test',
        firstName: 'John',
        lastName: 'Brody',
        userName: 'johnBrody24',
        email: 'JohnBrody24@gmail.com',
        emailConfirmed: true,
        role: 'Team Captain',
        teamId: 3,
      },
    };
    mockHttp = jasmine.createSpyObj('mockHttp', ['post']);
    service = new LogActivityService(mockHttp, mockAccountService);
  });
  describe('SaveActivity', () => {
    it('post should have been called', () => {
      // Arrange
      var logActivityValues = {
        activityDate: '10/27/2021',
        activityDistance: 2,
        exerciseType: 'BIKE',
      };
      mockHttp.post.and.returnValue(of(false));

      // Act
      service.getExerciseTypeId(logActivityValues.exerciseType);
      service.createActivityLog(logActivityValues, mockAccountService.currentUser.teamId, mockAccountService.currentUser.id)
      service.saveActivity(logActivityValues);

      // Assert
      expect(mockHttp.post).toHaveBeenCalled();
    });
  });
});
