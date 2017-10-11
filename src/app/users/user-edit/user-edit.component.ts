import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Angular2TokenService } from 'angular2-token';
import { User } from '../user.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.sass']
})
export class UserEditComponent implements OnInit {

	id:number;
	private sub: any;
	user = {
		name: '',
		email: '',
		role: ''
	};

	roles = [
		"admin",
		"agent",
		"customer"
	]

  constructor(private router:Router, private route:ActivatedRoute, private authService:Angular2TokenService) { }

  ngOnInit() {
  	this.sub = this.route.params.subscribe( params => {
  		this.id = +params['id'];
  		this.authService.get('users/'+this.id).map(res => res.json()).subscribe( res => {
  			this.user.name = res.name;
  			this.user.email = res.email;
  			this.user.role = res.role;
  		});
  	})
  }

  onUserUpdate(){
  	this.authService.put('users/'+this.id, {user: this.user}).map(res => res.json()).subscribe(
  		res => {
  			if(res.status == 200)
  				this.router.navigate(['/users']);
  		},
  		err => {
  			console.log(err);
  		}
  	)
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
