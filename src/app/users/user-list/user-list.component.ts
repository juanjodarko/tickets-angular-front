import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { User } from '../user.model';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})
export class UserListComponent implements OnInit {
	users:User[] = [];

  constructor(private authService:Angular2TokenService) { }

  ngOnInit() {
  	this.authService.get('users').map(res => res.json()).subscribe(
  		res => {
  			for (var i = res.length - 1; i >= 0; i--) {
  				this.users.push(res[i]);
  			}
  		}
  	)
  }

}
