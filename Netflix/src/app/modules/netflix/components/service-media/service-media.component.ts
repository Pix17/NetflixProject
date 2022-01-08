import { Component, OnInit,Input } from '@angular/core';
import { IService } from '@models/interfaces';

@Component({
  selector: 'service-media',
  templateUrl: './service-media.component.html',
  styleUrls: ['./service-media.component.scss']
})
export class ServiceMediaComponent implements OnInit {
  @Input() item!: IService;

  constructor() { }

  ngOnInit(): void {
  }

}
