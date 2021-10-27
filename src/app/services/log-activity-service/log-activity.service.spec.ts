import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { AccountService } from '../account-service/account.service';
import { LogActivityService } from './log-activity.service';
import { RouterTestingModule } from '@angular/router/testing';
import { LogActivityComponent } from 'src/app/pages/log-activity/log-activity.component';
import { IActivity } from 'src/app/models/IActivity';
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
      service.createActivityLog(
        logActivityValues,
        mockAccountService.currentUser.teamId,
        mockAccountService.currentUser.id
      );
      service.saveActivity(logActivityValues);

      // Assert
      expect(mockHttp.post).toHaveBeenCalled();
    });
  });
  describe('getExerciseTypeId', () => {
    it('should change exerciseTypeId state to 1 when the exercise type param is "BIKE"', () => {
      // Act
      service.getExerciseTypeId('BIKE');
      // Assert
      expect(service.exerciseTypeId).toBe(1);
    });
    it('should change the exerciseTypeId state to 2 when the exercise type param is "RUN"', () => {
      // Act
      service.getExerciseTypeId('RUN');
      // Assert
      expect(service.exerciseTypeId).toBe(2);
    });
    it('should change the exerciseTypeId state to 3 when the exercise type param is "SWIM"', () => {
      // Act
      service.getExerciseTypeId('SWIM');
      // Assert
      expect(service.exerciseTypeId).toBe(3);
    });
    it('should change the exerciseTypeNotFoundError to true when the param is not equivalent to any of the cases in the switch', () => {
      // Act
      service.getExerciseTypeId('JOG');
      // Assert
      expect(service.exerciseTypeNotFoundError).toBe(true);
    });
  });
  describe('createActivityLog', () => {
    it('should return null if no teamId or no userId', () => {
      // Arrange
      var logActivityValues = {
        activityDate: '10/27/2021',
        activityDistance: 2,
        exerciseType: 'BIKE',
      };

      // Act
      let activityLog = service.createActivityLog(logActivityValues, 0, '');

      // Assert
      expect(activityLog).toBeNull;
    });
    it('should return an activity if there is a valid teamId and userId', () => {
      // Arrange
      service.exerciseTypeId = 1;
      var logActivityValues = {
        activityDate: '10/27/2021',
        activityDistance: 2,
        exerciseType: 'BIKE',
      };
      var expectedActivityLog = {
        activityDate: '10/27/2021',
        activityDistance: 2,
        exerciseTypeId: service.exerciseTypeId,
        teamId: 3,
        userId: 'userid-test'
      }

      // Act
      let activityLog: IActivity = service.createActivityLog(logActivityValues, 3, 'userid-test');

      // Assert
      expect(activityLog).toEqual(expectedActivityLog);
    });
  });
});
