import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  constructor() {}

  ngOnInit(): void {
    this.activityDate = new FormControl('', Validators.required);
    this.exerciseType = new FormControl('', Validators.required);
    this.activityDistance = new FormControl('', Validators.required);
    this.logActivityForm = new FormGroup({
      activityDate: this.activityDate,
      exerciseType: this.exerciseType,
      activityDistance: this.activityDistance
    });
  }

  saveActivity(formValues) {
    console.log(formValues);
  }
}
