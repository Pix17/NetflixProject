import { Injectable } from '@angular/core';
import { IAccount } from '@models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor() {}

  private _email!: string;
  public set email(email: string) {
    this._email = email;
  }
  get email() {
    return this._email;
  }
}
