export interface IService {
  title: string;
  description: string;
  media: string;
  video?: string;
}

export interface IUser {
  user:string,
  img:string
}

export interface IAccount {
  email:string,
  pass:string,
  users?:IUser[]
}