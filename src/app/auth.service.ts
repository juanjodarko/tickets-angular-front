import { Injectable } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { Subject, Observable } from 'rxjs';
import { Response } from '@angular/http';
import { User } from './users/user.model';

@Injectable()
export class AuthService {

  public current_user:User;

  userSignedIn$:Subject<boolean> = new Subject();

  constructor(public authService:Angular2TokenService) { 

    this.authService.validateToken().subscribe(
      res => {
        if(res.status == 200){
          this.current_user = res.json().data;
          this.userSignedIn$.next(res.json().success)
        }else{
          this.userSignedIn$.next(false)
        }
      }
    )
  }

  isAdmin(){
    let value = false;
    if(this.userSignedIn$){
      value = this.current_user.role == "admin";
    }
    return value;
  }

  logOutUser():Observable<Response>{

    return this.authService.signOut().map(
        res => {
          this.userSignedIn$.next(false);
          return res;
        }
    );
  }

  registerUser(signUpData:  {email:string, password:string, passwordConfirmation:string}):Observable<Response>{
    return this.authService.registerAccount(signUpData).map(
        res => {
          this.userSignedIn$.next(true);
          return res
        }
    );
  }

  logInUser(signInData: {email:string, password:string}):Observable<Response>{

    return this.authService.signIn(signInData).map(
        res => {
          this.userSignedIn$.next(true);
          return res
        }
    );
  }

}
