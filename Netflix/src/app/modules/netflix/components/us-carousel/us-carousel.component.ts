import { Component, Input, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';

@Component({
  selector: 'us-carousel',
  templateUrl: './us-carousel.component.html',
  styleUrls: ['./us-carousel.component.scss'],
})
export class UsCarouselComponent implements OnInit {
  constructor(private readonly api: ApiCallService) {}
  
@Input() list:any;
@Input() name!:string;


  ngOnInit(): void {
  }
}
