import { Injectable } from '@angular/core';
import { IAccount } from '@models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AccountLoginService {
  constructor() {}

  private account:IAccount[] = [
    { email: 'giuseppecapicotto@gmail.com', pass: '123ciao', users: ['Main','Giuseppe','Greta','Cosimo','Riccardo']}
  ];

  public addAccount(email:string, pass:string, users:string[]=['Main']){
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

  

  private _user!: string;
  public set user(user: string) {
    this._user = user;
  }
  get user() {
    return this._user;
  }




}
