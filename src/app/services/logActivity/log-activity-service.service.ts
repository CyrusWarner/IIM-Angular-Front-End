import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class LogActivityService {

  constructor(private http: HttpClient) { }

  saveActivity(formValues){
    console.log(formValues);

  }
}
