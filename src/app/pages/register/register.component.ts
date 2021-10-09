import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from 'src/app/validators/password-validator';

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

    }, {validators: passwordValidator})
  }
  // the second parameter of FormGroup is validators dont put password validator on formControl put it on formGroup
  registerUser(formValues){
    console.log(formValues);

  }

}
