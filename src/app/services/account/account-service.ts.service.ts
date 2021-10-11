import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRegisterUser } from 'src/app/models/IRegisterUser';
@Injectable()
export class AccountService {
  constructor(private http:HttpClient) { }

  registerUser(user:IRegisterUser){
    console.log(user)
    return this.http.post("https://localhost:44357/api/Account", user);
  }

  loginUser(){

  }
}
