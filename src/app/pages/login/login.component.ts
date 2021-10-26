import { ICurrentUser } from 'src/app/models/ICurrentUser';
import { ILoginUser } from 'src/app/models/ILoginUser';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AccountService } from 'src/app/services/account/account-service.ts.service';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  constructor(public accountService: AccountService, private router: Router ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }

  loginUser(userToLogin:ILoginUser){
    this.accountService.loginUser(userToLogin).subscribe((res:HttpResponse<ICurrentUser>) => {
      if(res.status === 200){
        this.accountService.saveCurrentUserToLocalStorage();
        this.router.navigate(['/Home'])
      }

    });


  }

}
