import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AccountLoginService } from '../../services/account-login.service';
import { SignupService } from '../../services/signup.service';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  email!: string;
  pass!: string;

  link:string = '../login';

  constructor(private account: AccountLoginService,) {}

  ngOnInit(): void {
  }

  login() {
    const item = this.account.findAccount(this.email, this.pass);
    if (item) {
      this.link = '../ProfilesGate'; 
      localStorage.setItem('account',JSON.stringify(item));
      this.account.accountChosen = item;     
    }
  }
}
