import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-log-activity',
  templateUrl: './log-activity.component.html',
  styleUrls: ['./log-activity.component.css']
})
export class LogActivityComponent implements OnInit {
  logActivityForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.logActivityForm = new FormGroup({

    })
  }

}
