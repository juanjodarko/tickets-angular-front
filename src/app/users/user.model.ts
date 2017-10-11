export class User {
  constructor( public id?: number, 
  	public name?: string, 
  	public nickname?: string, 
  	public uid?: string, 
  	public role?: string,
  	public created_at?: string,
  	public email?: string,
  	public image?: string,
  	public provider?: string,
  	public updated_at?: string){
    
  }
}