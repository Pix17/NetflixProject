import { Injectable } from '@angular/core';
import { IAccount, IUser } from '@models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AccountLoginService {
  constructor() {}

  private account:IAccount[] = [
    { email: 'giuseppecapicotto@gmail.com', pass: '123ciao', users: [
      {user:'Main', img:'https://i.pinimg.com/236x/97/7f/e7/977fe798cf2c3a037e7aa9af6ce4b9d1.jpg'},
      {user:'Giuseppe', img:'https://i.pinimg.com/736x/fd/2c/aa/fd2caa9fd03a24a112ce4f20b51d66de.jpg'},
      {user:'Greta', img:'https://i.pinimg.com/474x/38/93/8b/38938bf56687ffaa7a3a2dae4c6e8d12.jpg'},
      {user:'Cosimo', img:'https://i.pinimg.com/550x/df/2e/a4/df2ea433cbcb184f316efad584d82351.jpg'},
      {user:'Riccardo', img:'https://i.pinimg.com/170x/1a/8a/9a/1a8a9a4aa9747d11493cf12551a62884.jpg'}]}
  ];

  public addAccount(email:string, pass:string, users:IUser[]=[{user:'Main', img:'https://i.pinimg.com/236x/97/7f/e7/977fe798cf2c3a037e7aa9af6ce4b9d1.jpg'}]){
    this.account.push(
      {email,pass, users}
    )
  }

  public findAccount(email:string, pass:string){
    return this.account.find( item => item.email == email && item.pass == pass)
  }

  private _account!:IAccount;
  public set accountChosen(account: IAccount) {
    this._account = account;
  }
  get accountChosen() {
    return this._account;
  }

  

  private _user!: IUser;
  public set user(user: IUser) {
    this._user = user;
  }
  get user() {
    return this._user;
  }




}
