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
  link: string = '../login';

  constructor(
    private account: AccountLoginService,
    private signup: SignupService
  ) {}

  ngOnInit(): void {
    if(this.signup.email){
      this.email = this.signup.email;
    }else{
      this.email = 'Inserisci la tua email'
    }
  }

  login() {
    // console.log(this.email +" "+ this.pass);
    
    const item = this.account.findAccount(this.email, this.pass);
    if (item) {
      console.log();
      
      this.link = '../ProfilesGate';
      localStorage.setItem('account', JSON.stringify(item));
      this.account.accountChosen = item;
    }
  }
}