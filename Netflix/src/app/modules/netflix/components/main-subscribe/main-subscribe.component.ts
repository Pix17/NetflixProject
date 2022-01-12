import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { SignupService } from '../../services/signup.service';

@Component({
  selector: 'main-subscribe',
  templateUrl: './main-subscribe.component.html',
  styleUrls: ['./main-subscribe.component.scss'],
})
export class MainSubscribeComponent implements OnInit {
  faChevronRight = faChevronRight;
  email: string = this.signup.email;

  link!: string;

  userRegistrationForm!: FormGroup;

  constructor(private signup: SignupService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userRegistrationForm = this.fb.group({
      email: ['', Validators.email],
    });
  }

  signUp(validationMail: boolean | undefined) {
    if (validationMail && this.email) {
      this.link = 'signup';
      this.signup.email = this.email;
    }
  }
}
