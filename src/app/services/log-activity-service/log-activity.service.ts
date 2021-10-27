import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IActivity } from 'src/app/models/IActivity';
import { AccountService } from '../account-service/account.service';
@Injectable()
export class LogActivityService {
  exerciseTypeId: number;
  exerciseTypeNotFoundError: boolean = false;
  constructor(private http: HttpClient, private accountService:AccountService) {}

  saveActivity(formValues) {
    this.getExerciseTypeId(formValues.exerciseType);
    if (this.exerciseTypeId !== undefined) {
      const {teamId, id} = this.accountService.currentUser;
      const activity = this.createActivityLog(formValues, teamId, id);
      this.http.post('https://localhost:44357/api/ActivityLog', activity).subscribe();
    }
  }

  getExerciseTypeId(exerciseType: string) {
    switch (exerciseType) {
      case 'BIKE':
        this.exerciseTypeId = 1;
        return;
      case 'RUN':
        this.exerciseTypeId = 2;
        return;
      case 'SWIM':
        this.exerciseTypeId = 3;
        return;
      default:
        this.exerciseTypeNotFoundError = true;
        return;
    }
  }

  createActivityLog(formValues, teamId, userId) {
    const activity: IActivity = {
      activityDate: formValues.activityDate,
      activityDistance: formValues.activityDistance,
      teamId: teamId,
      userId: userId,
      exerciseTypeId: this.exerciseTypeId,
    };
    return activity;
  }
}
