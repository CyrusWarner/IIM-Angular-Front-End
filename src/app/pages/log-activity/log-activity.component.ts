import { Router } from '@angular/router';
import { LogActivityService } from '../../services/log-activity-service/log-activity.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { activityDateValidator } from 'src/app/validators/activity-date.validator';
@Component({
  selector: 'app-log-activity',
  templateUrl: './log-activity.component.html',
  styleUrls: ['./log-activity.component.css'],
})
export class LogActivityComponent implements OnInit {
  logActivityForm: FormGroup;
  activityDate: FormControl;
  exerciseType: FormControl;
  activityDistance: FormControl;
  constructor(
    public logActivityService: LogActivityService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activityDate = new FormControl('', [
      Validators.required,
      activityDateValidator,
    ]);
    this.exerciseType = new FormControl('', Validators.required);
    this.activityDistance = new FormControl('', Validators.required);
    this.logActivityForm = new FormGroup({
      activityDate: this.activityDate,
      exerciseType: this.exerciseType,
      activityDistance: this.activityDistance,
    });
  }

  handleCancel(): void {
    this.router.navigateByUrl('/Home');
  }
}
