import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRegisterUser } from 'src/app/models/IRegisterUser';
import { ICurrentUser } from 'src/app/models/ICurrentUser';
import { ILoginUser } from 'src/app/models/ILoginUser';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
@Injectable()
export class AccountService {
  currentUser: ICurrentUser;
  isUnathorized: boolean;
  constructor(private http: HttpClient) {}
  registerUser(userToRegister: IRegisterUser) {
    return this.http.post(
      'https://localhost:44357/api/Account',
      userToRegister, {observe: 'response'})
    .pipe(catchError(err => {
      return of(false);
    }))
  }
  // of operator is a creation operator. Creation operators are functions that create an Observable stream from a source
  // tap allows us to see the value that we are being given back from the request
  loginUser(userToLogin:ILoginUser) {
    return this.http
      .post('https://localhost:44357/api/Account/Login', userToLogin, {observe: 'response'})
      .pipe(
        tap((data) => {
          this.currentUser = <ICurrentUser>data.body
          if(this.currentUser.emailConfirmed){
            this.isUnathorized = false;
          }
          this.saveCurrentUserToLocalStorage();
        })
      )
      .pipe(catchError(err => {
        if(err.status === 401){
          this.isUnathorized = true;
        }
        return of(err)
      }))
  }

  logout(){
    localStorage.removeItem('user');
    window.location.href = "/Login"
  }

  saveCurrentUserToLocalStorage(){
    localStorage.setItem('user', JSON.stringify(this.currentUser));
  }

  getCurrentUserFromLocalStorage(){
    let user:ICurrentUser = JSON.parse(localStorage.getItem('user'));
    if(!user) return;
    if(user.emailConfirmed){
      this.currentUser = user;
      this.isUnathorized = false;
    }


  }
}
