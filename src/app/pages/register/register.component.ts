import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from 'src/app/validators/password-validator';
import { IRegisterUser } from 'src/app/models/IRegisterUser';
import { AccountService } from 'src/app/services/account/account-service.ts.service';
@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup
  firstName:FormControl
  lastName:FormControl
  userName:FormControl
  teamName: FormControl
  startDate:FormControl
  email:FormControl
  password:FormControl
  confirmPassword:FormControl
  constructor(private accountService: AccountService ) { }

  ngOnInit(): void {
    this.firstName = new FormControl('', Validators.required);
    this.lastName =  new FormControl('', Validators.required)
    this.userName = new FormControl('', Validators.required)
    this.teamName = new FormControl('', Validators.required)
    this.startDate = new FormControl('', Validators.required)
    this.email = new FormControl('', Validators.required)
    this.password = new FormControl('', Validators.required)
    this.confirmPassword = new FormControl('', Validators.required)

    this.registerForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      userName: this.userName,
      teamName: this.teamName,
      startDate: this.startDate,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword,

    }, {validators: passwordValidator})
  }
  // the second parameter of FormGroup is validators dont put password validator on formControl put it on formGroup
  registerUser(formValues:IRegisterUser){
    this.accountService.registerUser(formValues).subscribe(data => {
      console.log(data)
    });

  }

}
