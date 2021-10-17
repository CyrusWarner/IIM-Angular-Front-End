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
  isAuthorized: boolean;
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
          this.currentUser = <ICurrentUser>data['data'];
        })
      )
      .pipe(catchError(err => {
        if(err.status === 401){
          this.isAuthorized = true;
        }
        return of(err)
      }))
  }
}
