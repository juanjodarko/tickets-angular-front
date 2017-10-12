import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Angular2TokenService } from 'angular2-token';
import { Ticket } from '../ticket.model';
import { Message } from '../message.model';


@Component({
  selector: 'app-ticket-edit',
  templateUrl: './ticket-edit.component.html',
  styleUrls: ['./ticket-edit.component.sass']
})
export class TicketEditComponent implements OnInit {

	id:number;
	private sub:any;
  	ticket = {
		title : '',
		description: '',
		customer_id: +0
	}

	message = {
		content: '',
		ticket_id: +0,
		user_id: +0
	}

	messages: Message[] = [];

  constructor(private router:Router, private route:ActivatedRoute, private authService:Angular2TokenService) { }

  ngOnInit() {
  	this.sub = this.route.params.subscribe( params => {
  		this.id = +params['id'];
  		this.authService.get('tickets/'+this.id).map(res => res.json()).subscribe( res => {
  			this.ticket.title = res.title;
  			this.ticket.description = res.description;
  			for (var i = res.messages.length - 1; i >= 0; i--) {
  				this.messages.push(res.messages[i])
  			}
  		});
  	})
  }

  onTicketUpdate(){
  	this.message.ticket_id = this.id;
  	this.message.user_id = this.authService.currentUserData.id;
  	this.authService.post('messages', {message: this.message}).map(res => res.json()).subscribe(
  		res => {
  			if(res.status == undefined || res.status == null)
  				this.router.navigate(['/tickets']);
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
