import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {

  constructor(public authTokenService:Angular2TokenService, public authService:AuthService, private router:Router) { }

  logOut(){
    this.authService.logOutUser().subscribe(() => this.router.navigate(['/']));
  }

  ngOnInit() {
  }

  isAdmin(){
    console.log(this.authService.current_user.role);
    return this.authService.isAdmin();
  }

}
