import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { Ticket } from '../ticket.model';


@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.sass']
})
export class TicketListComponent implements OnInit {

	tickets:Ticket[] = [];

  constructor(private authService:Angular2TokenService) { }

  ngOnInit() {
  	this.authService.get('tickets').map(res => res.json()).subscribe(
  		res => {
  			for (var i = res.length - 1; i >= 0; i--) {
  				this.tickets.push(res[i]);
  			}
  		}
  	)
  }

}
