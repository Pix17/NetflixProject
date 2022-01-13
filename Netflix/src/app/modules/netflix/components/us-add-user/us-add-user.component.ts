import { Component, OnInit } from '@angular/core';
import { IAccount, IUser } from '@models/interfaces';
import { AccountLoginService } from '../../services/account-login.service';

@Component({
  selector: 'us-add-user',
  templateUrl: './us-add-user.component.html',
  styleUrls: ['./us-add-user.component.scss']
})
export class UsAddUserComponent implements OnInit {
  account!: IAccount;
  prova!:string;

  constructor(private readonly acc: AccountLoginService) { }

  ngOnInit(): void {
    this.account = JSON.parse(""+localStorage.getItem('account'));
  }

  addUser(){
    console.log(this.prova);
    console.log(this.account.users);
    this.account.users?.push({user:this.prova, img:'https://image.shutterstock.com/image-vector/add-create-profile-photo-icon-260nw-2023504886.jpg'})
    console.log(this.account.users);
    localStorage.setItem('account', JSON.stringify(this.account));

  }

}
