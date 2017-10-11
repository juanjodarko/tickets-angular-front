import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Angular2TokenService } from 'angular2-token';
import { AuthService } from '../auth.service';

@Injectable()
export class AdminGuard implements CanActivate {
	constructor(private authService:AuthService, private authTokenService:Angular2TokenService, private router:Router){}

	canActivate(){
		if(this.authTokenService.userSignedIn() && this.authService.isAdmin()){

			return true
		}else{
			this.router.navigate(['/login']);
			return false;
		}
	}
}