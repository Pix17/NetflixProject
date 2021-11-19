import { Component, OnInit } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'main-subscribe',
  templateUrl: './main-subscribe.component.html',
  styleUrls: ['./main-subscribe.component.scss']
})
export class MainSubscribeComponent implements OnInit {
  
  faChevronRight = faChevronRight;

  constructor() { }

  ngOnInit(): void {
  }

}
