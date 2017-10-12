import { Message } from './message.model';

export class Ticket {
  constructor( public id?: number, 
  	public title?: string, 
  	public description?: string, 
  	public customer_id?: string, 
  	public agent_id?: string,
  	public close_date?: string,
  	public messages?: Message[]
  ){}
}