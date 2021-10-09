import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup
  firstName:FormControl
  lastName:FormControl
  userName:FormControl
  email:FormControl
  password:FormControl
  confirmPassword:FormControl
  constructor() { }

  ngOnInit(): void {
    this.firstName = new FormControl('', Validators.required);
    this.lastName =  new FormControl('', Validators.required)
    this.userName = new FormControl('', Validators.required)
    this.email = new FormControl('', Validators.required)
    this.password = new FormControl('', Validators.required)
    this.confirmPassword = new FormControl('', Validators.required)

    this.registerForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      userName: this.userName,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword,

    })
  }

  registerUser(formValues){
    console.log(formValues);

  }

}
