import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.sass']
})
export class UserNewComponent implements OnInit {

	user = {
		name: '',
		email: '',
		password: '',
		password_confirmation: '',
		role: ''
	};

	roles = [
	"admin",
	"agent",
	"customer"
	]


  constructor(public router:Router, private authService:Angular2TokenService) { }

  ngOnInit() {
  }

  onNewUserCreate(){
  	this.authService.post('users', {user: this.user}).map(res => res.json()).subscribe(
  		res => {
  			if(res.status == 200)
  				this.router.navigate(['/users']);
  		},
  		err => {
  			console.log(err);
  		}
  	)
  }

}
