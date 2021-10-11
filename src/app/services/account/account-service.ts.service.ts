import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRegisterUser } from 'src/app/models/IRegisterUser';
@Injectable()
export class AccountService {
  constructor(private http:HttpClient) { }

  registerUser(user:IRegisterUser){
    return this.http.post("http://localhost:38580/api/Account", user);
  }

  loginUser(){

  }
}
