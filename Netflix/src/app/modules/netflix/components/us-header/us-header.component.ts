import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '@models/interfaces';

@Component({
  selector: 'us-header',
  templateUrl: './us-header.component.html',
  styleUrls: ['./us-header.component.scss']
})
export class UsHeaderComponent implements OnInit {

  @Input() user!:IUser;
  constructor() { }

  ngOnInit(): void {
  }

}
