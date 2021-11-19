import { Component, OnInit, Input } from '@angular/core';
import { IService } from '@models/interfaces';

@Component({
  selector: 'service-content',
  templateUrl: './service-content.component.html',
  styleUrls: ['./service-content.component.scss']
})
export class ServiceContentComponent implements OnInit {
  @Input() item!: IService;
  constructor() { }

  ngOnInit(): void {
  }

}
