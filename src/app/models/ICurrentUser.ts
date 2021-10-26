export interface ICurrentUser {
  id:string,
  firstName:string,
  lastName:string,
  userName:string,
  email:string,
  emailConfirmed: boolean,
  role: string,
  teamId: number,
}
