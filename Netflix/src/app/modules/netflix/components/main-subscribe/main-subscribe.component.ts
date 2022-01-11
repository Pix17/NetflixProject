import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { SignupService } from '../../services/signup.service';

@Component({
  selector: 'main-subscribe',
  templateUrl: './main-subscribe.component.html',
  styleUrls: ['./main-subscribe.component.scss'],
})
export class MainSubscribeComponent implements OnInit {
  faChevronRight = faChevronRight;
  email!: string;
  constructor(private signup: SignupService) {}

  ngOnInit(): void {}

  signUp() {
    this.signup.email = this.email;
  }
}
