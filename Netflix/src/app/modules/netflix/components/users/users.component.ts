import { Component, OnInit } from '@angular/core';
import { IAccount, IUser } from '@models/interfaces';
import { AccountLoginService } from '../../services/account-login.service';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  account!:IAccount;


  constructor() { }

  ngOnInit(): void {
    // this.account = this.signup.accountChosen;
    this.account = JSON.parse(""+localStorage.getItem('account'));
  }

  choseUser(user:IUser){
    localStorage.setItem('user',JSON.stringify(user))
  }

}
