import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {

	signInUser = {
		email: '',
		password: ''
	};

	@Output() onFormResult = new EventEmitter<any>();

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
  }

  onSignInSubmit(){
  	this.authService.logInUser(this.signInUser).subscribe(
  		res => {
  			if(res.status == 200){
  				//this.onFormResult.emit({signedIn: true, res});
  				this.router.navigate(['/']);
  			}
  		},
  		err => {
  			console.log('err', err);
  			//alert("Log in failed ", err);
  			//this.onFormResult.emit({signedIn: false, err});
  		}
  	)
  }

}
