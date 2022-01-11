import { Component, OnInit } from '@angular/core';
import { IUser } from '@models/interfaces';
import { AccountLoginService } from '../../services/account-login.service';

@Component({
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {
  user!: IUser;

  constructor(private account:AccountLoginService) { }

  ngOnInit(): void {
    this.user = this.account.user;
  }

}
