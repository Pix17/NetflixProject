import { Component, OnInit } from '@angular/core';
import { IUser } from '@models/interfaces';

@Component({
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {
  user!: IUser;

  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(''+localStorage.getItem('user'));
  }

}
