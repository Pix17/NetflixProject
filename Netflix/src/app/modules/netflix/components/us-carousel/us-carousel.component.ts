import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {
  faChevronLeft,
  faChevronRight,
  faPlay,
  faPlus,
  faThumbsDown,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import { ApiCallService } from '../../services/api-call.service';

@Component({
  selector: 'us-carousel',
  templateUrl: './us-carousel.component.html',
  styleUrls: ['./us-carousel.component.scss'],
})
export class UsCarouselComponent implements OnInit {
  constructor(private readonly api: ApiCallService) {}

  @ViewChild('row') row: any;

  @Input() list: any;
  @Input() name!: string;

  faPlay = faPlay;
  faPlus = faPlus;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  ngOnInit(): void {}

  public scrollRight(): void {
    this.row.nativeElement.scrollTo({
      left: this.row.nativeElement.scrollLeft + 800,
      behavior: 'smooth',
    });
  }

  public scrollLeft(): void {
    this.row.nativeElement.scrollTo({
      left: this.row.nativeElement.scrollLeft - 800,
      behavior: 'smooth',
    });
  }
}
