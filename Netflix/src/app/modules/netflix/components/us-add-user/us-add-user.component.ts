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
  username!:string;

  constructor(private readonly acc: AccountLoginService) { }

  ngOnInit(): void {
    this.account = JSON.parse(""+localStorage.getItem('accountChosen'));
  }

  addUser(){
    this.account = JSON.parse(""+localStorage.getItem(this.account.email));

    this.account.users?.push({user:this.username, img:'https://image.shutterstock.com/image-vector/add-create-profile-photo-icon-260nw-2023504886.jpg'})
    
    localStorage.setItem(this.account.email, JSON.stringify(this.account));
    localStorage.setItem('accountChosen', JSON.stringify(this.account));
  }

}
