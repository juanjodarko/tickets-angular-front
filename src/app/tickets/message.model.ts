import { User } from '../users/user.model';

export class Message {
	constructor(
		public id?: number,
		public ticket_id?: number,
		public content?: string,
		public user?: User
	){}
}