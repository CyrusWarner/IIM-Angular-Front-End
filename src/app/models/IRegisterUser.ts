export interface IRegisterUser {
  firstName: string,
  lastName: string,
  userName: string,
  email: string,
  password: string,
  confirmPassword: string
}

export interface IRegisterResponse {
  body: null,
  ok: boolean,
  status: number,
  statusText:string
}
