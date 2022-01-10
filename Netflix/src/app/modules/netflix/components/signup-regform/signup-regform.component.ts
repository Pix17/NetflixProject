import { Component, OnInit } from '@angular/core';
import { setTokenSourceMapRange } from 'typescript';
import { AccountLoginService } from '../../services/account-login.service';
import { SignupService } from '../../services/signup.service';

@Component({
  selector: 'signup-regform',
  templateUrl: './signup-regform.component.html',
  styleUrls: ['./signup-regform.component.scss'],
})
export class SignupRegformComponent implements OnInit {
  email!: string;
  pass!:string;
  
  constructor(private signup: SignupService, private account: AccountLoginService) {}

  ngOnInit(): void {
    this.email = this.signup.email;
  }

  add(){
    this.account.addAccount(this.email, this.pass);
  }
}
