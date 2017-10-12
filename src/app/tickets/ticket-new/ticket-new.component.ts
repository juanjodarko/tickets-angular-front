import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ticket-new',
  templateUrl: './ticket-new.component.html',
  styleUrls: ['./ticket-new.component.sass']
})
export class TicketNewComponent implements OnInit {

	ticket = {
		title : '',
		description: '',
		customer_id: +0
	}

  constructor(public router:Router, private authService:Angular2TokenService) { }

  ngOnInit() {
  }

  onTicketCreate(){
  	this.ticket.customer_id = this.authService.currentUserData.id;
  	this.authService.post('tickets', {ticket: this.ticket}).map(res => res.json()).subscribe(
  		res => {
  			if(res.status == undefined || res.status == null){
  				this.router.navigate(['/tickets']);
  			}
  		},
  		err => {
  			console.log(err);
  		}
  	);
  }

  

}
