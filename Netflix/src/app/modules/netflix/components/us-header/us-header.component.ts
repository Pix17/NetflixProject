import { Component, Input, OnInit } from '@angular/core';
import { IAccount, IUser } from '@models/interfaces';
import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'us-header',
  templateUrl: './us-header.component.html',
  styleUrls: ['./us-header.component.scss'],
})
export class UsHeaderComponent implements OnInit {
  faSearch = faSearch;
  faBell = faBell;

  @Input() user!: IUser;
  @Input() account!: IAccount;

  constructor() {}

  ngOnInit(): void {}

  choseUser(user:IUser){
    localStorage.setItem('user',JSON.stringify(user))
    location.reload();
  }
}
