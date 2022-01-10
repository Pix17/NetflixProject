import { Component, OnInit } from '@angular/core';
import { SignupService } from '../../services/signup.service';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
